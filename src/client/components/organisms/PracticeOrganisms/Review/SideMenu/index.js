import React, { useContext, useState } from "react";

import PracticeContext from "context/PracticeContext";
import Illustrations from "assets/images/svg/icons/Illustrations";

import Image from "client/components/atoms/Image";
import Button from "client/components/atoms/Button";
import Text from "client/components/atoms/Text";
import Quit from "client/components/molecules/PracticeMolecules/Quit";
import ReviewTasks from "client/components/molecules/PracticeMolecules/ReviewTasks";

import { MenuContainer, NextPrevious } from "./styles";

export default function SideMenuReview({ isExam }) {
	const { setNewTask, setNewPickedAnswer, savedQuestions } =
		useContext(PracticeContext);
	const [result] = useState({
		questionCounter: 0,
		scoredPoints: 0,
		correctAnswers: 0,
		incorrectAnswers: 0,
		skippedQuestions: 0,
	});
	const [taskIdx, setTaskIdx] = useState(0);

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
			<Quit isReview={true} isExam={isExam} result={result} />
			<NextPrevious>
				<Button
					blank
					className="max-2xl:mt-auto max-md:my-auto max-2xl:justify-start"
					onClick={handlePreviousQuestionButton}
				>
					<Image src={Illustrations.ArrowLeft} />
					<Text>Poprzednie pytanie</Text>
				</Button>
				<Button full hover size="m" primary onClick={handleNextQuestionButton}>
					<Text>Następne pytanie</Text>
					<Image src={Illustrations.ArrowRight} />
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
