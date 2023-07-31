import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import Illustrations from "../../../../assets/images/svg/icons/Illustrations";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import Image from "../../atoms/Image";

import {
	SummaryContainer,
	InnerTextBox,
	InsideBackground,
	Table,
	Column,
	Statistic,
	Points,
} from "./styles";

function feedbackGenerator(results) {
	if (results.scoredPoints > 75) {
		return "EGZAMIN ZALICZONY";
	} else {
		return "EGZAMIN NIEZALICZONY";
	}
}

export default function Summary() {
	const { id } = useParams();

	const navigate = useNavigate();
	const [results, setResult] = useState({
		questionCounter: 0,
		scoredPoints: 0,
		correctAnswers: 0,
		incorrectAnswers: 0,
		skippedQuestions: 0,
	});

	async function getExamResult() {
		let res = await fetch(`http://localhost:5000/api/exam/results/${id}`).then(
			(response) => response.json()
		);
		return res.summary;
	}

	useEffect(() => {
		async function fetchDataAndSetIt() {
			let res = await getExamResult();
			setResult(res);
		}

		fetchDataAndSetIt();
	}, []);

	return (
		<SummaryContainer>
			<InnerTextBox positive={true}>
				<InsideBackground>
					<Text className="font-[Barriecito] text-[87px]">
						{feedbackGenerator(results)}
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
							navigate("/egzamin");
						}}
					>
						{"NOWY EGZAMIN"}
					</Button>
					<Button
						blank
						onClick={() => {
							navigate(`/egzamin/przeglad-odpowiedzi/${id}`);
						}}
					>
						<Image src={Illustrations.ArrowLeft} />
						<Text>Przejrzyj odpowiedzi</Text>
					</Button>
				</InsideBackground>
			</InnerTextBox>
		</SummaryContainer>
	);
}
