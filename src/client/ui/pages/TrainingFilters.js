import React, { useEffect, useState } from "react";
import Navbar from "../components/organisms/Navbar";
import TrainingFilters from "../components/organisms/Training/TrainingFilters";
import ContentFillTemplate from "../components/templates/ContentFillTemplate";
import { fetchData } from "../../utils/utils";
import Loading from "../components/molecules/Loading";

export default function TrainingFiltersPage() {
	const [filtersValues, setFiltersValues] = useState({
		questionCount: 0,
		savedQuestionsCount: 0,
		lowKnowledgeCount: 0,
		mediumKnowledgeCount: 0,
		highKnowledgeCount: 0,
	});
	const [dataFetched, setDataFetched] = useState(false);

	useEffect(() => {
		const fetchAndSetData = async () => {
			let numberOfQuestion = await fetchData(
				"/api/questions-count",
				"same-origin"
			);
			let highAndMediumKnowledge = await fetchData(
				"/api/user-knowledge-levels",
				"include"
			);
			let savedQuestions = await fetchData("/api/saved-questions", "include");
			let lowKnowledgeCount =
				numberOfQuestion -
				highAndMediumKnowledge.high_count -
				highAndMediumKnowledge.medium_count;
			let mediumKnowledgeCount = highAndMediumKnowledge.medium_count;
			let highKnowledgeCount = highAndMediumKnowledge.high_count;
			setFiltersValues({
				questionCount: numberOfQuestion,
				savedQuestionsCount: savedQuestions.length,
				lowKnowledgeCount: lowKnowledgeCount,
				mediumKnowledgeCount: mediumKnowledgeCount,
				highKnowledgeCount: highKnowledgeCount,
			});
			setDataFetched(true);
		};

		fetchAndSetData();
	}, []);

	return (
		<ContentFillTemplate header={<Navbar />}>
			{dataFetched ? (
				<TrainingFilters filtersValues={filtersValues} />
			) : (
				<Loading />
			)}
		</ContentFillTemplate>
	);
}
