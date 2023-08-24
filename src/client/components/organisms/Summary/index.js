import React from "react";
import { useNavigate, useParams } from "react-router";

import Button from "client/components/atoms/Button";
import Text from "client/components/atoms/Text";
import Image from "client/components/atoms/Image";
import Illustrations from "assets/images/svg/icons/Illustrations";

import {
	SummaryContainer,
	InnerTextBox,
	InsideBackground,
	Table,
	StatisticContainer,
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

export default function Summary({ results }) {
	const { id } = useParams();

	const navigate = useNavigate();

	return (
		<SummaryContainer>
			<InnerTextBox positive={results.scoredPoints >= 68}>
				<InsideBackground>
					<Text className="font-display max-md:text-[125%] max-xl:text-[100%] text-[70%] max-md:max-w-[360px] max-xl:max-w-[800px] max-w-[540px] break-words">
						{feedbackGenerator(results)}
					</Text>
					<Table>
						<StatisticContainer>
							<Statistic>zdobyte punkty:</Statistic>
							<Points>{results.scoredPoints}</Points>
						</StatisticContainer>
						<StatisticContainer>
							<Statistic>dobre odpowiedzi:</Statistic>
							<Points className="text-[#518402]">
								{results.correctAnswers}
							</Points>
						</StatisticContainer>
						<StatisticContainer>
							<Statistic>błędne odpowiedzi:</Statistic>
							<Points className="text-[#FF4412]">
								{results.incorrectAnswers}
							</Points>
						</StatisticContainer>
						<StatisticContainer>
							<Statistic>pominięte odpowiedzi:</Statistic>
							<Points className="text-[#FBBD1F]">
								{results.skippedQuestions}
							</Points>
						</StatisticContainer>
					</Table>
					<Button
						primary
						hover
						size="m"
						className="mb-2 max-w-[280px]"
						onClick={() => {
							navigate("/egzamin");
						}}
					>
						{"NOWY EGZAMIN"}
					</Button>
					<Button
						blank
						className=""
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
