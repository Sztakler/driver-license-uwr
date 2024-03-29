import React, { useState, useEffect } from "react";
import { StatisticsAlign, InnerContainer } from "./styles";
import Diagram from "client/components/molecules/UserMolecules/Diagram";
import { useMediaQuery } from "react-responsive";
import { urlToServer } from "client/configure_build";

async function getStatistics(endDate) {
	let tempDate = new Date(endDate.getTime());
	let startDate = new Date(tempDate.setDate(tempDate.getDate() - 6));

	let from = `${startDate.getFullYear()}-${
		startDate.getMonth() + 1
	}-${startDate.getDate()} 00:00:00`;
	let to = `${endDate.getFullYear()}-${
		endDate.getMonth() + 1
	}-${endDate.getDate()} 23:59:59`;

	return fetch(`${urlToServer}/api/statistics/${from}/${to}`, {
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
	const [endDate, setEndDate] = useState(new Date(Date.now()));
	const [verticalLabels, setVerticalLabels] = useState([]);
	const [verticalData, setVerticalData] = useState({
		labels: [],
		datasets: [],
	});
	const [doughnutData, setDoughnutData] = useState({
		labels: [],
		datasets: [],
	});
	const [mobileDiagramPick, setMobileDiagramPick] = useState(0);

	function assignBackgroundColor(exams) {
		if (exams < 2) return "#FF6230";
		else if (exams < 4) return "#FFBA07";
		else return "#A4E057";
	}

	function prepareMaterialProgress() {
		let data = [];
		let high_count = userKnowledgeCounts.high_count;
		let medium_count = userKnowledgeCounts.medium_count;
		let low_count = userKnowledgeCounts.low_count;

		data.push(low_count, medium_count, high_count);
		return data;
	}

	// Set vertical bar labels and data
	useEffect(() => {
		let labels = [];
		let tempDate = new Date(Date.now());
		let startDate = new Date(tempDate.setDate(tempDate.getDate() - 6));
		for (let i = 0; i < 7; i++) {
			labels.push(mapIntDayWeekToString(startDate.getDay()));
			startDate.setDate(startDate.getDate() + 1);
		}
		setVerticalLabels(labels);
	}, [endDate]);

	useEffect(() => {
		setVerticalData({
			labels: verticalLabels,
			datasets: [
				{
					label: "Liczba przerobionych egzaminów",
					data: verticalLabels.map((label) => {
						return examsDone[label] !== undefined ? examsDone[label] : 0;
					}),
					backgroundColor: verticalLabels.map((label) =>
						assignBackgroundColor(examsDone[label])
					),
				},
			],
		});
	}, [verticalLabels, examsDone]);

	useEffect(() => {
		setDoughnutData({
			labels: [
				"Niski poziom znajomości",
				"Średni poziom znajomości",
				"Wysoki poziom znajomości",
			],
			datasets: [
				{
					label: "Liczba pytań o danym poziomie znajomości",
					data: prepareMaterialProgress(),
					backgroundColor: ["#FF6230", "#FFC120", "#A4E057"],
					borderColor: ["#0D0D0D", "#0D0D0D", "#0D0D0D"],
					borderWidth: 1,
				},
			],
		});
	}, [userKnowledgeCounts]);

	useEffect(() => {
		const fetchQuestions = async () => {
			const statistics = await getStatistics(endDate);
			setUserKnowledgeCounts(statistics.material_progress);
			setExamsDone(() => {
				let newState = {};
				statistics.weekly_exams.forEach((date) => {
					let tempDate = new Date(date.created_at);
					let key = mapIntDayWeekToString(tempDate.getDay());
					newState[key] = Number.isInteger(newState[key])
						? newState[key] + 1
						: 1;
				});
				return newState;
			});
		};
		fetchQuestions();
	}, [endDate]);

	function moveByWeekBackwards() {
		let tempDate = new Date(endDate.getTime());
		setEndDate(new Date(tempDate.setDate(tempDate.getDate() - 6)));
	}

	function moveByWeekForwards() {
		let tempDate = new Date(endDate.getTime());
		let actualDate = new Date(Date.now());

		if (
			tempDate.getFullYear() === actualDate.getFullYear() &&
			tempDate.getMonth() === actualDate.getMonth() &&
			tempDate.getDate() === actualDate.getDate()
		) {
			return;
		}
		setEndDate(new Date(tempDate.setDate(tempDate.getDate() + 6)));
	}

	function pickRightDiagram() {
		setMobileDiagramPick(1);
	}

	function pickLeftDiagram() {
		setMobileDiagramPick(0);
	}

	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

	return (
		<StatisticsAlign>
			<InnerContainer>
				{isDesktop || (!isDesktop && mobileDiagramPick === 0) ? (
					<Diagram
						type="doughnut"
						data={doughnutData}
						diagramTitle={"Liczba pytań o danym poziomie znajomości"}
						pickRightDiagram={pickRightDiagram}
					/>
				) : (
					""
				)}
				{isDesktop || (!isDesktop && mobileDiagramPick === 1) ? (
					<Diagram
						type="vertical-bar"
						data={verticalData}
						diagramTitle={"Liczba przerobionych egzaminów"}
						moveByWeekBackwards={moveByWeekBackwards}
						moveByWeekForwards={moveByWeekForwards}
						endDate={endDate}
						pickLeftDiagram={pickLeftDiagram}
					/>
				) : (
					""
				)}
			</InnerContainer>
		</StatisticsAlign>
	);
}
