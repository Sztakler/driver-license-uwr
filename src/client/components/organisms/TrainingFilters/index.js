import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import TrainingFiltersContext from "context/TrainingFiltersContext";
import { useMediaQuery } from "react-responsive";

import Button from "client/components/atoms/Button";
import Label from "client/components/atoms/Label";
import Input from "client/components/atoms/Input";
import Paragraph from "client/components/atoms/Paragraph";
import Text from "client/components/atoms/Text";
import Subtitle from "client/components/atoms/Subtitle";

import {
	Container,
	HeaderContainer,
	TitleContainer,
	MainContainer,
	Title,
	Form,
	InputsWrapper,
} from "./styles";

export default function TrainingFilters({
	data,
	headings,
	filtersValues,
	savedQuestionsKnowledges,
	...props
}) {
	const navigate = useNavigate();

	const { trainingFiltersPicked, setNewTrainingFiltersPicked } = useContext(
		TrainingFiltersContext
	);
	const [filtersCorrect, setFiltersCorrect] = useState(false);

	function areFiltersCorrect(trainingFiltersPicked, filtersValues) {
		if (trainingFiltersPicked.onlySavedQuestions) {
			return (
				filtersValues.savedQuestionsCount > 0 &&
				((trainingFiltersPicked.lowKnowledgeQuestions &&
					savedQuestionsKnowledges.lowKnowledgeCount > 0) ||
					(trainingFiltersPicked.mediumKnowledgeQuestions &&
						savedQuestionsKnowledges.mediumKnowledgeCount > 0) ||
					(trainingFiltersPicked.highKnowledgeQuestions &&
						savedQuestionsKnowledges.highKnowledgeCount > 0))
			);
		}

		return (
			(trainingFiltersPicked.lowKnowledgeQuestions &&
				filtersValues.lowKnowledgeCount > 0) ||
			(trainingFiltersPicked.mediumKnowledgeQuestions &&
				filtersValues.mediumKnowledgeCount > 0) ||
			(trainingFiltersPicked.highKnowledgeQuestions &&
				filtersValues.highKnowledgeCount > 0)
		);
	}

	function startTraining() {
		navigate({
			pathname: "/trening/praktyka",
			search: `?${createSearchParams(trainingFiltersPicked)}`,
		});
	}

	function handleSetCheckboxChange(changedFilter) {
		if (
			(!trainingFiltersPicked.onlySavedQuestions &&
				changedFilter === "allQuestions") ||
			(trainingFiltersPicked.onlySavedQuestions &&
				changedFilter === "savedQuestions")
		) {
			return;
		}
		setNewTrainingFiltersPicked((prevState) => {
			return {
				...prevState,
				onlySavedQuestions: !prevState["onlySavedQuestions"],
			};
		});
	}

	function handleKnowledgeCheckboxChange(changedFilter) {
		setNewTrainingFiltersPicked((prevState) => {
			return {
				...prevState,
				[changedFilter]: !prevState[changedFilter],
			};
		});
	}

	useEffect(() => {
		setFiltersCorrect(areFiltersCorrect(trainingFiltersPicked, filtersValues));
	}, [filtersValues, trainingFiltersPicked]);

	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
	return (
		<Container>
			<HeaderContainer>
				<TitleContainer>
					<Title>Trening</Title>
					{isDesktop && (
						<Subtitle>
							Zapraszamy Cię na sesję treningową! TRENING to pytania
							egzaminacyjne bez końca. Możesz użyć filtrów, aby wybrać pytania,
							których chcesz się dziś uczyć.
						</Subtitle>
					)}
				</TitleContainer>
			</HeaderContainer>
			<MainContainer id="MainContainer">
				<div className="flex flex-col items-center justify-evenly md:bg-gradient-to-b rounded-xl from-[#FFE0A3] to-[#FFFBF3] max-md:py-[2vh] py-6 overflow-y-auto w-full max-w-[1012px] max-xl:max-w-[900px] max-lg:max-w-[700px]">
					<Text className="text-center text-xl font-semibold max-md:px-4">
						Wybierz pytania egzaminacyjne, których chcesz się dziś uczyć:
					</Text>
					<Form>
						<InputsWrapper>
							<Label for="all" className="flex flex-row pb-2">
								<Input
									checkbox
									defaultChecked
									checked={!trainingFiltersPicked.onlySavedQuestions}
									id="all"
									type="checkbox"
									value="all"
									onChange={() => {
										handleSetCheckboxChange("allQuestions");
									}}
								></Input>
								<Paragraph style="text-2xl">
									<Text className="font-medium md:font-semibold text-[18.3px]">
										Wszystkie
									</Text>
									<Text className="text-[18.3px]">
										{" "}
										({filtersValues.questionCount})
									</Text>
								</Paragraph>
							</Label>

							<Label for="saved" className="flex flex-row pb-2">
								<Input
									checkbox
									checked={trainingFiltersPicked.onlySavedQuestions}
									id="saved"
									type="checkbox"
									value="saved"
									onChange={() => {
										handleSetCheckboxChange("savedQuestions");
									}}
								></Input>
								<Paragraph style="text-2xl">
									<Text className="font-medium md:font-semibold text-[18.3px]">
										Zapisane{" "}
									</Text>
									<Text className="text-[18.3px]">
										({filtersValues.savedQuestionsCount})
									</Text>
								</Paragraph>
							</Label>
						</InputsWrapper>

						<InputsWrapper>
							<Text className="text-2xl font-medium md:font-semibold pb-4">
								Poziom znajomości:
							</Text>

							<Label for="low" className="flex flex-row pb-2 items-center ">
								<Input
									checkbox
									defaultChecked
									id="low"
									type="checkbox"
									value="low"
									onChange={() => {
										handleKnowledgeCheckboxChange("lowKnowledgeQuestions");
									}}
								></Input>
								<Paragraph style="text-[16.1px]">
									niski (
									{trainingFiltersPicked.onlySavedQuestions
										? savedQuestionsKnowledges.lowKnowledgeCount
										: filtersValues.lowKnowledgeCount}
									)
								</Paragraph>
							</Label>

							<Label for="medium" className="flex flex-row pb-2 items-center ">
								<Input
									checkbox
									defaultChecked
									id="medium"
									type="checkbox"
									value="medium"
									onChange={() => {
										handleKnowledgeCheckboxChange("mediumKnowledgeQuestions");
									}}
								></Input>
								<Paragraph style="text-[16.1px]">
									średni (
									{trainingFiltersPicked.onlySavedQuestions
										? savedQuestionsKnowledges.mediumKnowledgeCount
										: filtersValues.mediumKnowledgeCount}
									)
								</Paragraph>
							</Label>

							<Label for="high" className="flex flex-row pb-2 items-center ">
								<Input
									checkbox
									defaultChecked
									id="high"
									type="checkbox"
									value="high"
									onChange={() => {
										handleKnowledgeCheckboxChange("highKnowledgeQuestions");
									}}
								></Input>
								<Paragraph style="text-[16.1px]">
									wysoki (
									{trainingFiltersPicked.onlySavedQuestions
										? savedQuestionsKnowledges.highKnowledgeCount
										: filtersValues.highKnowledgeCount}
									)
								</Paragraph>
							</Label>
						</InputsWrapper>
					</Form>
					{filtersCorrect === false && (
						<Text className="absolute bottom-24 max-md:bottom-[74px] font-medium text-[#FF6130]">
							*Wybierz poprawne filtry{" "}
						</Text>
					)}

					<Button
						primary
						hover
						onClick={() => {
							filtersCorrect && startTraining();
						}}
						size="l"
						className="max-md:font-medium max-md:max-w-[256px] max-md:h-[48px] max-md:text-[20px]"
					>
						Rozpocznij trening
					</Button>
				</div>
			</MainContainer>
		</Container>
	);
}
