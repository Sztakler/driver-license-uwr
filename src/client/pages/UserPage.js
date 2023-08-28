import React, { useState, useEffect } from "react";

import PageTemplate from "client/components/templates/PageTemplate";
import Navbar from "client/components/organisms/Navbar";

import Statistics from "client/components/organisms/UserOrganisms/Statistics";
import SavedQuestions from "client/components/organisms/UserOrganisms/SavedQuestions";
import Settings from "client/components/organisms/UserOrganisms/Settings";
import ViewsNavigation from "client/components/molecules/UserMolecules/ViewsNavigation";
import User from "client/components/molecules/UserMolecules/User";
import { fetchData } from "client/utils/other";
import Loading from "client/components/molecules/Loading";

export default function UserPage() {
	const [selectedView, setSelectedView] = useState(0);
	const [userName, setUserName] = useState("");
	const [dataFetched, setDataFetched] = useState();

	const changeSelectedView = (newValue) => {
		setSelectedView(newValue);
	};

	useEffect(() => {
		const fetchAndSetData = async () => {
			let user = await fetchData("/api/user/user-name", "include");
			setUserName(user.name);
			setDataFetched(true);
		};
		fetchAndSetData();
	}, []);

	return (
		<PageTemplate header={<Navbar />}>
			{dataFetched ? (
				<>
					<User name={userName} />
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
				</>
			) : (
				<Loading />
			)}
		</PageTemplate>
	);
}
