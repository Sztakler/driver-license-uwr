import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { DiagramContainer } from "./styles";
import Text from "../../../atoms/Text";

export default function Diagram() {
	const [questionsCount, setQuestionsCount] = useState(0);
	const [userKnowledgeCounts, setUserKnowledgeCounts] = useState({
		high_count: 0,
		medium_count: 0,
	});

	ChartJS.register(ArcElement, Tooltip, Legend);

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

	function PrepareData() {
		let data = [];
		let high_count = userKnowledgeCounts.high_count;
		let medium_count = userKnowledgeCounts.medium_count;
		let low_count = questionsCount - (high_count + medium_count);
		data.push(low_count, medium_count, high_count);
		return data;
	}

	useEffect(() => {
		const fetchQuestions = async () => {
			const questionsCount = await GetQuestionsCount();
			const knowledgeLevelsCount = await GetUserKnowledgeLevels();

			setQuestionsCount(questionsCount);
			setUserKnowledgeCounts(knowledgeLevelsCount);
		};

		fetchQuestions();
	}, []);

	let o = {
		plugins: {
			title: {
				color: "#0d0d0d",
				display: true,
				text: "Opanowany materiał",
				padding: {
					top: 10,
					bottom: 30,
				},
			},
			legend: {
				display: true,
				position: "right",
				align: "end",
			},
		},
	};

	return (
		<DiagramContainer>
			<Doughnut data={data} options={o} />
		</DiagramContainer>
	);
}
