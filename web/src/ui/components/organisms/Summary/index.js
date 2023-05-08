import React from "react";

import Button from "../../atoms/Button";
import ArrowLeft from "../../../../icons/ArrowLeft";

import {
	SummaryContainer,
	InnerTextBox,
	InsideBackground,
	Table,
	Column,
	Statistic,
	Points,
} from "./styles";
import { useLocation, useNavigate } from "react-router";

export default function Summary(props) {
	const location = useLocation();
	let result = "default";

	console.log(location.state);
	if (location.state) {
		if (
			location.state.hasOwnProperty("isTraining") &&
			location.state.hasOwnProperty("positive")
		) {
			result = location.state.isTraining
				? "podsumowanie TRENINGU"
				: location.state.positive
				? "wynik POZYTYWNY"
				: "wynik NEGATYWNY";
		}
	}

	if (result == "default") {
		return;
	}

	if (
		!(
			location.state.hasOwnProperty("result") &&
			location.state.result.hasOwnProperty("questionCounter") &&
			location.state.result.hasOwnProperty("skipped") &&
			location.state.result.hasOwnProperty("correct") &&
			location.state.result.hasOwnProperty("incorrect") &&
			location.state.result.hasOwnProperty("points")
		)
	) {
		return;
	}

	const navigate = useNavigate();
	return (
		<SummaryContainer>
			<InnerTextBox positive={true}>
				<InsideBackground>
					<span className="font-[Barriecito]">{result}</span>
					<Table>
						<Column>
							<Statistic>zdobyte punkty:</Statistic>
							<Points>{location.state.result.points}</Points>
						</Column>
						<Column>
							<Statistic>dobre odpowiedzi:</Statistic>
							<Points className="text-[#518402]">
								{location.state.result.correct}
							</Points>
						</Column>
						<Column>
							<Statistic>błędne odpowiedzi:</Statistic>
							<Points className="text-[#FF4412]">
								{location.state.result.incorrect}
							</Points>
						</Column>
						<Column>
							<Statistic>pominięte odpowiedzi:</Statistic>
							<Points className="text-[#FBBD1F]">
								{location.state.result.skipped}
							</Points>
						</Column>
					</Table>
					<Button
						primary
						size="l"
						onClick={() => {
							if (location.state.isTraining) {
								navigate("/trening");
							} else {
								navigate("/egzamin");
							}
						}}
					>
						{location.state.isTraining ? "NOWY TRENING" : "NOWY EGZAMIN"}
					</Button>
					<Button blank>
						<ArrowLeft /> Przejrzyj odpowiedzi
					</Button>
				</InsideBackground>
			</InnerTextBox>
		</SummaryContainer>
	);
}
