import React from "react";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";

import Button from "../../../atoms/Button";
import Label from "../../../atoms/Label";
import Input from "../../../atoms/Input";
import Paragraph from "../../../atoms/Paragraph";
import Text from "../../../atoms/Text";
import Subtitle from "../../../atoms/Subtitle";

import {
	Container,
	HeaderContainer,
	TitleContainer,
	IllustrationContainer,
	MainContainer,
	Title,
	Form,
	InputsWrapper,
} from "./styles";


export default function TrainingFilters({ data, headings, ...props }) {
	const navigate = useNavigate();

	function navigateToPractice() {
		navigate("/trening/praktyka")
	}

	return (
		<Container>
			<HeaderContainer>
				<TitleContainer>
					<Title>Trening</Title>
				</TitleContainer>
			</HeaderContainer>
			<MainContainer
				id="MainContainer"
				className={
					"flex flex-col relative justify-center"
				}>
				<div className="flex flex-col items-center justify-evenly md:bg-gradient-to-b rounded-xl from-[#FFE0A3] to-[#FFFBF3] max-md:py-8">
					<Text className="text-center text-xl font-semibold max-md:px-4">
						Wybierz pytania egzaminacyjne, których chcesz się dziś
						uczyć:
					</Text>
					<Form>
						<InputsWrapper>
							<Label for="all" className="flex flex-row pb-2">
								<Input
									checkbox
									id="all"
									type="checkbox"
									value="all"
								></Input>
								<Paragraph style="text-2xl">
									<Text className="font-medium md:font-semibold text-[18.3px]">
										Wszystkie
									</Text>
									<Text className="text-[18.3px]"> (2125)</Text>
								</Paragraph>
							</Label>

							<Label for="saved" className="flex flex-row pb-2">
								<Input
									checkbox
									id="saved"
									type="checkbox"
									value="saved"
								></Input>
								<Paragraph style="text-2xl">
									<Text className="font-medium md:font-semibold text-[18.3px]">
										Zapisane{" "}
									</Text>
									<Text className="text-[18.3px]">(25)</Text>
								</Paragraph>
							</Label>
						</InputsWrapper>

						<InputsWrapper>
							<Text className="text-2xl font-medium md:font-semibold pb-4">
								Poziom znajomości:
							</Text>

							<Label
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
							</Label>

							<Label
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
							</Label>

							<Label
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
							</Label>
						</InputsWrapper>
					</Form>
					<Button primary hover onClick={navigateToPractice} size="l"
						className="max-md:font-medium max-md:max-w-[256px] max-md:h-[48px] max-md:text-[20px]"
					>
						Rozpocznij trening
					</Button>
				</div>
			</MainContainer>
		</Container>);
}