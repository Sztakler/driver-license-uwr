import React, { useContext } from "react";

import PracticeContext from "context/PracticeContext";
import Button from "client/components/atoms/Button";
import Text from "client/components/atoms/Text";
import Paragraph from "client/components/atoms/Paragraph";

import { Answers, Answer, TaskBottomSection } from "./styles";

export default function TaskBottomReview() {
	const { task } = useContext(PracticeContext);

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
		console.log(task);
		if (task.zakres_struktury === "PODSTAWOWY") {
			return (
				<Answers row={true}>
					{task.odpowiedzi.map((answer, index) => {
						return (
							<Answer>
								<Button
									primary
									size="s"
									picked={index === task.wybrana_odpowiedz}
									result={getTaskResult(index)}
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
									size="m"
									picked={index === task.wybrana_odpowiedz}
									result={getTaskResult(index)}
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
