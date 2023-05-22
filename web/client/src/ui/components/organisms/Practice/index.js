import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import {
	cachedAnswersState,
	inReviewModeState,
	resultsState,
} from "../../../../recoil/atoms";

import ArrowRight from "../../../../icons/ArrowRight";
import ArrowLeft from "../../../../icons/ArrowLeft";
import Star from "../../../../icons/Star";
import Explanation from "../../../../icons/Explanation";
import Cancel from "../../../../icons/Cancel";
import Clock from "../../../../icons/Clock";
import PageLogo from "/src/assets/images/svg/icons/PageLogo";

import Button from "../../atoms/Button";
import Paragraph from "../../atoms/Paragraph";
import Image from "../../atoms/Image";
import Label from "../../atoms/Label";
import Bubble from "../../molecules/Bubble";
import Modal from "../../molecules/Modal";
import Heading from "../../atoms/Heading";

import {
	PracticeContainer,
	BrandTitle,
	Wrapper,
	TaskTopSection,
	TaskInfo,
	ImageBox,
	Answers,
	TaskBottomSection,
	Answer,
	Menu,
	QuitOptions,
	TimerContainer,
	CustomTimer,
	Row,
	NextPrevious,
	ReviewQuestions,
} from "./styles";

export default function Practice(props) {
	const navigate = useNavigate();

	// REVIEW MODE //
	const [inReviewMode, setInReviewMode] = useRecoilState(inReviewModeState);
	const [cachedAnswers, setCachedAnswers] = useRecoilState(cachedAnswersState);

	// REGULAR MODE //
	const [currentTime, setCurrentTime] = useState(30);
	const [minTime, setMinTime] = useState(0);
	const [explanationModalShow, setExplanationModalShow] = useState(false);
	const [exitModalShow, setExitModalShow] = useState(false);
	const [taskStarted, setTaskStarted] = useState(inReviewMode ? true : false);
	const [favoriteTask, setFavoriteTask] = useState(false);
	const [result, setResult] = useRecoilState(resultsState);

	// BOTH MODES //
	const [pickedAnswer, setPickedAnswer] = useState(
		inReviewMode ? cachedAnswers[0].wybrana_odpowiedz : null
	);
	const [task, setTask] = useState(
		inReviewMode ? cachedAnswers[0] : "Loading (!?)"
	);
	const [taskIdx, setTaskIdx] = useState(inReviewMode ? 0 : -1);

	useEffect(() => {
		fetch("http://localhost:5000/api/practice")
			.then((response) => response.json())
			.then((data) => {
				setTask(data[0]);
			});
	}, []);

	function renderAnswers(task) {
		if (task.zakres_struktury === "PODSTAWOWY") {
			return (
				<Answers row={true}>
					{task.odpowiedzi.map((answer, index) => {
						return (
							<Answer>
								<Button
									primary
									onClick={() => {
										setPickedAnswer(index);
									}}
									size="l"
									picked={index === pickedAnswer}
									correct={
										inReviewMode ? task.poprawna_odpowiedz === index : false
									}
									incorrect={
										inReviewMode
											? index === pickedAnswer &&
											  task.poprawna_odpowiedz !== pickedAnswer
											: false
									}
								>
									<span>{answer}</span>
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
								<Bubble
									secondary
									onClick={() => setPickedAnswer(index)}
									size="m"
									picked={inReviewMode ? false : index === pickedAnswer}
									correct={
										inReviewMode ? task.poprawna_odpowiedz === index : false
									}
									incorrect={
										inReviewMode
											? index === pickedAnswer &&
											  task.poprawna_odpowiedz !== pickedAnswer
											: false
									}
								>
									{String.fromCharCode(65 + index)}
								</Bubble>
								<span>{answer}</span>
							</Answer>
						);
					})}
				</Answers>
			);
		}
	}

	function verifyAnswer(pickedAnswer) {
		let isSkipped = pickedAnswer === null ? true : false;
		let isCorrect =
			!isSkipped && pickedAnswer === task.poprawna_odpowiedz ? true : false;
		let isIncorrect = !isSkipped && !isCorrect;
		setResult((prevState) => {
			return {
				questionCounter: prevState.questionCounter + 1,
				scoredPoints: prevState.scoredPoints + task.liczba_punktow * isCorrect,
				correctAnswers: prevState.correctAnswers + isCorrect,
				incorrectAnswers: prevState.incorrectAnswers + isIncorrect,
				skippedQuestions: prevState.skippedQuestions + isSkipped,
			};
		});
	}

	function nextQuestion() {
		if (inReviewMode) {
			const newTaskIdx =
				taskIdx + 1 <= cachedAnswers.length - 1 ? taskIdx + 1 : taskIdx;
			setTask(cachedAnswers[newTaskIdx]);
			setTaskIdx(newTaskIdx);
			setPickedAnswer(cachedAnswers[newTaskIdx].wybrana_odpowiedz);
			return;
		}
		setCachedAnswers((prevState) => {
			return [...prevState, { ...task, wybrana_odpowiedz: pickedAnswer }];
		});
		setTask(data[Math.floor(Math.random() * data.length)]);
		setTaskStarted(false);
		setPickedAnswer(null);
		setCurrentTime(30);
	}

	function previousQuestion() {
		let newTaskIdx = taskIdx > 0 ? taskIdx - 1 : taskIdx;
		console.log(taskIdx);
		setTask(cachedAnswers[newTaskIdx]);
		setPickedAnswer(cachedAnswers[newTaskIdx].wybrana_odpowiedz);
		setTaskIdx(newTaskIdx);
	}

	function decrementTimer() {
		if (taskStarted && currentTime > minTime) {
			setCurrentTime(currentTime - 1);
		}
	}

	useEffect(() => {
		const interval = setInterval(decrementTimer, 1000);
		return () => clearInterval(interval);
	}, [taskStarted, currentTime]);

	if (task) {
		return (
			<PracticeContainer>
				<BrandTitle onClick={() => navigate("/")}>
					<Image src={PageLogo.PageLogo} />
				</BrandTitle>
				<Wrapper>
					<TaskTopSection>
						<TaskInfo>
							<span>Typ pytania: {task.zakres_struktury}</span>
							<span>Wartość punktowa: {task.liczba_punktow}</span>
							<span>Liczba rozwiązanych zadań: 100</span>
						</TaskInfo>
						<Bubble
							secondary
							onClick={() => {
								setFavoriteTask((prevState) => {
									return !prevState;
								});
							}}
							picked={favoriteTask}
							size="l"
							className="absolute top-4 -right-16"
						>
							<Star picked={favoriteTask} />
						</Bubble>
						<ImageBox>
							{taskStarted ? (
								<Image exam src={task.media} />
							) : (
								<Image exam src={require("/src/assets/images/multi.png")} />
							)}
						</ImageBox>
					</TaskTopSection>

					<Menu inReviewMode={inReviewMode}>
						<QuitOptions>
							<span>
								{inReviewMode ? "Wróć do podsumowania" : "Zakończ trening"}
							</span>
							<Bubble
								secondary
								size="m"
								onClick={() => {
									setExitModalShow(true);
								}}
							>
								<Cancel />
							</Bubble>
							<Modal
								onClose={() => {
									setExitModalShow(false);
								}}
								show={exitModalShow}
							>
								<Heading level={4}>
									{inReviewMode
										? "Czy napewno chcesz wrócić do podsumowania?"
										: "Czy napewno chcesz zakończyć trening?"}
								</Heading>
								<div>
									<Button
										primary
										onClick={() => {
											if (cachedAnswers.length) {
												setInReviewMode(true);
												navigate("/trening/podsumowanie");
											}
											navigate("/");
										}}
									>
										TAK
									</Button>
									<Button primary onClick={() => setExitModalShow(false)}>
										NIE
									</Button>
								</div>
							</Modal>
						</QuitOptions>
						<Button
							primary
							full
							size="l"
							onClick={() => {
								taskStarted && setExplanationModalShow(true);
							}}
						>
							<Explanation />
							<span>Pokaż wyjaśnienie</span>
						</Button>
						<Modal
							onClose={() => {
								setExplanationModalShow(false);
							}}
							show={explanationModalShow}
						>
							<h4>Wyjaśnienie odpowiedzi</h4>
							<span>
								<b>Art. 26. ust. 1.</b>
								Kierujący pojazdem, zbliżając się do przejścia dla pieszych,
								jest obowiązany zachować szczególną ostrożność i ustąpić
								pierwszeństwa pieszemu znajdującemu się na przejściu.
							</span>
						</Modal>
						{!inReviewMode ? (
							<TimerContainer>
								<Label size="m">Czas na zapoznanie się z pytaniem</Label>
								<Row>
									<Button primary size="m" onClick={() => setTaskStarted(true)}>
										<span>START</span>
									</Button>
									<CustomTimer expired={currentTime === 0}>
										<Clock />
										{currentTime} sekund
									</CustomTimer>
								</Row>
							</TimerContainer>
						) : (
							<></>
						)}
						<NextPrevious>
							<Button
								blank
								className="max-2xl:mt-auto max-2xl:justify-start"
								onClick={() => {
									if (!inReviewMode) {
										verifyAnswer(pickedAnswer);
									}
									previousQuestion();
								}}
							>
								<ArrowLeft />
								<span>Poprzednie pytanie</span>
							</Button>
							<Button
								full
								size="m"
								primary
								onClick={() => {
									if (!inReviewMode) {
										verifyAnswer(pickedAnswer);
									}
									nextQuestion();
								}}
							>
								<span>Następne pytanie</span>
								<ArrowRight />
							</Button>
						</NextPrevious>
						{inReviewMode ? (
							<ReviewQuestions>
								<span>Pytania</span>
								<div className="w-full flex flex-wrap gap-2">
									{cachedAnswers.map((answer, index) => {
										return (
											<Bubble
												secondary
												active={index === taskIdx}
												correct={
													answer.poprawna_odpowiedz === answer.wybrana_odpowiedz
												}
												incorrect={
													answer.wybrana_odpowiedz !== null &&
													answer.poprawna_odpowiedz !== answer.wybrana_odpowiedz
												}
												skipped={answer.wybrana_odpowiedz === null}
												size="m"
												onClick={() => {
													setTaskIdx(index);
													setTask(cachedAnswers[index]);
													setPickedAnswer(
														cachedAnswers[index].wybrana_odpowiedz
													);
												}}
											>
												{index + 1}
											</Bubble>
										);
									})}
								</div>
							</ReviewQuestions>
						) : (
							<></>
						)}
					</Menu>

					<div className="flex basis-[100%]"></div>

					<TaskBottomSection>
						<Paragraph className="inline-block">{task.pytanie}</Paragraph>
						{renderAnswers(task)}
					</TaskBottomSection>
				</Wrapper>
			</PracticeContainer>
		);
	}
	return <div>TEST</div>;
}