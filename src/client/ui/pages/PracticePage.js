import React, { useContext, useEffect } from "react";
import NoNavbarOnMobileTemplate from "../components/templates/NoNavbarOnMobileTemplate";
import Navbar from "../components/organisms/Navbar";
import TaskBottom from "../components/organisms/Practice/Regular/TaskBottom";
import Menu from "../components/organisms/Practice/Regular/Menu";
import TaskTop from "../components/organisms/Practice/Regular/TaskTop";
import TaskContext from "../../../context/TaskContext";
import Loading from "../components/molecules/Loading";

export default function PracticePage() {
	const {
		task,
		setNewTask,
		setNewSavedQuestions,
		setNewTaskStarted,
		favoriteTask,
		setNewFavoriteTask,
	} = useContext(TaskContext);

	function getPracticeQuestions() {
		return fetch("http://localhost:5000/api/practice", {
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				return data;
			});
	}

	useEffect(() => {
		const fetchQuestions = async () => {
			const questions = await getPracticeQuestions();
			const modifiedQuestions = questions.map((question) => {
				return { ...question, wybrana_odpowiedz: null };
			});

			setNewSavedQuestions(modifiedQuestions);
			setNewTask(modifiedQuestions[0]);
			setNewTaskStarted(
				modifiedQuestions[0].zakres_struktury == "PODSTAWOWY" ? false : true
			);
			setNewFavoriteTask(modifiedQuestions[0].is_saved);
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
