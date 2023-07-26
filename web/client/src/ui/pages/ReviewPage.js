import React, { useContext, useEffect } from "react";
import NoNavbarTemplate from "../components/templates/NoNavbarTemplate";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import TaskBottomReview from "../components/organisms/Practice/Review/TaskBottom";
import MenuReview from "../components/organisms/Practice/Review/Menu";
import TaskTopReview from "../components/organisms/Practice/Review/TaskTop";
import TaskContext from "../../context/TaskContext";
import Loading from "../components/molecules/Practice/Loading";
import { useParams } from "react-router";

export default function ReviewPage() {
	const { task, setNewTask, setNewSavedQuestions, newSavedQuestions } =
		useContext(TaskContext);
	const { id } = useParams();
	async function getExamResult() {
		let res = await fetch(`http://localhost:5000/api/exam/results/${id}`).then(
			(response) => response.json()
		);
		return res.questions;
	}

	useEffect(() => {
		async function fetchDataAndSetIt() {
			let res = await getExamResult();
			setNewSavedQuestions(res);
			setNewTask(res[0]);
		}

		fetchDataAndSetIt();
	}, []);

	return (
		<NoNavbarTemplate
			header={<Navbar />}
			footer={<Footer />}
			count={task ? 3 : 1}
		>
			{task ? (
				<>
					<TaskTopReview />
					<MenuReview isExam={true} />
					<TaskBottomReview />
				</>
			) : (
				<Loading />
			)}
		</NoNavbarTemplate>
	);
}
