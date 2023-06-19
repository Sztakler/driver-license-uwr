import React, { useContext, useState } from "react";
import { useRecoilState } from "recoil";
// import { isReviewState } from "../../../../../recoil/atoms";
import TaskContext from "../../../../../context/TaskContext";
import Button from "../../../atoms/Button";
import Text from "../../../atoms/Text";
import Paragraph from "../../../atoms/Paragraph";

import { Answers, Answer, TaskBottomSection } from "./styles";

export default function TaskBottom({isReview}) {
	const { task, setTask, pickedAnswer, setNewPickedAnswer } =
		useContext(TaskContext);
	// const [isReview, setisReview] = useRecoilState(isReviewState);
	

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
										!isReview && setNewPickedAnswer(index);
									}}
									size="s"
									picked={index === pickedAnswer}
									result={isReview ? getTaskResult(index) : ""}
								>
									<Text>{answer}</Text>
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
										!isReview && setNewPickedAnswer(index);
									}}
									size="m"
									picked={index === pickedAnswer}
									result={isReview ? getTaskResult(index) : ""}
								>
									{String.fromCharCode(65 + index)}
								</Button>
								<Text>{answer}</Text>
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
