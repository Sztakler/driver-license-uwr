import React, { useContext } from "react";
import { useRecoilState } from "recoil";

import { cachedAnswersState } from "../../../../../recoil/atoms";
import TaskContext from "../../../../../context/TaskContext";

import Bubble from "../../Bubble";
import Text from "../../../atoms/Text";

import { ReviewTasksContainer, BubblesWrapper } from "./styles";
import Button from "../../../atoms/Button";

export default function ReviewTasks({ taskIdx, updateTaskIdx }) {
	const { task, setNewTask } = useContext(TaskContext);
	const { pickedAnswer, setNewPickedAnswer } = useContext(TaskContext);
	const [cachedAnswers] = useRecoilState(cachedAnswersState);

	function handleBubbleSelect(index) {
		updateTaskIdx(index);
		setNewTask(cachedAnswers[index]);
		setNewPickedAnswer(cachedAnswers[index].wybrana_odpowiedz);
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
			<Text>Pytania</Text>
			<BubblesWrapper>
				{cachedAnswers.map((answer, index) => {
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
		</ReviewTasksContainer>
	);
}
