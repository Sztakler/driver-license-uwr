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
import Illustrations from "../../../../../../src/assets/images/svg/icons/Illustrations";
import Input from "../../atoms/Input";

export default function TiledMenu({ data, headings, ...props }) {
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
					<Title className="text-8xl">Trening</Title>
					<Subtitle className="text-2xl pt-5 max-w-prose mb-8">
						{isTrainingSelected
							? "Wybierz pytania, które chcesz przećwiczyć:"
							: "Zapraszamy Cię na sesję treningową! TRENING to pytania egzaminacyjne bez końca. Możesz użyć filtrów, aby wybrać pytania, których chcesz się dziś uczyć."}
					</Subtitle>
				</TitleContainer>

				<IllustrationContainer>
					{isTrainingSelected ? (
						<div></div>
					) : (
						<div className="flex flex-col">
							<img
								src={Illustrations.TrainingIllustration}
								className="self-center w-[70%]"
							></img>
							<div className="flex flex-row w-full gap-4 justify-center">
								<button
									className=" bg-[#fffcf5] hover:bg-[#ffd363] mt-10 w-[500px] border rounded-[100px] border-[#0d0d0d]"
									onClick={() => navigate("/trening/praktyka")}
								>
									<Subtitle className="text-4xl font-semibold text-center m-0 py-6">
										PODSUMOWANIE TRENINGU
									</Subtitle>
								</button>
								<button
									className=" bg-[#fffcf5] hover:bg-[#ffd363] mt-10 w-[500px] border rounded-[100px] border-[#0d0d0d]"
									onClick={scrollDown}
								>
									<Subtitle className="text-4xl font-semibold text-center m-0 py-6">
										PRZEJDŹ DALEJ
									</Subtitle>
								</button>
							</div>
						</div>
					)}
				</IllustrationContainer>
			</HeaderContainer>

			<MainContainer id="MainContainer" className="relative">
				{isTrainingSelected ? (
					<div className="flex flex-col w-full gap-[200px]">
						<form className="flex flex-row align-center justify-center w-full h-full gap-48">
							<div className="flex flex-col justify-start">
								<label for="all" className="flex flex-row pb-2">
									<Input checkbox id="all" type="checkbox" value="all"></Input>
									<Paragraph style="text-2xl">
										<span className="font-semibold">Wszystkie </span>(2125)
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
										<span className="font-semibold">Zapisane </span>(25)
									</Paragraph>
								</label>
							</div>

							<div className="flex flex-col justify-start align-center">
								<Subtitle className="text-2xl font-semibold pb-4">
									Poziom znajomości:
								</Subtitle>

								<label for="low" className="flex flex-row pb-2">
									<Input checkbox id="low" type="checkbox" value="low"></Input>
									<Paragraph style="text-xl">niski (1000)</Paragraph>
								</label>

								<label for="medium" className="flex flex-row pb-2">
									<Input
										checkbox
										id="medium"
										type="checkbox"
										value="medium"
									></Input>
									<Paragraph style="text-xl">średni (1000)</Paragraph>
								</label>

								<label for="high" className="flex flex-row pb-2">
									<Input
										checkbox
										id="high"
										type="checkbox"
										value="high"
									></Input>
									<Paragraph style="text-xl">wysoki (1000)</Paragraph>
								</label>
							</div>
						</form>
						<button
							className="self-center bg-[#fffcf5] hover:bg-[#ffd363] mt-10 w-[70%] border rounded-[100px] border-[#0d0d0d]"
							onClick={startPractice}
						>
							<Subtitle className="text-4xl font-semibold text-center m-0 py-6">
								ROZPOCZNIJ TRENING
							</Subtitle>
						</button>
					</div>
				) : (
					<div></div>
				)}
			</MainContainer>
		</Container>
	);
}
