import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useRecoilState } from "recoil";

import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import ArrowLeft from "../../../../icons/ArrowLeft";
import { inReviewModeState, resultsState } from "../../../../recoil/atoms";

import {
	SummaryContainer,
	InnerTextBox,
	InsideBackground,
	Table,
	Column,
	Statistic,
	Points,
} from "./styles";

// typeorm + postgres
// ts-node
// args [ -r ""]
// portable web application
// media query print

function feedbackGenerator(isTraining, results) {
	if (isTraining) {
		let percentage =
			(100 * results.correctAnswers) /
			(results.correctAnswers +
				results.incorrectAnswers +
				results.skippedQuestions);

		if (isNaN(percentage)) {
			return "ERROR";
		}
		if (percentage < 50) {
			return "SPRÓBUJ PONOWNIE";
		}
		if (percentage >= 50 && percentage <= 70) {
			return "DOBRA ROBOTA";
		}
		return "WYŚMIENICIE";
	} else {
		if (results.scoredPoints > 75) {
			return "EGZAMIN ZALICZONY";
		} else {
			return "EGZAMIN NIEZALICZONY";
		}
	}
}

export default function Summary({ isTraining }) {
	if (isTraining === undefined) {
		isTraining = true;
	}

	const [results, setResults] = useRecoilState(resultsState);
	const [inReview, setInReview] = useRecoilState(inReviewModeState);

	const navigate = useNavigate();
	return (
		<SummaryContainer>
			<InnerTextBox positive={true}>
				<InsideBackground>
					<Text className="font-[Barriecito]">
						{console.log("HERE", isTraining)}
						{feedbackGenerator(isTraining, results)}
					</Text>
					<Table>
						<Column>
							<Statistic>zdobyte punkty:</Statistic>
							<Points>{results.scoredPoints}</Points>
						</Column>
						<Column>
							<Statistic>dobre odpowiedzi:</Statistic>
							<Points className="text-[#518402]">
								{results.correctAnswers}
							</Points>
						</Column>
						<Column>
							<Statistic>błędne odpowiedzi:</Statistic>
							<Points className="text-[#FF4412]">
								{results.incorrectAnswers}
							</Points>
						</Column>
						<Column>
							<Statistic>pominięte odpowiedzi:</Statistic>
							<Points className="text-[#FBBD1F]">
								{results.skippedQuestions}
							</Points>
						</Column>
					</Table>
					<Button
						primary
						hover
						size="l"
						onClick={() => {
							if (isTraining) {
								navigate("/trening");
							} else {
								navigate("/egzamin");
							}
						}}
					>
						{isTraining ? "NOWY TRENING" : "NOWY EGZAMIN"}
					</Button>
					<Button
						blank
						onClick={() => {
							if (isTraining) {
								navigate("/trening/praktyka");
							} else {
								navigate("/egzamin");
							}
						}}
					>
						<ArrowLeft /> <Text>Przejrzyj odpowiedzi</Text>
					</Button>
				</InsideBackground>
			</InnerTextBox>
		</SummaryContainer>
	);
}
