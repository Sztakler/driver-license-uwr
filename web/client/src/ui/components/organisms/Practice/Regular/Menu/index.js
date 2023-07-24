import React, { useContext, useState, useEffect } from "react";

import TaskContext from "../../../../../../context/TaskContext";
import ArrowRight from "/src/icons/ArrowRight";
import ArrowLeft from "/src/icons/ArrowLeft";
import Explanation from "/src/icons/Explanation";
import Clock from "/src/icons/Clock";

import Button from "../../../../atoms/Button";
import Text from "../../../../atoms/Text";
import Modal from "../../../../molecules/Modal";
import Quit from "../../../../molecules/Practice/Quit";

import {
	MenuContainer,
	TimerContainer,
	CustomTimer,
	Row,
	NextPrevious,
	KnowledgeLevel,
} from "./styles";
import Heading from "../../../../atoms/Heading";
import Input from "../../../../atoms/Input";

export default function Menu({ isExam }) {
	const {
		task,
		setNewTask,
		taskStarted,
		setNewTaskStarted,
		savedQuestions,
		setNewSavedQuestions,
	} = useContext(TaskContext);
	const [currentTime, setCurrentTime] = useState(30);
	const [explanationModalShow, setExplanationModalShow] = useState(false);
	const [result, setResult] = useState({
		questionCounter: 0,
		scoredPoints: 0,
		correctAnswers: 0,
		incorrectAnswers: 0,
		skippedQuestions: 0,
	});
	const [taskIdx, setTaskIdx] = useState(0);
	const [examFinished, setExamFinished] = useState(false);
	const [knowledgeLevel, setKnowledgeLevel] = useState("-");

	function decrementTimer() {
		if (taskStarted && currentTime > 0) {
			setCurrentTime(currentTime - 1);
		}
	}

	function nextQuestion() {
		let newTaskIdx = taskIdx;
		if (newTaskIdx + 1 <= savedQuestions.length - 1) {
			newTaskIdx = newTaskIdx + 1;
		} else {
			return;
		}

		const changedItemIndex = savedQuestions.findIndex(
			(item) => item.id === task.id
		);

		if (changedItemIndex !== -1) {
			const updatedQuestions = [...savedQuestions];
			updatedQuestions[changedItemIndex] = task;
			setNewSavedQuestions(updatedQuestions);
		} else {
			console.log("Item not found.");
		}

		setNewTaskStarted(false);

		setNewTask(savedQuestions[newTaskIdx]);
		setTaskIdx(newTaskIdx);
		setCurrentTime(30);

		const selectElement = document.getElementById("knowledge_level");
		selectElement.selectedIndex = savedQuestions[newTaskIdx].knowledge_level;
		console.log(
			"nowy task",
			savedQuestions[newTaskIdx].knowledge_level,
			selectElement.selectedIndex
		);
	}

	function previousQuestion() {
		let newTaskIdx = taskIdx > 0 ? taskIdx - 1 : taskIdx;
		setTaskIdx(newTaskIdx);
		setNewTask(savedQuestions[newTaskIdx]);
	}

	function verifyAnswer(pickedAnswer) {
		const taskResult = getTaskResult();

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

		return;
	}

	function getTaskResult() {
		if (task.wybrana_odpowiedz === null) {
			return "skipped";
		}
		if (task.wybrana_odpowiedz === task.poprawna_odpowiedz) {
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

	function handleChangeKnowledgeLevel(e) {
		setKnowledgeLevel(e.target.value);
	}

	async function handleChangeKnowledgeLevel(e) {
		let newKnowledgeLevel = e.target.value;
		if (newKnowledgeLevel === "-") return;

		setKnowledgeLevel(newKnowledgeLevel);

		try {
			if (newKnowledgeLevel === "") {
				newKnowledgeLevel = null;
			} else if (newKnowledgeLevel === "Niska") {
				newKnowledgeLevel = 0;
			} else if (newKnowledgeLevel === "Średnia") {
				newKnowledgeLevel = 1;
			} else {
				newKnowledgeLevel = 2;
			}

			const response = await fetch(
				"http://localhost:5000/api/user-knowledge-levels",
				{
					method: "POST",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						question_id: task.id,
						knowledgeLevel: newKnowledgeLevel,
					}),
				}
			);

			if (response.ok) {
				console.log("Data submitted successfully");
			} else {
				console.error("Error submitting data");
			}
		} catch (error) {
			console.error("Network error:", error);
		}

		return 0;
	}
	function handleNextQuestionButton() {
		if (examFinished) {
			return;
		}

		if (isExam) {
			verifyAnswer(task.wybrana_odpowiedz);
			if (taskIdx === savedQuestions.length - 1) {
				setExamFinished(true);
			}
		}

		nextQuestion();
	}

	function handlePreviousQuestionButton() {
		previousQuestion();
	}

	useEffect(() => {
		const interval = setInterval(decrementTimer, 1000);
		return () => clearInterval(interval);
	}, [taskStarted, currentTime]);

	return (
		<MenuContainer isReview={false}>
			<Button
				blank
				className="justify-center items-center w-[200px]"
				onClick={handleExplanationShowButton}
			>
				<Explanation />
				<Text className="text-[16px]">Pokaż wyjaśnienie</Text>
			</Button>
			<Quit isReview={false} isExam={isExam} result={result} />
			<Modal
				onClose={() => setExplanationModalShow(false)}
				show={explanationModalShow}
			>
				<Heading level={4}>Wyjaśnienie odpowiedzi</Heading>
				<Text>
					<b>Art. 26. ust. 1.</b>
					Kierujący pojazdem, zbliżając się do przejścia dla pieszych, jest
					obowiązany zachować szczególną ostrożność i ustąpić pierwszeństwa
					pieszemu znajdującemu się na przejściu.
				</Text>
			</Modal>
			<TimerContainer>
				<Row>
					<Button primary hover size="s" onClick={handleStartButton}>
						<Text>START</Text>
					</Button>
					<CustomTimer expired={currentTime === 0}>
						<Clock />
						<Text>{currentTime} sekund</Text>
					</CustomTimer>
				</Row>
			</TimerContainer>

			<KnowledgeLevel>
				<Text className="text-[16px] px-2">Poziom znajomości pytania</Text>
				<Input
					id="knowledge_level"
					type="select"
					className="bg-[#FFE49E] rounded-xl w-full px-2 py-1"
					onChange={handleChangeKnowledgeLevel}
				>
					<option hidden>-</option>
					<option>Niska</option>
					<option>Średnia</option>
					<option>Wysoka</option>
				</Input>
			</KnowledgeLevel>

			<NextPrevious>
				{!isExam ? (
					<Button
						blank
						className="max-2xl:mt-auto max-2xl:justify-start"
						onClick={handlePreviousQuestionButton}
					>
						<ArrowLeft />
						<Text>Poprzednie pytanie</Text>
					</Button>
				) : (
					<></>
				)}
				<Button full hover size="m" primary onClick={handleNextQuestionButton}>
					<Text>Następne pytanie</Text>
					<ArrowRight />
				</Button>
			</NextPrevious>
		</MenuContainer>
	);
}
