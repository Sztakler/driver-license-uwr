import React, { useEffect, useState } from "react";
import {
	Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale,
	LinearScale,
	BarElement,
	Title,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import { DiagramContainer } from "./styles";

export default function Diagram({ type, diagramTitle, data }) {

	ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
		LinearScale,
		BarElement,
		Title,);



	let o = {
		plugins: {
			title: {
				color: "#0d0d0d",
				display: true,
				text: diagramTitle,
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
	
	function assignBackgroundColor(exams) {
		if (exams < 2)
			return "#FF6230";
		else if (exams < 4)
			return "#FFBA07";
		else
			return "#A4E057";
	}

	const labels = ['pon', 'wt', 'śr', 'czw', 'pt', 'sob', 'niedz'];
	let exams = 4;
	const barData = {
		labels,
		datasets: [
			{
				label: 'Liczba przerobionych egzaminów',
				data: labels.map(() => exams),
				backgroundColor: assignBackgroundColor(exams),
			},
		],
	};


	if (type === "doughnut") {
		return <DiagramContainer>
			<Doughnut data={data} options={o} />
		</DiagramContainer>;
	} else if (type === "vertical-bar") {
		return <DiagramContainer>
			<Bar options={o} data={barData} />
		</DiagramContainer >;
	} else {
		return <DiagramContainer></DiagramContainer >;
	}
}
