import React, { useEffect, useState } from "react";
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
import { DiagramContainer } from "./styles";
import Heading from "../../../atoms/Heading";

export default function Diagram({ type, diagramTitle, data }) {
	ChartJS.register(
		ArcElement,
		Tooltip,
		Legend,
		CategoryScale,
		LinearScale,
		BarElement,
		Title
	);

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
					top: 10,
					bottom: 30,
				},
			},
			legend: {
				display: type === "doughnut" ? true : false,
				position: "right",
				align: "end",
			},
		},
	};

	if (type === "doughnut") {
		return (
			<DiagramContainer>
				<Heading level={5} styles="absolute top-4">
					{diagramTitle}
				</Heading>
				<Doughnut data={data} options={o} />
			</DiagramContainer>
		);
	} else if (type === "vertical-bar") {
		return (
			<DiagramContainer>
				<Heading level={5} styles="absolute top-4">
					{diagramTitle}
				</Heading>
				<Bar options={o} data={data} />
			</DiagramContainer>
		);
	} else {
		return <DiagramContainer></DiagramContainer>;
	}
}
