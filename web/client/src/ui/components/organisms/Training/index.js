import React, { useState } from "react";
import { useNavigate } from "react-router";

import TrainingPageIllustrations from "../../../../assets/images/svg/TrainingPage/TrainingPageIllustrations";

import Paragraph from "../../atoms/Paragraph";
import Text from "../../atoms/Text";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

import {
	Container,
	MainContainer,
	HeaderContainer,
	TitleContainer,
	IllustrationContainer,
	Title,
	Subtitle,
} from "./styles";

export default function Training({ data, headings, ...props }) {
	const navigate = useNavigate();

	const [isTrainingSelected, setIsTrainingSelected] = useState(false);

	let scrollDown = () => {
		setIsTrainingSelected(true);
	};

	let startPractice = () => {
		navigate("/trening/praktyka");
	};

	return (
		<Container>
			<HeaderContainer>
				<TitleContainer>
					<Title>Trening</Title>
					<Subtitle className="mb-8 max-w-prose">
						Zapraszamy Cię na sesję treningową! TRENING to pytania egzaminacyjne
						bez końca. Możesz użyć filtrów, aby wybrać pytania, których chcesz
						się dziś uczyć.
					</Subtitle>
				</TitleContainer>

				<IllustrationContainer>
					{isTrainingSelected ? (
						<MainContainer
							id="MainContainer"
							className={
								isTrainingSelected ? "flex relative justify-center" : ""
							}
						>
							{isTrainingSelected ? (
								<div className="flex flex-col items-center justify-evenly bg-gradient-to-b rounded-xl from-[#FFE0A3] to-[#FFFBF3] py-8">
									<Text className="text-xl font-semibold">
										Wybierz pytania egzaminacyjne, których chcesz się dziś
										uczyć:
									</Text>
									<form className="flex flex-row align-center justify-center gap-48 py-16 px-64  mb-14">
										<div className="flex flex-col justify-start">
											<label for="all" className="flex flex-row pb-2">
												<Input
													checkbox
													id="all"
													type="checkbox"
													value="all"
												></Input>
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

											<label
												for="low"
												className="flex flex-row pb-2 items-center "
											>
												<Input
													checkbox
													id="low"
													type="checkbox"
													value="low"
												></Input>
												<Paragraph style="text-[16.1px]">
													niski (1000)
												</Paragraph>
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
												<Paragraph style="text-[16.1px]">
													średni (1000)
												</Paragraph>
											</label>

											<label
												for="high"
												className="flex flex-row pb-2 items-center "
											>
												<Input
													checkbox
													id="high"
													type="checkbox"
													value="high"
												></Input>
												<Paragraph style="text-[16.1px]">
													wysoki (1000)
												</Paragraph>
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
					) : (
						<>
							<div
								className="w-full h-[382px] bg-training-menu bg-no-repeat bg-center bg-contain 	my-8
"
							></div>
							<div className="flex flex-row flex-wrap w-full gap-4 justify-center p-[23px] mt-6">
								<Button primary hover onClick={scrollDown} size="l">
									Wybór pytań
								</Button>
							</div>
						</>
					)}
				</IllustrationContainer>
			</HeaderContainer>
		</Container>
	);
}
