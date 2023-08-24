import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

import Image from "client/components/atoms/Image";
import Text from "client/components/atoms/Text";
import Illustrations from "assets/images/svg/icons/Illustrations";

import { DiagramContainer, Header, DateRange } from "./styles";

export default function Diagram({
	type,
	diagramTitle,
	data,
	moveByWeekBackwards,
	moveByWeekForwards,
	endDate,
	pickLeftDiagram,
	pickRightDiagram,
}) {
	function convertDateToString(date) {
		let day =
			date.getUTCDate() >= 10
				? String(date.getUTCDate())
				: `0${date.getUTCDate()}`;
		let month =
			date.getUTCMonth() >= 10
				? String(date.getUTCMonth())
				: `0${date.getUTCMonth()}`;

		return day + "." + month;
	}

	const [startDateString, setStartDateString] = useState(() => {
		if (!endDate) return null;

		let tempDate = new Date(endDate.getTime());
		let startDate = new Date(tempDate.setDate(tempDate.getDate() - 6));

		return convertDateToString(startDate);
	});

	const [endDateString, setEndDateString] = useState(() => {
		if (!endDate) return null;

		return convertDateToString(endDate);
	});

	ChartJS.register(
		ArcElement,
		Tooltip,
		Legend,
		CategoryScale,
		LinearScale,
		BarElement,
		Title
	);

	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

	let tickConfiguration =
		type === "vertical-bar"
			? {
					y: {
						ticks: {
							stepSize: 1, // Set the step to 1
						},
					},
			  }
			: {};

	let o = {
		scales: tickConfiguration,
		plugins: {
			title: {
				color: "#0d0d0d",
				display: false,
				position: "top",
				text: diagramTitle,
				padding: {
					top: 20,
					bottom: 50,
				},
			},
			legend: {
				display: type === "doughnut" ? true : false,
				position: "bottom",
				align: "center",
			},
		},
	};

	useEffect(() => {
		setStartDateString(() => {
			if (!endDate) return null;

			let tempDate = new Date(endDate.getTime());
			let startDate = new Date(tempDate.setDate(tempDate.getDate() - 6));

			return convertDateToString(startDate);
		});
		setEndDateString(() => {
			if (!endDate) return null;

			return convertDateToString(endDate);
		});
	}, [endDate]);

	if (type === "doughnut") {
		return (
			<DiagramContainer>
				<Header styles="md:absolute top-4 pb-2 ">
					<Text className="text-[18px] text-center">{diagramTitle}</Text>
					{!isDesktop ? (
						<Image
							src={Illustrations.ArrowRightAlternative}
							onClick={pickRightDiagram}
						/>
					) : (
						""
					)}
				</Header>
				<Doughnut data={data} options={o} />
			</DiagramContainer>
		);
	} else if (type === "vertical-bar") {
		return (
			<DiagramContainer>
				<Header styles="md:absolute top-4 pb-2 ">
					{!isDesktop ? (
						<Image
							src={Illustrations.ArrowLeftAlternative}
							onClick={pickLeftDiagram}
						/>
					) : (
						""
					)}
					<Text className="text-[18px] text-center">{diagramTitle}</Text>
				</Header>
				<Bar data={data} options={o} />
				<DateRange>
					<Image
						className="cursor-pointer"
						src={Illustrations.ArrowLeftAlternative}
						onClick={() => {
							moveByWeekBackwards();
						}}
					/>
					{startDateString}-{endDateString}
					<Image
						className="cursor-pointer"
						src={Illustrations.ArrowRightAlternative}
						onClick={() => {
							moveByWeekForwards();
						}}
					/>
				</DateRange>
			</DiagramContainer>
		);
	} else {
		return <DiagramContainer></DiagramContainer>;
	}
}
