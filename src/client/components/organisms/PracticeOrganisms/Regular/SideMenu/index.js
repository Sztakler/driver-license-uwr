import React, { useContext, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { urlToServer } from "client/configure_build";
import PracticeContext from "context/PracticeContext";

import Button from "client/components/atoms/Button";
import Text from "client/components/atoms/Text";
import Quit from "client/components/molecules/PracticeMolecules/Quit";
import Input from "client/components/atoms/Input";
import Image from "client/components/atoms/Image";

import Illustrations from "assets/images/svg/icons/Illustrations";

import {
	MenuContainer,
	QuestionCounter,
	TimerContainer,
	CustomTimer,
	Row,
	NextPrevious,
	KnowledgeLevel,
} from "./styles";
import { shuffleArray } from "server/files/utils/utils";

export default function SideMenu({ isExam }) {
	const {
		task,
		setNewTask,
		taskStarted,
		setNewTaskStarted,
		savedQuestions,
		setNewSavedQuestions,
		videoIsPlaying,
		imageIsLoaded,
		setNewKnowledgeLevel,
		setNewImageIsLoaded,
		setNewVideoIsPlaying,
		examFinished,
		setNewExamFinished,
	} = useContext(PracticeContext);

	const [questionTimer, setQuestionTimer] = useState(
		task.structure_scope === "PODSTAWOWY" ? 20 : 50
	);
	const [result, setResult] = useState({
		questionCounter: 0,
		scoredPoints: 0,
		correctAnswers: 0,
		incorrectAnswers: 0,
		skippedQuestions: 32,
	});
	const [taskIdx, setTaskIdx] = useState(0);

	// Timer controller
	function controlTimer() {
		if (
			(videoIsPlaying && taskStarted) ||
			(task.wybrana_odpowiedz && !isExam)
		) {
			return;
		}

		if (questionTimer > 0) {
			setQuestionTimer(questionTimer - 1);
		} else if (questionTimer === 0) {
			if (!taskStarted) {
				setNewTaskStarted(true);
				setQuestionTimer(20);
				return;
			}

			if (isExam) {
				nextQuestion();
			}
		}
	}

	function isLastTask(newTaskIdx) {
		if (newTaskIdx <= savedQuestions.length - 1) {
			return false;
		} else {
			return true;
		}
	}

	function updateQuestionState() {
		const changedItemIndex = savedQuestions.findIndex(
			(item) => item.id === task.id
		);

		if (changedItemIndex !== -1) {
			const updatedQuestions = [...savedQuestions];
			updatedQuestions[changedItemIndex] = task;
			setNewSavedQuestions(updatedQuestions);
		} else {
			console.error("Question not found");
		}
	}

	// Prepare new task, depends if we are in exam and if it's last task of mode questions set
	function prepareNewTask() {
		let lastTask = isLastTask(taskIdx + 1);
		if (isExam && lastTask) {
			setNewExamFinished(true);
			return;
		}
		let newTaskIdx = lastTask ? 0 : taskIdx + 1;

		if (lastTask) {
			let savedQuestionsCopy = savedQuestions;
			savedQuestionsCopy.forEach((savedQuestion) => {
				savedQuestion.wybrana_odpowiedz = null;
			});
			shuffleArray(savedQuestionsCopy);
			setNewSavedQuestions(savedQuestionsCopy);
		}

		let isTaskBasic =
			savedQuestions[newTaskIdx].structure_scope === "PODSTAWOWY";

		setNewTask(savedQuestions[newTaskIdx]);
		setTaskIdx(newTaskIdx);
		setQuestionTimer(isTaskBasic ? 20 : 50);
		setNewTaskStarted(isTaskBasic ? false : true);
		setNewImageIsLoaded(false);
		setNewVideoIsPlaying(false);

		if (!isExam) {
			const selectElement = document.getElementById("knowledge_level");
			selectElement.selectedIndex = savedQuestions[newTaskIdx].knowledge_level;
		}
	}

	// Load next question
	function nextQuestion() {
		if (examFinished) {
			return;
		}

		if (!isLastTask(taskIdx + 1)) {
			if (isExam) {
				verifyAnswer(task.wybrana_odpowiedz);
			}

			updateQuestionState();
		}

		prepareNewTask();
	}

	// Load previous question
	function previousQuestion() {
		updateQuestionState();

		let newTaskIdx = taskIdx > 0 ? taskIdx - 1 : taskIdx;
		setTaskIdx(newTaskIdx);
		setNewTask(savedQuestions[newTaskIdx]);
		setQuestionTimer(0);
		const selectElement = document.getElementById("knowledge_level");
		selectElement.selectedIndex = savedQuestions[newTaskIdx].knowledge_level;
	}

	// Answer Verification
	function verifyAnswer() {
		const taskResult = getTaskResult();

		setResult((prevState) => ({
			questionCounter: prevState.questionCounter + 1,
			scoredPoints:
				prevState.scoredPoints + task.points * (taskResult === "correct"),
			correctAnswers:
				prevState.correctAnswers + (taskResult === "correct" ? 1 : 0),
			incorrectAnswers:
				prevState.incorrectAnswers + (taskResult === "incorrect" ? 1 : 0),
			skippedQuestions:
				prevState.skippedQuestions + (taskResult === "skipped" ? 0 : -1),
		}));
	}

	function getTaskResult() {
		if (task.wybrana_odpowiedz === null) {
			return "skipped";
		}
		if (task.wybrana_odpowiedz === task.correct_answer) {
			return "correct";
		}
		return "incorrect";
	}

	// Handle Start Button
	function handleStartButton() {
		if (taskStarted) {
			return;
		}
		setNewTaskStarted(true);
		setQuestionTimer(15);
	}

	// Handle Knowledge Level Change
	async function handleChangeKnowledgeLevel(e) {
		let newKnowledgeLevel = Number(e.target.value);
		setNewKnowledgeLevel(newKnowledgeLevel);

		const changedItemIndex = savedQuestions.findIndex(
			(item) => item.id === task.id
		);

		if (changedItemIndex !== -1) {
			const updatedQuestions = [...savedQuestions];
			updatedQuestions[changedItemIndex].knowledge_level = newKnowledgeLevel;
			setNewSavedQuestions(updatedQuestions);
		} else {
			console.error("Question not found");
			return;
		}
		try {
			await fetch(`${urlToServer}/api/user-knowledge-levels`, {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					question_id: task.id,
					knowledgeLevel: newKnowledgeLevel,
				}),
			});
		} catch (error) {
			console.error("Network error:", error);
		}
	}

	// Handle Next Question Button
	function handleNextQuestionButton() {
		nextQuestion();
	}

	// Handle Previous Question Button
	function handlePreviousQuestionButton() {
		previousQuestion();
	}

	// Get Message for Timer
	function getMessage() {
		if (taskStarted) {
			if (videoIsPlaying) {
				return "Trwa odtwarzanie filmu";
			}

			if (imageIsLoaded || !videoIsPlaying) {
				return "Czas na udzielenie odpowiedzi";
			}

			return "";
		}

		return "Czas na zapoznanie się z pytaniem";
	}

	// Timer Effect
	useEffect(() => {
		const interval = setInterval(controlTimer, 1001);
		return () => clearInterval(interval);
	}, [taskStarted, questionTimer, videoIsPlaying]);

	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

	return (
		<MenuContainer isReview={false}>
			{isExam && (
				<QuestionCounter>
					<Text>
						Pytania podstawowe:{" "}
						{result.questionCounter > 20 ? 20 : result.questionCounter}/20
					</Text>
					<Text>
						Pytania specjalistyczne:{" "}
						{result.questionCounter <= 20 ? 0 : result.questionCounter - 20}/12
					</Text>
				</QuestionCounter>
			)}
			<Quit isReview={false} isExam={isExam} result={result} />
			<TimerContainer>
				<Row>
					<Button primary hover size="s" onClick={handleStartButton}>
						<Text>START</Text>
					</Button>
					<div className="relative w-full max-w-[332px]">
						<Text className="absolute -top-6 left-[50%] -translate-x-1/2 whitespace-nowrap">
							{isDesktop && getMessage()}
						</Text>
						<CustomTimer expired={questionTimer === 0}>
							<Image src={Illustrations.Clock} />
							<Text>{questionTimer} sekund</Text>
						</CustomTimer>
					</div>
				</Row>
			</TimerContainer>
			{!isExam && (
				<KnowledgeLevel>
					<Text className="text-[16px] px-2">
						{isDesktop ? "Poziom znajomości pytania" : "Znajomość"}
					</Text>
					<Input
						id="knowledge_level"
						type="select"
						className="bg-[#FFE49E] max-md:bg-[#FFF0CB] rounded-[39px] w-full px-2 py-1"
						onChange={handleChangeKnowledgeLevel}
					>
						<option hidden value={0}>
							-
						</option>
						<option value={1}>Niska</option>
						<option value={2}>Średnia</option>
						<option value={3}>Wysoka</option>
					</Input>
				</KnowledgeLevel>
			)}
			<NextPrevious isExam={isExam}>
				{!isExam ? (
					<Button
						blank
						className="max-2xl:mt-auto max-md:my-auto max-2xl:justify-start"
						onClick={handlePreviousQuestionButton}
					>
						<Image src={Illustrations.ArrowLeft} />
						<Text className="hover:font-medium">Poprzednie pytanie</Text>
					</Button>
				) : (
					<></>
				)}
				<Button
					secondary
					hover
					size="m"
					full
					onClick={handleNextQuestionButton}
				>
					{!isExam || taskIdx !== savedQuestions.length - 1 ? (
						<>
							<Text className="my-auto font-medium">Następne pytanie</Text>
							{isDesktop && <Image src={Illustrations.ArrowRight} />}
						</>
					) : (
						<>
							<Text className="my-auto font-medium">Zakończ egzamin</Text>
						</>
					)}
				</Button>
			</NextPrevious>
		</MenuContainer>
	);
}
