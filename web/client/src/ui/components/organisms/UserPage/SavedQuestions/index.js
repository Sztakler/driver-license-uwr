import React, { useEffect, useRef, useState } from "react";

import Text from "../../../atoms/Text";
import Input from "../../../atoms/Input";
import Paragraph from "../../../atoms/Paragraph";
import Image from "../../../atoms/Image";
import Button from "../../../atoms/Button";
import Explanation from "/src/icons/Explanation";

import {
	ListAlign,
	InnerContainer,
	ListItem,
	Header,
	FiltersList,
	Filter,
	Name,
	ItemHeader,
	ItemBody,
	ImageBox,
	TaskData,
	Answers,
	Answer,
	StatusIcon,
	Questions,
	Placeholder,
} from "./styles";
import Illustrations from "../../../../../assets/images/svg/icons/Illustrations";

function renderAnswers(task) {
	console.log(task);
	if (task.zakres_struktury === "PODSTAWOWY") {
		return (
			<Answers row={true}>
				{task.odpowiedzi.map((answer, index) => {
					return (
						<Answer>
							<Button
								className={
									index === task.poprawna_odpowiedz ? "bg-[#91CE6B]" : ""
								}
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
	} else if (task.zakres_struktury === "SPECJALISTYCZNY") {
		return (
			<Answers row={false}>
				{task.odpowiedzi.map((answer, index) => {
					return (
						<Answer>
							<Button
								className={
									index === task.poprawna_odpowiedz ? "bg-[#91CE6B]" : ""
								}
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
	const expandedQuestionRef = useRef(null);
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

	function getSavedQuestions() {
		return fetch("http://localhost:5000/api/saved-questions", {
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
				console.log(
					"result",
					task.zakres_struktury === "PODSTAWOWY"
						? filtersPicked.PODSTAWOWE
						: task.zakres_struktury === "SPECJALISTYCZNY"
						? filtersPicked.SPECJALISTYCZNE
						: false,
					task.knowledge_level === 0 || task.knowledge_level === null
						? filtersPicked.NISKI
						: task.knowledge_level === 1
						? filtersPicked.ŚREDNI
						: task.knowledge_level === 2
						? filtersPicked.WYSOKI
						: false
				);

				return (
					(task.zakres_struktury === "PODSTAWOWY"
						? filtersPicked.PODSTAWOWE
						: task.zakres_struktury === "SPECJALISTYCZNY"
						? filtersPicked.SPECJALISTYCZNE
						: false) &&
					(task.knowledge_level === 0 || task.knowledge_level === null
						? filtersPicked.NISKI
						: task.knowledge_level === 1
						? filtersPicked.ŚREDNI
						: task.knowledge_level === 2
						? filtersPicked.WYSOKI
						: false)
				);
			})
		);
		setExpandedTaskIdx(-1);
	}, [filtersPicked]);

	useEffect(() => {
		if (expandedQuestionRef.current) {
			expandedQuestionRef.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "start",
			});
		}
	}, [expandedTaskIdx]);

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

	return (
		<ListAlign>
			<Text className="ml-auto mr-2 pb-2">
				Liczba zapisanych pytań: {tasks.length}
			</Text>
			<InnerContainer>
				<Header>
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
							<Paragraph>Podstawowe</Paragraph>
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
							<Paragraph>Specjalistyczne</Paragraph>
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
							<Paragraph>Niski</Paragraph>
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
							<Paragraph>Średni</Paragraph>
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
							<Paragraph>Wysoki</Paragraph>
						</Filter>
					</FiltersList>
				</Header>

				<Questions>
					{questionsLoaded && filteredTasks.length === 0 ? (
						<Placeholder>
							Żadne z pytań nie spełnia podanych filtrów{" "}
						</Placeholder>
					) : !questionsLoaded ? (
						<Placeholder>Wczytywanie pytań...</Placeholder>
					) : (
						filteredTasks.map((task, index) => {
							return (
								<ListItem active={expandedTaskIdx === index}>
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
												{task.pytanie}
											</Text>
										</div>
										<div className="flex flex-col text-left self-end w-[230px]">
											<Text className="font-normal text-[15px]">
												Rodzaj pytania:{" "}
												<Text className="font-light">
													{capitalizeFirstLetter(task.zakres_struktury)}
												</Text>
											</Text>
											<Text className="font-normal text-[15px]">
												Znajomość pytania:{" "}
												<Text className="font-light">
													{capitalizeFirstLetter(
														task.knowledge_level === 2
															? "WYSOKI"
															: task.knowledge_level === 1
															? "ŚREDNI"
															: "NISKI"
													)}
												</Text>
											</Text>
										</div>
									</ItemHeader>
									{expandedTaskIdx === index && (
										<ItemBody ref={expandedQuestionRef}>
											<ImageBox>
												<Image exam src={task.media} />
											</ImageBox>
											<TaskData>
												{renderAnswers(task)}
												<Button blank className="self-start">
													<Explanation />
													<Text className="text-[16px]">Pokaż wyjaśnienie</Text>
												</Button>
											</TaskData>
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
