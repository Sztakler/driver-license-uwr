import React, { useState, useEffect } from "react";
import { StatisticsAlign, InnerContainer } from "./styles";
import Diagram from "../../../molecules/UserPage/Diagram";

async function GetQuestionsCount() {
	return fetch("http://localhost:5000/api/questions-count", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		});
}

async function Get() {
	return fetch("http://localhost:5000/api/questions-count", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		});
}

async function GetUserKnowledgeLevels() {
	return fetch("http://localhost:5000/api/user-knowledge-levels", {
		method: "GET",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		});
}

export default function Statistics() {
	const [questionsCount, setQuestionsCount] = useState(0);
	const [userKnowledgeCounts, setUserKnowledgeCounts] = useState({
		high_count: 0,
		medium_count: 0,
	});


	function PrepareData() {
		let data = [];
		let high_count = userKnowledgeCounts.high_count;
		let medium_count = userKnowledgeCounts.medium_count;
		let low_count = questionsCount - (high_count + medium_count);
		data.push(low_count, medium_count, high_count);
		return data;
	}


	const data = {
		labels: [
			"Materiał nieopanowany",
			"Materiał do powtórki",
			"Materiał w pełni opanowany",
		],
		datasets: [
			{
				label: "Procent opanowanego materiału",
				data: PrepareData(),
				backgroundColor: ["#FF6230", "#FFC120", "#A4E057"],
				borderColor: ["#0D0D0D", "#0D0D0D", "#0D0D0D"],
				borderWidth: 1,
			},
		],
	};

	useEffect(() => {
		const fetchQuestions = async () => {
			const questionsCount = await GetQuestionsCount();
			const knowledgeLevelsCount = await GetUserKnowledgeLevels();

			setQuestionsCount(questionsCount);
			setUserKnowledgeCounts(knowledgeLevelsCount);
		};

		fetchQuestions();
	}, []);

	return (
		<StatisticsAlign>
			<InnerContainer>
				<Diagram type="doughnut" data={data} diagramTitle={"Procent przerobionego materiału"} />
				<Diagram type="vertical-bar" data={data} diagramTitle={"Liczba ukończonych egzaminów"} />
			</InnerContainer>
		</StatisticsAlign>
	);
}
