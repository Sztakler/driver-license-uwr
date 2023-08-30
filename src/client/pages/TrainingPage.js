import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { urlToServer } from "client/configure_build";

import PracticeContext from "context/PracticeContext";

import NoNavbarOnMobileTemplate from "client/components/templates/NoNavbarOnMobileTemplate";
import Navbar from "client/components/organisms/Navbar";
import TaskBottom from "client/components/organisms/PracticeOrganisms/Regular/TaskBottom";
import Menu from "client/components/organisms/PracticeOrganisms/Regular/Menu";
import TaskTop from "client/components/organisms/PracticeOrganisms/Regular/TaskTop";
import Loading from "client/components/molecules/Loading";

export default function PracticePage() {
	const {
		task,
		setNewTask,
		setNewSavedQuestions,
		setNewTaskStarted,
		setNewFavoriteTask,
	} = useContext(PracticeContext);

	const navigate = useNavigate();

	function getPracticeQuestions(filters) {
		return fetch(
			`${urlToServer}/api/practice?onlySavedQuestions=${filters.onlySavedQuestions}&
																					lowKnowledgeQuestions=${filters.lowKnowledgeQuestions}&
																					mediumKnowledgeQuestions=${filters.mediumKnowledgeQuestions}&
																					highKnowledgeQuestions=${filters.highKnowledgeQuestions}`,
			{
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
			.then((response) => response.json())
			.then((data) => {
				return data;
			});
	}

	useEffect(() => {
		const fetchQuestions = async () => {
			const urlSearchParams = new URLSearchParams(window.location.search);
			const filters = Object.fromEntries(urlSearchParams.entries());
			const questions = await getPracticeQuestions(filters);

			if (questions.length === 0) {
				navigate("/trening/filtry");
				return;
			}
			const modifiedQuestions = questions.map((question) => {
				return { ...question, wybrana_odpowiedz: null };
			});

			setNewSavedQuestions(modifiedQuestions);
			setNewTask(modifiedQuestions[0]);
			setNewTaskStarted(
				modifiedQuestions[0].zakres_struktury === "PODSTAWOWY" ? false : true
			);
			setNewFavoriteTask(modifiedQuestions[0].is_saved);
			const selectElement = document.getElementById("knowledge_level");
			selectElement.selectedIndex = modifiedQuestions[0].knowledge_level;
		};

		fetchQuestions();
		return;
	}, []);

	return (
		<NoNavbarOnMobileTemplate header={<Navbar />} count={task ? 3 : 1}>
			{task ? (
				<>
					<TaskTop isExam={false} />
					<Menu isExam={false} />
					<TaskBottom isExam={false} />
				</>
			) : (
				<Loading />
			)}
		</NoNavbarOnMobileTemplate>
	);
}
