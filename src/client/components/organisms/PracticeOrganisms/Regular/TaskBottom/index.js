import React, { useContext } from "react";

import PracticeContext from "context/PracticeContext";

import Button from "client/components/atoms/Button";
import Text from "client/components/atoms/Text";
import Paragraph from "client/components/atoms/Paragraph";

import { Answers, Answer, TaskBottomSection } from "./styles";

export default function TaskBottom({ isExam }) {
	const { task, setNewTask } = useContext(PracticeContext);

	function getTaskResult(answer) {
		if (task.correct_answer === answer) {
			return "correct";
		} else if (
			answer === task.wybrana_odpowiedz &&
			task.correct_answer !== task.wybrana_odpowiedz
		) {
			return "incorrect";
		}

		return "";
	}

	function renderAnswers(task) {
		if (task.structure_scope === "PODSTAWOWY") {
			return (
				<Answers row={true}>
					{task.answers.map((answer, index) => {
						return (
							<Answer>
								<Button
									primary
									hover={isExam || (!isExam && task.wybrana_odpowiedz === null)}
									onClick={() => {
										if (!isExam && task.wybrana_odpowiedz !== null) return;
										setNewTask((prevState) => {
											const newState = {
												...prevState,
												wybrana_odpowiedz: index,
											};
											return newState;
										});
									}}
									size="s"
									result={
										task.wybrana_odpowiedz !== null && !isExam
											? getTaskResult(index)
											: ""
									}
									active={isExam && index === task.wybrana_odpowiedz}
								>
									<Text>{answer}</Text>
								</Button>
							</Answer>
						);
					})}
				</Answers>
			);
		} else if (task.structure_scope === "SPECJALISTYCZNY") {
			return (
				<Answers row={false}>
					{task.answers.map((answer, index) => {
						return (
							<Answer>
								<Button
									bubble
									hover={isExam || (!isExam && task.wybrana_odpowiedz === null)}
									onClick={() => {
										if (!isExam && task.wybrana_odpowiedz !== null) return;
										setNewTask((prevState) => {
											const newState = {
												...prevState,
												wybrana_odpowiedz: index,
											};
											return newState;
										});
									}}
									size="m"
									result={
										task.wybrana_odpowiedz !== null && !isExam
											? getTaskResult(index)
											: ""
									}
									active={isExam && index === task.wybrana_odpowiedz}
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
			<Paragraph style="inline-block max-md:px-2">{task.question}</Paragraph>
			{renderAnswers(task)}
		</TaskBottomSection>
	);
}
