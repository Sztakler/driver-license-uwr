import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Illustrations from "../../../../../../assets/images/svg/icons/Illustrations";

import Text from "../../../atoms/Text";
import Input from "../../../atoms/Input";
import Image from "../../../atoms/Image";
import Video from "../../../atoms/Video";
import Button from "../../../atoms/Button";

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
	ImageBox,
	TaskData,
	Answers,
	Answer,
	Questions,
	Placeholder,
} from "./styles";

function renderAnswers(task) {
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
		return fetch("http://13.48.57.122/api/saved-questions", {
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

	function getRelativePos(elm) {
		var pPos = elm.parentNode.getBoundingClientRect(), // parent pos
			cPos = elm.getBoundingClientRect(), // target pos
			pos = { top: 0, right: 0, bottom: 0, left: 0 };

		pos.top = cPos.top - pPos.top + elm.parentNode.scrollTop;
		pos.right = cPos.right - pPos.right;
		pos.bottom = cPos.bottom - pPos.bottom;
		pos.left = cPos.left - pPos.left;

		return pos;
	}

	function scrollToElm(container, elm, duration) {
		var pos = getRelativePos(elm);
		scrollTo(container, pos.top, duration); // duration in seconds
	}

	function scrollElement(id) {
		scrollToElm(
			document.getElementById("scrollable"),
			document.getElementById("div" + id),
			1
		);
	}

	function scrollTo(element, to, duration, onDone) {
		var start = element.scrollTop,
			change = to - start,
			startTime = performance.now(),
			val,
			now,
			elapsed,
			t;

		function animateScroll() {
			now = performance.now();
			elapsed = (now - startTime) / 1000;
			t = elapsed / duration;

			element.scrollTop = start + change * easeInOutQuad(t);

			if (t < 1) window.requestAnimationFrame(animateScroll);
			else onDone && onDone();
		}

		animateScroll();
	}
	function easeInOutQuad(t) {
		return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
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
															task.zakres_struktury.slice(0, 1)
														)}
														){" "}
													</Text>
												)}
												{task.pytanie}
											</Text>
										</div>
										<div className="flex flex-col text-left self-end w-[230px]">
											{isDesktop && (
												<Text className="font-normal text-[15px]">
													Rodzaj pytania:{" "}
													<Text className="font-light">
														{capitalizeFirstLetter(task.zakres_struktury)}
													</Text>
												</Text>
											)}
											{isDesktop && (
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
											)}
										</div>
									</ItemHeader>
									{expandedTaskIdx === index && (
										<ItemBody>
											<ImageBox>
												{task.media.endsWith(".mp4") ? (
													<Video src={task.media} id="media-video" controls />
												) : (
													<Image exam src={task.media} />
												)}
											</ImageBox>
											<TaskData>
												{renderAnswers(task)}
												<Button
													blank
													bubble={!isDesktop}
													size={!isDesktop ? "l" : ""}
													className="self-start max-md:absolute max-md:right-0 max-md:bottom-0 max-md:p-3"
												>
													<Image src={Illustrations.Explanation} />
													{isDesktop && (
														<Text className="text-[16px]">
															Pokaż wyjaśnienie
														</Text>
													)}
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
