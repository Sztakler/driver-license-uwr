import React, { useContext, useEffect } from "react";
import NoNavbarOnMobileTemplate from "../components/templates/NoNavbarOnMobileTemplate";
import Navbar from "../components/organisms/Navbar";
import TaskBottom from "../components/organisms/Practice/Regular/TaskBottom";
import Menu from "../components/organisms/Practice/Regular/Menu";
import TaskTop from "../components/organisms/Practice/Regular/TaskTop";
import TaskContext from "../../../context/TaskContext";
import Loading from "../components/molecules/Loading";

export default function ExamPage() {
	const { task, setNewTask, setNewSavedQuestions, setNewFavoriteTask } =
		useContext(TaskContext);

	function getFullExam() {
		return fetch("http://localhost:5000/api/exam")
			.then((response) => response.json())
			.then((data) => {
				return data;
			});
	}

	useEffect(() => {
		const fetchRandomTask = async () => {
			const questions = await getFullExam();
			const modifiedQuestions = questions.map((question) => {
				return { ...question, wybrana_odpowiedz: null };
			});
			setNewSavedQuestions(modifiedQuestions);
			setNewTask(modifiedQuestions[0]);
			setNewFavoriteTask(modifiedQuestions[0].is_saved);
		};

		fetchRandomTask();
		return;
	}, []);

	return (
		<NoNavbarOnMobileTemplate header={<Navbar />} count={task ? 3 : 1}>
			{task ? (
				<>
					<TaskTop isExam={true} />
					<Menu isExam={true} />
					<TaskBottom isExam={true} />
				</>
			) : (
				<Loading />
			)}
		</NoNavbarOnMobileTemplate>
	);
}
