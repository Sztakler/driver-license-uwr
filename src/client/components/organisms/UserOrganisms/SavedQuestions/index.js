import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { urlToServer } from "client/configure_build";
import { scrollToElement } from "client/utils/Scroller";

import Text from "client/components/atoms/Text";
import Input from "client/components/atoms/Input";
import Image from "client/components/atoms/Image";
import Button from "client/components/atoms/Button";
import ImageBox from "client/components/molecules/PracticeMolecules/ImageBox";

import Illustrations from "assets/images/svg/icons/Illustrations";

import {
	ListAlign,
	InnerContainer,
	ListItem,
	AboveHeader,
	Header,
	FiltersList,
	Filter,
	Name,
	ItemHeader,
	ItemBody,
	TaskData,
	Answers,
	Answer,
	Questions,
	Placeholder,
} from "./styles";

function renderAnswers(task) {
	if (task.structure_scope === "PODSTAWOWY") {
		return (
			<Answers row={true}>
				{task.answers.map((answer, index) => {
					return (
						<Answer>
							<Button
								className={index === task.correct_answer ? "bg-[#91CE6B]" : ""}
								primary
								size="s"
							>
								<Text>{answer}</Text>
							</Button>
						</Answer>
					);
				})}
			</Answers>
		);
	} else if (task.structure_scope === "SPECJALISTYCZNY") {
		return (
			<Answers row={false}>
				{task.answers.map((answer, index) => {
					return (
						<Answer>
							<Button
								className={index === task.correct_answer ? "bg-[#91CE6B]" : ""}
								bubble
								size="m"
							>
								{String.fromCharCode(65 + index)}
							</Button>
							<Text>{answer}</Text>
						</Answer>
					);
				})}
			</Answers>
		);
	}
}

export default function SavedQuestions() {
	const [expandedTaskIdx, setExpandedTaskIdx] = useState(-1);

	const [filtersPicked, setFiltersPicked] = useState({
		PODSTAWOWE: true,
		SPECJALISTYCZNE: true,
		NISKI: true,
		ŚREDNI: true,
		WYSOKI: true,
	});
	const [tasks, setTasks] = useState([]);
	const [filteredTasks, setFilteredTasks] = useState([]);
	const [questionsLoaded, setQuestionsLoaded] = useState(false);
	const [mobileFiltersDisplayed, setMobileFiltersDisplayed] = useState(false);

	function getSavedQuestions() {
		return fetch(`${urlToServer}/api/saved-questions`, {
			method: "GET",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				return data;
			});
	}

	useEffect(() => {
		const fetchQuestions = async () => {
			const questions = await getSavedQuestions();
			setTasks(questions);
			setFilteredTasks(questions);
			setQuestionsLoaded(true);
		};
		fetchQuestions();
	}, []);

	useEffect(() => {
		setFilteredTasks(
			tasks.filter((task) => {
				return (
					(task.structure_scope === "PODSTAWOWY"
						? filtersPicked.PODSTAWOWE
						: task.structure_scope === "SPECJALISTYCZNY"
						? filtersPicked.SPECJALISTYCZNE
						: false) &&
					(task.knowledge_level === 1 || task.knowledge_level === null
						? filtersPicked.NISKI
						: task.knowledge_level === 2
						? filtersPicked.ŚREDNI
						: task.knowledge_level === 3
						? filtersPicked.WYSOKI
						: false)
				);
			})
		);
		setExpandedTaskIdx(-1);
	}, [filtersPicked]);

	function capitalizeFirstLetter(str) {
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	}

	function handleCheckboxChange(changedFilter) {
		setFiltersPicked((prevState) => {
			return {
				...prevState,
				[changedFilter]: !prevState[changedFilter],
			};
		});
	}

	function scrollElement(id) {
		scrollToElement(
			document.getElementById("scrollable"),
			document.getElementById("div" + id),
			1
		);
	}

	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

	return (
		<ListAlign>
			<AboveHeader>
				{!isDesktop && (
					<Button
						blank
						className="underline underline-offset-2 font-medium"
						onClick={() => {
							setMobileFiltersDisplayed(true);
						}}
					>
						Filtruj
					</Button>
				)}

				<Text className="md:ml-auto">
					Liczba zapisanych pytań: {tasks.length}
				</Text>
			</AboveHeader>
			<InnerContainer id="scrollable">
				<Header mobileView={mobileFiltersDisplayed}>
					{!isDesktop && (
						<>
							<Text className="text-xl font-medium mb-5">
								Filtruj zapisane pytania
							</Text>
							<Button
								bubble
								className="absolute left-5 top-7"
								size="m"
								onClick={() => {
									setMobileFiltersDisplayed(false);
								}}
							>
								<Image src={Illustrations.Cancel} />
							</Button>
						</>
					)}
					<FiltersList>
						<Name>Typ pytania:</Name>
						<Filter>
							<Input
								checkbox
								defaultChecked
								id="saved"
								type="checkbox"
								value="saved"
								className="mr-2"
								onChange={() => {
									handleCheckboxChange("PODSTAWOWE");
								}}
							></Input>
							<Text className="my-auto" active={filtersPicked.PODSTAWOWE}>
								Podstawowe
							</Text>
						</Filter>
						<Filter>
							<Input
								checkbox
								defaultChecked
								id="saved"
								type="checkbox"
								value="saved"
								className="mr-2"
								onChange={() => {
									handleCheckboxChange("SPECJALISTYCZNE");
								}}
							></Input>
							<Text className="my-auto" active={filtersPicked.SPECJALISTYCZNE}>
								Specjalistyczne
							</Text>
						</Filter>
					</FiltersList>

					<FiltersList>
						<Name>Poziom znajomości:</Name>
						<Filter>
							<Input
								checkbox
								defaultChecked
								id="saved"
								type="checkbox"
								value="saved"
								className="mr-2"
								onChange={() => {
									handleCheckboxChange("NISKI");
								}}
							></Input>
							<Text className="my-auto" active={filtersPicked.NISKI}>
								Niski
							</Text>
						</Filter>
						<Filter>
							<Input
								checkbox
								defaultChecked
								id="saved"
								type="checkbox"
								value="saved"
								className="mr-2"
								onChange={() => {
									handleCheckboxChange("ŚREDNI");
								}}
							></Input>
							<Text className="my-auto" active={filtersPicked.ŚREDNI}>
								Średni
							</Text>
						</Filter>
						<Filter>
							<Input
								checkbox
								defaultChecked
								id="saved"
								type="checkbox"
								value="saved"
								className="mr-2"
								onChange={() => {
									handleCheckboxChange("WYSOKI");
								}}
							></Input>
							<Text className="my-auto" active={filtersPicked.WYSOKI}>
								Wysoki
							</Text>
						</Filter>
					</FiltersList>
				</Header>

				<Questions id="scrollable">
					{questionsLoaded && filteredTasks.length === 0 ? (
						<Placeholder>
							Żadne z pytań nie spełnia podanych filtrów{" "}
						</Placeholder>
					) : !questionsLoaded ? (
						<Placeholder>Wczytywanie pytań...</Placeholder>
					) : (
						filteredTasks.map((task, index) => {
							return (
								<ListItem
									active={expandedTaskIdx === index}
									id={"div" + index}
									onClick={() => scrollElement(index)}
								>
									<ItemHeader
										onClick={() => {
											setExpandedTaskIdx((prevState) => {
												if (prevState !== index) {
													return index;
												}
												return -1;
											});
										}}
									>
										<div className="flex flex-row gap-6">
											<Image
												className={`
										transition-transform duration-500
										${expandedTaskIdx === index ? " rotate-45" : ""}
										`}
												src={Illustrations.Plus}
											></Image>
											<Text className="font-medium text-base max-w-[900px] text-left">
												{!isDesktop && (
													<Text className="font-normal">
														(
														{capitalizeFirstLetter(
															task.structure_scope.slice(0, 1)
														)}
														){" "}
													</Text>
												)}
												{task.question}
											</Text>
										</div>
										<div className="flex flex-col text-left self-end w-[230px]">
											{isDesktop && (
												<Text className="font-normal text-[15px]">
													Rodzaj pytania:{" "}
													<Text className="font-light">
														{capitalizeFirstLetter(task.structure_scope)}
													</Text>
												</Text>
											)}
											{isDesktop && (
												<Text className="font-normal text-[15px]">
													Znajomość pytania:{" "}
													<Text className="font-light">
														{capitalizeFirstLetter(
															task.knowledge_level === 3
																? "WYSOKI"
																: task.knowledge_level === 2
																? "ŚREDNI"
																: "NISKI"
														)}
													</Text>
												</Text>
											)}
										</div>
									</ItemHeader>
									{expandedTaskIdx === index && (
										<ItemBody>
											<ImageBox
												isReview={true}
												media={task.media}
												savedQuestionsView={true}
											/>
											<TaskData>{renderAnswers(task)}</TaskData>
										</ItemBody>
									)}
								</ListItem>
							);
						})
					)}
				</Questions>
			</InnerContainer>
		</ListAlign>
	);
}
