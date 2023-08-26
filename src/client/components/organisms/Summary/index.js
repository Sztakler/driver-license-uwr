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
	StatisticContainer,
	Statistic,
	Points,
} from "./styles";
import ResultsTable from "client/components/molecules/ResultsTable";

function feedbackGenerator(results) {
	if (results.scoredPoints >= 68) {
		return "EGZAMIN ZALICZONY";
	} else {
		return "EGZAMIN NIEZALICZONY";
	}
}

export default function Summary({ results }) {
	const { id } = useParams();

	const navigate = useNavigate();

	const data = [
		{
			header: "zdobyte punkty:",
			number: results.scoredPoints,
			numberColor: "",
		},
		{
			header: "poprawne odpowiedzi:",
			number: results.correctAnswers,
			numberColor: "text-[#518402]",
		},
		{
			header: "błędne odpowiedzi:",
			number: results.incorrectAnswers,
			numberColor: "text-[#FF4412]",
		},
		{
			header: "pominięte odpowiedzi:",
			number: results.skippedQuestions,
			numberColor: "text-[#FBBD1F]",
		},
	];

	return (
		<SummaryContainer>
			<InnerTextBox positive={results.scoredPoints >= 68}>
				<InsideBackground>
					<Text className="font-display max-md:text-[125%] max-xl:text-[100%] max-[300px]:text-[85%] text-[70%] max-md:max-w-[360px] max-xl:max-w-[800px] max-w-[540px] break-words leading-2">
						{feedbackGenerator(results)}
					</Text>
					<ResultsTable data={data} />
					<Button
						primary
						hover
						size="m"
						className="mb-2 max-w-[280px]"
						onClick={() => {
							navigate("/egzamin");
						}}
					>
						NOWY EGZAMIN
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
