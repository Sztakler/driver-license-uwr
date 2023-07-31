import React from "react";
import PageTemplate from "../components/templates/PageTemplate";
import Navbar from "../components/organisms/Navbar";
import Training from "../components/organisms/Training";

export default function TrainingMenuPage() {
	return (
		<PageTemplate header={<Navbar />}>
			<Training />
		</PageTemplate>
	);
}
