import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import PageTemplate from "../components/templates/PageTemplate";
import Navbar from "../components/organisms/Navbar";
import Summary from "../components/organisms/Summary";

import { fetchData } from "../../utils/utils"

export default function SummaryPage() {
	const { id } = useParams();
	const [results, setResults] = useState({
		questionCounter: 0,
		scoredPoints: 0,
		correctAnswers: 0,
		incorrectAnswers: 0,
		skippedQuestions: 0,
	});

	useEffect(() => {
		const fetchAndSetData = async () => {
			let examResult = await fetchData(`/api/exam/results/${id}`, "include");
			setResults(examResult.summary);
		};
		fetchAndSetData();
	}, []);

	return (
		<PageTemplate header={<Navbar />}>
			<Summary results={results} />
		</PageTemplate>
	);
}
