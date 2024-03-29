import React, { useContext } from "react";

import PracticeContext from "context/PracticeContext";

import Button from "client/components/atoms/Button";
import Text from "client/components/atoms/Text";

import { ReviewTasksContainer, BubblesWrapper } from "./styles";
import { useMediaQuery } from "react-responsive";

// Component only used for ExamReview, it shows all questions (as bubbles)
// with color depending on task result
export default function ReviewTasks({
	taskIdx,
	updateTaskIdx,
	savedQuestions,
}) {
	const { setNewTask, setNewPickedAnswer } = useContext(PracticeContext);

	function handleBubbleSelect(index) {
		updateTaskIdx(index);
		setNewTask(savedQuestions[index]);
		setNewPickedAnswer(savedQuestions[index].wybrana_odpowiedz);
	}

	function getTaskResult(answer) {
		if (answer.wybrana_odpowiedz === null) {
			return "skipped";
		}

		if (answer.wybrana_odpowiedz === answer.correct_answer) {
			return "correct";
		}
		return "incorrect";
	}

	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

	return (
		<ReviewTasksContainer>
			<Text>Pytania podstawowe</Text>
			<BubblesWrapper>
				{savedQuestions.slice(0, 20).map((answer, index) => {
					return (
						<Button
							bubble
							activeBubble={index === taskIdx}
							size={isDesktop ? "m" : "s"}
							result={getTaskResult(answer)}
							onClick={() => handleBubbleSelect(index)}
						>
							{index + 1}
						</Button>
					);
				})}
			</BubblesWrapper>
			<Text>Pytania specjalistyczne</Text>
			<BubblesWrapper>
				{savedQuestions.slice(20).map((answer, index) => {
					const adjustedIndex = index + 20; // Adjust index to start from 21

					return (
						<Button
							bubble
							activeBubble={adjustedIndex === taskIdx}
							size={isDesktop ? "m" : "s"}
							result={getTaskResult(answer)}
							onClick={() => handleBubbleSelect(adjustedIndex)}
						>
							{index + 1}
						</Button>
					);
				})}
			</BubblesWrapper>
		</ReviewTasksContainer>
	);
}
