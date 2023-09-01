import React, { useContext } from "react";

import PracticeContext from "context/PracticeContext";
import Button from "client/components/atoms/Button";
import Text from "client/components/atoms/Text";
import Paragraph from "client/components/atoms/Paragraph";

import { Answers, Answer, TaskBottomSection } from "./styles";
import { useMediaQuery } from "react-responsive";

export default function TaskBottomReview() {
	const { task } = useContext(PracticeContext);

	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

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
									size={isDesktop ? "m" : "s"}
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
		} else if (task.structure_scope === "SPECJALISTYCZNY") {
			return (
				<Answers row={false}>
					{task.answers.map((answer, index) => {
						return (
							<Answer>
								<Button
									bubble
									size={isDesktop ? "m" : "s"}
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
			<Paragraph style="inline-block max-md:px-2">{task.question}</Paragraph>
			{renderAnswers(task)}
		</TaskBottomSection>
	);
}
