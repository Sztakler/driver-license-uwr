import React, { useContext } from "react";
import NoNavbarTemplate from "../components/templates/NoNavbarTemplate";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import TaskBottom from "../components/organisms/Practice/TaskBottom";
import Menu from "../components/organisms/Practice/Menu";
import TaskTop from "../components/organisms/Practice/TaskTop";
import TaskContext from "../../context/TaskContext";
import Loading from "../components/molecules/Practice/Loading";

export default function ExamPage() {
	const { task, setTask } = useContext(TaskContext);

	return (
		<NoNavbarTemplate
			header={<Navbar />}
			footer={<Footer />}
			count={task ? 3 : 1}
		>
			{task ? (
				<>
					<TaskTop isReview={false}/>
					<Menu isReview={false}/>
					<TaskBottom isReview={false}/>
				</>
			) : (
				<Loading />
			)}
		</NoNavbarTemplate>
	);
}
