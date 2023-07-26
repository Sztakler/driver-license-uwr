import React, { useState, useEffect } from "react";
import { StatisticsAlign, InnerContainer } from "./styles";
import Diagram from "../../../molecules/UserPage/Diagram";

async function getStatistics() {
	let actualDate = new Date(Date.now());
	let startDate = new Date(actualDate.setDate(actualDate.getDate() - 6));
	let temporaryDate = new Date(Date.now());
	let numberOfDaysToAdd = 6;
	let endDate = new Date(
		temporaryDate.setDate(startDate.getDate() + numberOfDaysToAdd)
	);

	let from = `${actualDate.getUTCFullYear()}-${
		actualDate.getUTCMonth() + 1
	}-${actualDate.getUTCDate()} 00:00:00`;
	let to = `${endDate.getUTCFullYear()}-${
		endDate.getUTCMonth() + 1
	}-${endDate.getUTCDate()} 23:59:59`;
	console.log(from, to);

	return fetch(`http://localhost:5000/api/statistics/${from}/${to}`, {
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

function mapIntDayWeekToString(day) {
	let dayToString = {
		1: "pon",
		2: "wt",
		3: "śr",
		4: "czw",
		5: "pt",
		6: "sob",
		0: "niedz",
	};

	return dayToString[day];
}

export default function Statistics() {
	const [userKnowledgeCounts, setUserKnowledgeCounts] = useState({
		high_count: 0,
		medium_count: 0,
		low_count: 0,
	});
	const [examsDone, setExamsDone] = useState({});

	let actualDate = new Date(Date.now());
	let startDate = new Date(actualDate.setDate(actualDate.getDate() - 6));

	function prepareMaterialProgress() {
		let data = [];
		let high_count = userKnowledgeCounts.high_count;
		let medium_count = userKnowledgeCounts.medium_count;
		let low_count = userKnowledgeCounts.low_count;

		data.push(low_count, medium_count, high_count);
		return data;
	}

	const doughnutData = {
		labels: [
			"Materiał nieopanowany",
			"Materiał do powtórki",
			"Materiał w pełni opanowany",
		],
		datasets: [
			{
				label: "Procent opanowanego materiału",
				data: prepareMaterialProgress(),
				backgroundColor: ["#FF6230", "#FFC120", "#A4E057"],
				borderColor: ["#0D0D0D", "#0D0D0D", "#0D0D0D"],
				borderWidth: 1,
			},
		],
	};

	function assignBackgroundColor(exams) {
		if (exams < 2) return "#FF6230";
		else if (exams < 4) return "#FFBA07";
		else return "#A4E057";
	}

	// Set vertical bar labels and data
	let labels = [];
	for (let i = 0; i < 7; i++) {
		labels.push(mapIntDayWeekToString(startDate.getUTCDay()));
		startDate.setDate(startDate.getDate() + 1);
	}

	const verticalData = {
		labels,
		datasets: [
			{
				label: "Liczba przerobionych egzaminów",
				data: labels.map((label) => {
					return examsDone[label] !== undefined ? examsDone[label] : 0;
				}),
				backgroundColor: labels.map((label) =>
					assignBackgroundColor(examsDone[label])
				),
			},
		],
	};

	useEffect(() => {
		const fetchQuestions = async () => {
			const statistics = await getStatistics();
			setUserKnowledgeCounts(statistics.material_progress);
			setExamsDone(() => {
				let newState = {};
				statistics.weekly_exams.forEach((date) => {
					let tempDate = new Date(date.created_at);
					let key = mapIntDayWeekToString(tempDate.getUTCDay());
					newState[key] = Number.isInteger(newState[key])
						? newState[key] + 1
						: 1;
				});
				console.log(newState);
				return newState;
			});
		};

		fetchQuestions();
	}, []);

	return (
		<StatisticsAlign>
			<InnerContainer>
				<Diagram
					type="doughnut"
					data={doughnutData}
					diagramTitle={"Procent przerobionego materiału"}
				/>
				<Diagram
					type="vertical-bar"
					data={verticalData}
					diagramTitle={"Liczba ukończonych egzaminów"}
				/>
			</InnerContainer>
		</StatisticsAlign>
	);
}
