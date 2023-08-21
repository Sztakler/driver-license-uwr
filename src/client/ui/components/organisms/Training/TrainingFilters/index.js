import React, { useContext } from "react";
import { useNavigate } from "react-router";

import Button from "../../../atoms/Button";
import Label from "../../../atoms/Label";
import Input from "../../../atoms/Input";
import Paragraph from "../../../atoms/Paragraph";
import Text from "../../../atoms/Text";

import {
	Container,
	HeaderContainer,
	TitleContainer,
	MainContainer,
	Title,
	Form,
	InputsWrapper,
} from "./styles";
import TrainingFiltersContext from "../../../../../../context/TrainingFiltersContext";

export default function TrainingFilters({
	data,
	headings,
	filtersValues,
	...props
}) {
	const navigate = useNavigate();

	function navigateToPractice() {
		navigate("/trening/praktyka");
	}

	const { trainingFiltersPicked, setNewTrainingFiltersPicked } = useContext(
		TrainingFiltersContext
	);

	function handleCheckboxChange(changedFilter) {
		setNewTrainingFiltersPicked((prevState) => {
			return {
				...prevState,
				[changedFilter]: !prevState[changedFilter],
			};
		});
	}

	return (
		<Container>
			<HeaderContainer>
				<TitleContainer>
					<Title>Trening</Title>
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
								<Input checkbox id="all" type="checkbox" value="all"></Input>
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
									id="saved"
									type="checkbox"
									value="saved"
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
								<Input checkbox id="low" type="checkbox" value="low"></Input>
								<Paragraph style="text-[16.1px]">
									niski ({filtersValues.lowKnowledgeCount})
								</Paragraph>
							</Label>

							<Label for="medium" className="flex flex-row pb-2 items-center ">
								<Input
									checkbox
									id="medium"
									type="checkbox"
									value="medium"
								></Input>
								<Paragraph style="text-[16.1px]">
									średni ({filtersValues.mediumKnowledgeCount})
								</Paragraph>
							</Label>

							<Label for="high" className="flex flex-row pb-2 items-center ">
								<Input checkbox id="high" type="checkbox" value="high"></Input>
								<Paragraph style="text-[16.1px]">
									wysoki ({filtersValues.highKnowledgeCount})
								</Paragraph>
							</Label>
						</InputsWrapper>
					</Form>
					<Button
						primary
						hover
						onClick={navigateToPractice}
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
