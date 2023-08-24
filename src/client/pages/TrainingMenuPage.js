import React from "react";
import PageTemplate from "client/components/templates/PageTemplate";
import Navbar from "client/components/organisms/Navbar";
import TrainingMenu from "client/components/organisms/Training/TrainingMenu";

export default function TrainingMenuPage() {
	return (
		<PageTemplate header={<Navbar />}>
			<TrainingMenu />
		</PageTemplate>
	);
}
