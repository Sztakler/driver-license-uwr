import React, { useContext } from "react";

import TaskContext from "../../../../../context/TaskContext";

import Button from "../../../atoms/Button";
import Text from "../../../atoms/Text";

import { ReviewTasksContainer, BubblesWrapper } from "./styles";

export default function ReviewTasks({
	taskIdx,
	updateTaskIdx,
	savedQuestions,
}) {
	const { setNewTask, setNewPickedAnswer } = useContext(TaskContext);

	function handleBubbleSelect(index) {
		updateTaskIdx(index);
		setNewTask(savedQuestions[index]);
		setNewPickedAnswer(savedQuestions[index].wybrana_odpowiedz);
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

	return (
		<ReviewTasksContainer>
			<Text>Pytania podstawowe</Text>
			<BubblesWrapper>
				{savedQuestions.slice(0, 20).map((answer, index) => {
					return (
						<Button
							bubble
							size="m"
							result={getTaskResult(answer)}
							onClick={() => handleBubbleSelect(index)}
							className={index === taskIdx ? "border-[3px] font-semibold" : ""}
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
							size="m"
							result={getTaskResult(answer)}
							onClick={() => handleBubbleSelect(adjustedIndex)}
							className={
								adjustedIndex === taskIdx ? "border-[3px] font-semibold" : ""
							}
						>
							{index + 1}
						</Button>
					);
				})}
			</BubblesWrapper>
		</ReviewTasksContainer>
	);
}
