import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { useRecoilState } from "recoil";
import {
	inReviewModeState,
	cachedAnswersState,
	resultsState,
} from "../../../../../recoil/atoms";

import TaskContext from "../../../../../context/TaskContext";
import ArrowRight from "/src/icons/ArrowRight";
import ArrowLeft from "/src/icons/ArrowLeft";
import Explanation from "/src/icons/Explanation";
import Clock from "/src/icons/Clock";

import Button from "../../../atoms/Button";
import Text from "../../../atoms/Text";
import Label from "../../../atoms/Label";
import Modal from "../../../molecules/Modal";
import Quit from "../../../molecules/Practice/Quit";
import ReviewTasks from "../../../molecules/Practice/ReviewTasks";

import {
	MenuContainer,
	TimerContainer,
	CustomTimer,
	Row,
	NextPrevious,
} from "./styles";

export default function Menu() {
	const {
		task,
		setNewTask,
		pickedAnswer,
		setNewPickedAnswer,
		taskStarted,
		setNewTaskStarted,
	} = useContext(TaskContext);
	const [currentTime, setCurrentTime] = useState(30);
	const [explanationModalShow, setExplanationModalShow] = useState(false);
	const [inReviewMode, setInReviewMode] = useRecoilState(inReviewModeState);
	const [cachedAnswers, setCachedAnswers] = useRecoilState(cachedAnswersState);
	const [result, setResult] = useRecoilState(resultsState);
	const [taskIdx, setTaskIdx] = useState(inReviewMode ? 0 : -1);

	function decrementTimer() {
		if (taskStarted && currentTime > 0) {
			setCurrentTime(currentTime - 1);
		}
	}

	async function nextQuestion() {
		if (inReviewMode) {
			const newTaskIdx =
				taskIdx + 1 <= cachedAnswers.length - 1 ? taskIdx + 1 : taskIdx;
			setNewTask(cachedAnswers[newTaskIdx]);
			setTaskIdx(newTaskIdx);
			setNewPickedAnswer(cachedAnswers[newTaskIdx].wybrana_odpowiedz);
			return;
		}

		setCachedAnswers((prevState) => [
			...prevState,
			{ ...task, wybrana_odpowiedz: pickedAnswer },
		]);
		setNewTaskStarted(false);
		setNewPickedAnswer(null);
		const newTask = await getRandomTask();
		setNewTask(newTask);
		setCurrentTime(30);
	}

	function previousQuestion() {
		let newTaskIdx = taskIdx > 0 ? taskIdx - 1 : taskIdx;
		setTaskIdx(newTaskIdx);
		setNewTask(cachedAnswers[newTaskIdx]);
		setNewPickedAnswer(cachedAnswers[newTaskIdx].wybrana_odpowiedz);
	}

	function getRandomTask() {
		return fetch("http://localhost:5000/api/practice/random")
			.then((response) => response.json())
			.then((data) => {
				return data;
			});
	}

	function verifyAnswer(pickedAnswer) {
		const taskResult = getTaskResult({
			wybrana_odpowiedz: pickedAnswer,
			poprawna_odpowiedz: task.poprawna_odpowiedz,
		});
		setResult((prevState) => ({
			questionCounter: prevState.questionCounter + 1,
			scoredPoints:
				prevState.scoredPoints +
				task.liczba_punktow * (taskResult === "correct"),
			correctAnswers:
				prevState.correctAnswers + (taskResult === "correct" ? 1 : 0),
			incorrectAnswers:
				prevState.incorrectAnswers + (taskResult === "incorrect" ? 1 : 0),
			skippedQuestions:
				prevState.skippedQuestions + (taskResult === "skipped" ? 1 : 0),
		}));
	}

	function getTaskResult(answer) {
		if (answer.wybrana_odpowiedz === null) {
			return "skipped";
		}
		if (answer.wybrana_odpowiedz === answer.poprawna_odpowiedz) {
			return "correct";
		}
		return "incorrect";
	}

	function handleStartButton() {
		setNewTaskStarted(true);
	}

	function handleExplanationShowButton() {
		taskStarted && setExplanationModalShow(true);
	}

	function handleNextQuestionButton() {
		if (!inReviewMode) {
			verifyAnswer(pickedAnswer);
		}
		nextQuestion();
	}

	function handlePreviousQuestionButton() {
		if (!inReviewMode) {
			verifyAnswer(pickedAnswer);
		}
		previousQuestion();
	}

	function updateTaskIdx(newTaskIdx) {
		setTaskIdx(newTaskIdx);
	}

	useEffect(() => {
		const interval = setInterval(decrementTimer, 1000);
		return () => clearInterval(interval);
	}, [taskStarted, currentTime]);

	useEffect(() => {
		if (inReviewMode) {
			setNewTask(cachedAnswers[0]);
			setNewPickedAnswer(cachedAnswers[0].wybrana_odpowiedz);
			setNewTaskStarted(true);
		}
	}, []);

	return (
		<MenuContainer inReviewMode={inReviewMode}>
			<Quit />
			<Button primary hover full size="l" onClick={handleExplanationShowButton}>
				<Explanation />
				<Text>Pokaż wyjaśnienie</Text>
			</Button>
			<Modal
				onClose={() => {
					setExplanationModalShow(false);
				}}
				show={explanationModalShow}
			>
				<h4>Wyjaśnienie odpowiedzi</h4>
				<Text>
					<b>Art. 26. ust. 1.</b>
					Kierujący pojazdem, zbliżając się do przejścia dla pieszych, jest
					obowiązany zachować szczególną ostrożność i ustąpić pierwszeństwa
					pieszemu znajdującemu się na przejściu.
				</Text>
			</Modal>
			{!inReviewMode ? (
				<TimerContainer>
					<Label size="m">Czas na zapoznanie się z pytaniem</Label>
					<Row>
						<Button primary hover size="m" onClick={handleStartButton}>
							<Text>START</Text>
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
					onClick={handlePreviousQuestionButton}
				>
					<ArrowLeft />
					<Text>Poprzednie pytanie</Text>
				</Button>
				<Button full hover size="m" primary onClick={handleNextQuestionButton}>
					<Text>Następne pytanie</Text>
					<ArrowRight />
				</Button>
			</NextPrevious>
			{inReviewMode ? (
				<ReviewTasks taskIdx={taskIdx} updateTaskIdx={updateTaskIdx} />
			) : (
				<></>
			)}
		</MenuContainer>
	);
}
