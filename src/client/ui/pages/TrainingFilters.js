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
	const [savedQuestionsKnowledges, setSavedQuestionsKnowledges] = useState({
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
			let knowledgeCounts = await fetchData(
				"/api/user-knowledge-levels",
				"include"
			);
			let savedQuestions = await fetchData("/api/saved-questions", "include");

			let savedQuestionKnowledges = await fetchData(
				"/api/saved-questions/knowledge-levels",
				"include"
			);

			let lowSavedQuestionsKnowledgeCount = savedQuestionKnowledges.low_count;
			let mediumSavedQuestionsKnowledgeCount =
				savedQuestionKnowledges.medium_count;
			let highSavedQuestionsKnowledgeCount = savedQuestionKnowledges.high_count;

			let lowKnowledgeCount = knowledgeCounts.low_count;
			let mediumKnowledgeCount = knowledgeCounts.medium_count;
			let highKnowledgeCount = knowledgeCounts.high_count;

			setFiltersValues({
				questionCount: numberOfQuestion,
				savedQuestionsCount: savedQuestions.length,
				lowKnowledgeCount: lowKnowledgeCount,
				mediumKnowledgeCount: mediumKnowledgeCount,
				highKnowledgeCount: highKnowledgeCount,
			});
			setSavedQuestionsKnowledges({
				lowKnowledgeCount: lowSavedQuestionsKnowledgeCount,
				mediumKnowledgeCount: mediumSavedQuestionsKnowledgeCount,
				highKnowledgeCount: highSavedQuestionsKnowledgeCount,
			});
			setDataFetched(true);
		};

		fetchAndSetData();
	}, []);

	return (
		<ContentFillTemplate header={<Navbar />}>
			{dataFetched ? (
				<TrainingFilters filtersValues={filtersValues} savedQuestionsKnowledges={savedQuestionsKnowledges} />
			) : (
				<Loading />
			)}
		</ContentFillTemplate>
	);
}
