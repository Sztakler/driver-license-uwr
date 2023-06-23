import React, { useContext, useState } from "react";

import TaskContext from "../../../../../../context/TaskContext";
import ArrowRight from "/src/icons/ArrowRight";
import ArrowLeft from "/src/icons/ArrowLeft";
import Explanation from "/src/icons/Explanation";

import Button from "../../../../atoms/Button";
import Text from "../../../../atoms/Text";
import Modal from "../../../../molecules/Modal";
import Quit from "../../../../molecules/Practice/Quit";
import ReviewTasks from "../../../../molecules/Practice/ReviewTasks";

import { MenuContainer, NextPrevious } from "./styles";

import Heading from "../../../../atoms/Heading";

export default function MenuReview({ isExam }) {
	const { setNewTask, setNewPickedAnswer, savedQuestions } =
		useContext(TaskContext);
	const [explanationModalShow, setExplanationModalShow] = useState(false);
	const [result] = useState({
		questionCounter: 0,
		scoredPoints: 0,
		correctAnswers: 0,
		incorrectAnswers: 0,
		skippedQuestions: 0,
	});
	const [taskIdx, setTaskIdx] = useState(0);

	function handleExplanationShowButton() {
		setExplanationModalShow(true);
	}

	function handleNextQuestionButton() {
		const newTaskIdx =
			taskIdx + 1 <= savedQuestions.length - 1 ? taskIdx + 1 : taskIdx;
		setNewTask(savedQuestions[newTaskIdx]);
		setTaskIdx(newTaskIdx);
		setNewPickedAnswer(savedQuestions[newTaskIdx].wybrana_odpowiedz);
		return;
	}

	function handlePreviousQuestionButton() {
		let newTaskIdx = taskIdx > 0 ? taskIdx - 1 : taskIdx;
		setTaskIdx(newTaskIdx);
		setNewTask(savedQuestions[newTaskIdx]);
		setNewPickedAnswer(savedQuestions[newTaskIdx].wybrana_odpowiedz);
	}

	function updateTaskIdx(newTaskIdx) {
		setTaskIdx(newTaskIdx);
	}

	return (
		<MenuContainer isReview={true}>
			<Button
				blank
				className="justify-center items-center w-[200px]"
				onClick={handleExplanationShowButton}
			>
				<Explanation />
				<Text className="text-[16px]">Pokaż wyjaśnienie</Text>
			</Button>
			<Quit isReview={true} isExam={isExam} result={result} />
			<Modal
				onClose={() => {
					setExplanationModalShow(False);
				}}
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
			<ReviewTasks
				taskIdx={taskIdx}
				updateTaskIdx={updateTaskIdx}
				savedQuestions={savedQuestions}
			/>
		</MenuContainer>
	);
}
