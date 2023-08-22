import React, { useContext, useEffect } from "react";
import NoNavbarOnMobileTemplate from "../components/templates/NoNavbarOnMobileTemplate";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import TaskBottomReview from "../components/organisms/Practice/Review/TaskBottom";
import MenuReview from "../components/organisms/Practice/Review/Menu";
import TaskTopReview from "../components/organisms/Practice/Review/TaskTop";
import TaskContext from "../../../context/TaskContext";
import Loading from "../components/molecules/Loading";
import { useParams } from "react-router";
import { fetchData } from "../../utils/utils";

export default function ReviewPage() {
	const { task, setNewTask, setNewSavedQuestions, newSavedQuestions } =
		useContext(TaskContext);
	const { id } = useParams();

	useEffect(() => {
		const fetchAndSetData = async () => {
			console.log("FETCHING");
			let examResult = await fetchData(`/api/exam/results/${id}`, "include");
			console.log(JSON.stringify(examResult));
			setNewSavedQuestions(examResult.questions);
			setNewTask(examResult.questions[0]);
		};
		fetchAndSetData();
	}, []);

	return (
		<NoNavbarOnMobileTemplate header={<Navbar />} count={task ? 3 : 1}>
			{task ? (
				<>
					<TaskTopReview />
					<MenuReview isExam={true} />
					<TaskBottomReview />
				</>
			) : (
				<Loading />
			)}
		</NoNavbarOnMobileTemplate>
	);
}
