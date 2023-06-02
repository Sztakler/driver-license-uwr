import React, { useContext, useState } from "react";
import { useRecoilState } from "recoil";
import { inReviewModeState } from "../../../../../recoil/atoms";
import TaskContext from "../../../../../context/TaskContext";
import Button from "../../../atoms/Button";
import Paragraph from "../../../atoms/Paragraph";
import Bubble from "../../../molecules/Bubble";
import { Answers, Answer, TaskBottomSection } from "./styles";

export default function TaskBottom() {
	const { task, setTask, pickedAnswer, setNewPickedAnswer } =
		useContext(TaskContext);
	const [inReviewMode, setInReviewMode] = useRecoilState(inReviewModeState);

	function getTaskResult(answer) {
		if (task.poprawna_odpowiedz === answer) {
			return "correct";
		} else if (
			answer === pickedAnswer &&
			task.poprawna_odpowiedz !== pickedAnswer
		) {
			return "incorrect";
		}

		return "";
	}

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
										!inReviewMode && setNewPickedAnswer(index);
									}}
									size="l"
									picked={index === pickedAnswer}
									result={inReviewMode ? getTaskResult(index) : ""}
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
								<Button
									bubble
									onClick={() => {
										!inReviewMode && setNewPickedAnswer(index);
									}}
									size="m"
									picked={index === pickedAnswer}
									result={inReviewMode ? getTaskResult(index) : ""}
								>
									{String.fromCharCode(65 + index)}
								</Button>
								<span>{answer}</span>
							</Answer>
						);
					})}
				</Answers>
			);
		}
	}

	return (
		<TaskBottomSection>
			<Paragraph className="inline-block">{task.pytanie}</Paragraph>
			{renderAnswers(task)}
		</TaskBottomSection>
	);
}
