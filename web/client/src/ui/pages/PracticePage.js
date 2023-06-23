import React, { useContext, useEffect } from "react";
import NoNavbarTemplate from "../components/templates/NoNavbarTemplate";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import TaskBottom from "../components/organisms/Practice/Regular/TaskBottom";
import Menu from "../components/organisms/Practice/Regular/Menu";
import TaskTop from "../components/organisms/Practice/Regular/TaskTop";
import TaskContext from "../../context/TaskContext";
import Loading from "../components/molecules/Practice/Loading";

export default function PracticePage() {
	const { task, setNewTask, setNewSavedQuestions } = useContext(TaskContext);

	function getPracticeQuestions() {
		return fetch("http://localhost:5000/api/practice")
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
		};

		fetchQuestions();
		return;
	}, []);

	return (
		<NoNavbarTemplate
			header={<Navbar />}
			footer={<Footer />}
			count={task ? 3 : 1}
		>
			{task ? (
				<>
					<TaskTop isExam={false} />
					<Menu isExam={false} />
					<TaskBottom isExam={false} />
				</>
			) : (
				<Loading />
			)}
		</NoNavbarTemplate>
	);
}
