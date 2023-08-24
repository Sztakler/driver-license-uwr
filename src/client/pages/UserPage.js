import React, { useState } from "react";

import PageTemplate from "client/components/templates/PageTemplate";
import Navbar from "client/components/organisms/Navbar";

import Statistics from "client/components/organisms/UserOrganisms/Statistics";
import SavedQuestions from "client/components/organisms/UserOrganisms/SavedQuestions";
import Settings from "client/components/organisms/UserOrganisms/Settings";
import ViewsNavigation from "client/components/molecules/UserMolecules/ViewsNavigation";
import User from "client/components/molecules/UserMolecules/User";

export default function UserPage() {
	const [selectedView, setSelectedView] = useState(0);

	const changeSelectedView = (newValue) => {
		setSelectedView(newValue);
	};

	return (
		<PageTemplate header={<Navbar />}>
			<User />
			<div className="max-lg:px-4">
				<ViewsNavigation
					selectedView={selectedView}
					changeSelectedView={changeSelectedView}
				/>
			</div>
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
