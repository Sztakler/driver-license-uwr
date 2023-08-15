import React, { useEffect } from "react";
import PageTemplate from "../components/templates/PageTemplate";
import Navbar from "../components/organisms/Navbar";
import TrainingMenu from "../components/organisms/Training/TrainingMenu";

export default function TrainingMenuPage() {
	return (
		<PageTemplate header={<Navbar />}>
			<TrainingMenu />
		</PageTemplate>
	);
}
