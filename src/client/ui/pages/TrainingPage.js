import React, { useContext, useEffect } from "react";

import TrainingFiltersContext from "../../../context/TrainingFiltersContext";
import TaskContext from "../../../context/TaskContext";

import NoNavbarOnMobileTemplate from "../components/templates/NoNavbarOnMobileTemplate";
import Navbar from "../components/organisms/Navbar";
import TaskBottom from "../components/organisms/Practice/Regular/TaskBottom";
import Menu from "../components/organisms/Practice/Regular/Menu";
import TaskTop from "../components/organisms/Practice/Regular/TaskTop";
import Loading from "../components/molecules/Loading";
import { useNavigate } from "react-router";

export default function PracticePage() {
	const {
		task,
		setNewTask,
		setNewSavedQuestions,
		setNewTaskStarted,
		setNewFavoriteTask,
	} = useContext(TaskContext);

	const navigate = useNavigate();

	function getPracticeQuestions(filters) {
		return fetch(
			`http://localhost:5000/api/practice?onlySavedQuestions=${filters.onlySavedQuestions}&
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
			console.log("REFRESH", questions);
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
