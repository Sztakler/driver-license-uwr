import React, { useEffect } from "react";
import Navbar from "../components/organisms/Navbar";
import TrainingFilters from "../components/organisms/Training/TrainingFilters";
import ContentFillTemplate from "../components/templates/ContentFillTemplate";

export default function TrainingFiltersPage() {
	return (
		<ContentFillTemplate header={<Navbar />}>
			<TrainingFilters />
		</ContentFillTemplate>
	);
}
