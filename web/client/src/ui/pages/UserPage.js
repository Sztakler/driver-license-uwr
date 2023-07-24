import React, { useState } from "react";

import PageTemplate from "../components/templates/PageTemplate";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import Text from "../components/atoms/Text";

import Statistics from "../components/organisms/UserPage/Statistics";
import SavedQuestions from "../components/organisms/UserPage/SavedQuestions";
import Settings from "../components/organisms/UserPage/Settings";
import ViewsNavigation from "../components/molecules/UserPage/ViewsNavigation";
import User from "../components/molecules/UserPage/User";


export default function UserPage() {
	// let user = JSON.parse(window.sessionStorage.getItem("User"));

	const [selectedView, setSelectedView] = useState(0);

	const changeSelectedView = (newValue) => {
		setSelectedView(newValue);
	};

	return (
		<PageTemplate header={<Navbar />} footer={<Footer />}>
			<User />
			<ViewsNavigation
				selectedView={selectedView}
				changeSelectedView={changeSelectedView}
			/>
			{selectedView === 0 ? (
				<Statistics />
			) : selectedView === 1 ? (
				<SavedQuestions />
			) : (
				<Settings />
			)}
		</PageTemplate>
	);
}
