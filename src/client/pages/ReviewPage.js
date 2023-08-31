import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";

import NoNavbarOnMobileTemplate from "client/components/templates/NoNavbarOnMobileTemplate";
import Navbar from "client/components/organisms/Navbar";
import TaskBottomReview from "client/components/organisms/PracticeOrganisms/Review/TaskBottom";
import SideMenuReview from "client/components/organisms/PracticeOrganisms/Review/SideMenu";
import TaskTopReview from "client/components/organisms/PracticeOrganisms/Review/TaskTop";
import PracticeContext from "context/PracticeContext";
import Loading from "client/components/molecules/Loading";

import { fetchData } from "../utils/other";

export default function ReviewPage() {
	const { task, setNewTask, setNewSavedQuestions } =
		useContext(PracticeContext);
	const { id } = useParams();

	useEffect(() => {
		const fetchAndSetData = async () => {
			let examResult = await fetchData(`/api/exam/results/${id}`, "include");
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
					<SideMenuReview isExam={true} />
					<TaskBottomReview />
				</>
			) : (
				<Loading />
			)}
		</NoNavbarOnMobileTemplate>
	);
}
