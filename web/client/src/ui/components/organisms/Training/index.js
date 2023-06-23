import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
	cachedAnswersState,
	inReviewModeState,
	resultsState,
} from "../../../../recoil/atoms";

import {
	Container,
	MainContainer,
	HeaderContainer,
	TitleContainer,
	IllustrationContainer,
	Title,
	Subtitle,
} from "./styles";

import Paragraph from "../../atoms/Paragraph";
import Text from "../../atoms/Text";
import Illustrations from "/src/assets/images/svg/icons/Illustrations";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

export default function Training({ data, headings, ...props }) {
	const navigate = useNavigate();

	const [isTrainingSelected, setIsTraningSelected] = useState(false);
	const resetResult = useResetRecoilState(resultsState);
	const resetReviewMode = useResetRecoilState(inReviewModeState);
	const resetCachedAnswers = useResetRecoilState(cachedAnswersState);

	let scrollDown = () => {
		setIsTraningSelected(true);
	};

	let startPractice = () => {
		resetReviewMode();
		resetResult();
		resetCachedAnswers();
		navigate("/trening/praktyka");
	};

	return (
		<Container>
			<HeaderContainer>
				<TitleContainer>
					<Title>Trening</Title>
					<Subtitle className="text-base max-w-prose mb-8">
						{isTrainingSelected
							? "Wybierz pytania, które chcesz przećwiczyć:"
							: "Zapraszamy Cię na sesję treningową! TRENING to pytania egzaminacyjne bez końca. Możesz użyć filtrów, aby wybrać pytania, których chcesz się dziś uczyć."}
					</Subtitle>
				</TitleContainer>

				<IllustrationContainer>
					{isTrainingSelected ? (
						<></>
					) : (
						<div className="flex flex-col max-w-[1830px] ">
							<img
								src={Illustrations.TrainingIllustration2}
								className="self-center w-[100%] mt-8"
							></img>
							<div className="flex flex-row flex-wrap w-full  gap-4 justify-center p-[43px] mt-6">
								<Button primary hover onClick={scrollDown} size="l">
									Wybór pytań
								</Button>
							</div>
						</div>
					)}
				</IllustrationContainer>
			</HeaderContainer>

			<MainContainer id="MainContainer" className="relative">
				{isTrainingSelected ? (
					<div className="flex flex-col items-center justify-start w-full">
						<form className="flex flex-row align-center justify-center gap-48 border-x-[40px] border-y-[20px] border-[#FFD363] p-16 rounded-xl mb-14">
							<div className="flex flex-col justify-start">
								<label for="all" className="flex flex-row pb-2">
									<Input checkbox id="all" type="checkbox" value="all"></Input>
									<Paragraph style="text-2xl">
										<Text className="font-semibold text-[18.3px]">
											Wszystkie
										</Text>
										<Text className="text-[18.3px]"> (2125)</Text>
									</Paragraph>
								</label>

								<label for="saved" className="flex flex-row pb-2">
									<Input
										checkbox
										id="saved"
										type="checkbox"
										value="saved"
									></Input>
									<Paragraph style="text-2xl">
										<Text className="font-semibold text-[18.3px]">
											Zapisane{" "}
										</Text>
										<Text className="text-[18.3px]">(25)</Text>
									</Paragraph>
								</label>
							</div>

							<div className="flex flex-col justify-start align-center">
								<Subtitle className="text-2xl font-semibold pb-4">
									Poziom znajomości:
								</Subtitle>

								<label for="low" className="flex flex-row pb-2 items-center ">
									<Input checkbox id="low" type="checkbox" value="low"></Input>
									<Paragraph style="text-[16.1px]">niski (1000)</Paragraph>
								</label>

								<label
									for="medium"
									className="flex flex-row pb-2 items-center "
								>
									<Input
										checkbox
										id="medium"
										type="checkbox"
										value="medium"
									></Input>
									<Paragraph style="text-[16.1px]">średni (1000)</Paragraph>
								</label>

								<label for="high" className="flex flex-row pb-2 items-center ">
									<Input
										checkbox
										id="high"
										type="checkbox"
										value="high"
									></Input>
									<Paragraph style="text-[16.1px]">wysoki (1000)</Paragraph>
								</label>
							</div>
						</form>
						<Button primary hover onClick={startPractice} size="l">
							Rozpocznij trening
						</Button>
					</div>
				) : (
					<div></div>
				)}
			</MainContainer>
		</Container>
	);
}
