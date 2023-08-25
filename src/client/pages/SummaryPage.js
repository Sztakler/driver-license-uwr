import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import PageTemplate from "client/components/templates/PageTemplate";
import Navbar from "client/components/organisms/Navbar";
import Summary from "client/components/organisms/Summary";

import { fetchData } from "../utils/other";
import Loading from "client/components/molecules/Loading";

export default function SummaryPage() {
	const { id } = useParams();
	const [results, setResults] = useState({
		questionCounter: 0,
		scoredPoints: 0,
		correctAnswers: 0,
		incorrectAnswers: 0,
		skippedQuestions: 0,
	});
	const [resultsFetched, setResultsFetched] = useState(false);

	useEffect(() => {
		const fetchAndSetData = async () => {
			let examResult = await fetchData(`/api/exam/results/${id}`, "include");
			setResults(examResult.summary);
			setResultsFetched(true);
		};
		fetchAndSetData();
	}, []);

	return (
		<PageTemplate header={<Navbar />}>
			{resultsFetched ? (
				<Summary results={results} resultsFetched={resultsFetched} />
			) : (
				<Loading />
			)}
		</PageTemplate>
	);
}
