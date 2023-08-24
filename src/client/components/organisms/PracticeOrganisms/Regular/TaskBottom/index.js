import React, { useContext } from "react";

import TaskContext from "context/TaskContext";

import Button from "client/components/atoms/Button";
import Text from "client/components/atoms/Text";
import Paragraph from "client/components/atoms/Paragraph";

import { Answers, Answer, TaskBottomSection } from "./styles";

export default function TaskBottom({ isExam }) {
	const { task, setNewTask } = useContext(TaskContext);

	function getTaskResult(answer) {
		if (task.poprawna_odpowiedz === answer) {
			return "correct";
		} else if (
			answer === task.wybrana_odpowiedz &&
			task.poprawna_odpowiedz !== task.wybrana_odpowiedz
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
									hover
									onClick={() => {
										console.log("her,", index === task.wybrana_odpowiedz);
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
		} else if (task.zakres_struktury === "SPECJALISTYCZNY") {
			return (
				<Answers row={false}>
					{task.odpowiedzi.map((answer, index) => {
						return (
							<Answer>
								<Button
									bubble
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
			<Paragraph style="inline-block max-md:px-2">{task.pytanie}</Paragraph>
			{renderAnswers(task)}
		</TaskBottomSection>
	);
}
