import React, { useContext } from "react";
import PageTemplate from "../components/templates/PageTemplate";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
// import TaskBottom from "../components/organisms/Practice/TaskBottom";
// import Menu from "../components/organisms/Practice/Menu";
// import TaskTop from "../components/organisms/Practice/TaskTop";
// import TaskContext from "../../context/TaskContext";
// import Loading from "../components/molecules/Practice/Loading";
import Training from "../components/organisms/Training";

export default function PracticePage() {

	return (
		<PageTemplate
			header={<Navbar />}
			footer={<Footer />}
		>
			<Training></Training>
		</PageTemplate>
	);
}
