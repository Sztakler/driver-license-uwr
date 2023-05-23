import React, { useEffect, useState } from "react";
import Image from "../../atoms/Image";

import {
	ExamContainer,
	UpperSection,
	LowerSection,
	ExamStartPanel,
} from "./styles";
import Button from "../../atoms/Button";

import TestImage from "/src/assets/images/test.jpg";
import ExamNavigation from "../../molecules/ExamNavigation";

// function ExamStartPanel(props) {
// 	return ()
// }

export default function Exam() {
	const [baseQuestionNumber, setBaseQuestionNumber] = useState(1);
	const [maxBaseQuestions, setMaxBaseQuestions] = useState(5);
	const [specialistQuestionNumber, setSpecialistQuestionNumber] = useState(1);
	const [maxSpecialistQuestions, setMaxSpecialistQuestions] = useState(10);
	const [currentTime, setCurrentTime] = useState(0);
	const [maxTime, setMaxTime] = useState(20);
	const [answer, setAnswer] = useState(undefined);
	const [examStarted, setExamStarted] = useState(false);

	useEffect(() => {
		const interval = setInterval(incrementTimer, 1000);

		return () => clearInterval(interval);
	}, [currentTime]);

	if (examStarted) {
		return (
			<ExamContainer>
				<UpperSection>
					<Image src={TestImage} exam />
					<ExamNavigation
						baseQuestionNumber={baseQuestionNumber}
						maxBaseQuestions={maxBaseQuestions}
						specialistQuestionNumber={specialistQuestionNumber}
						maxSpecialistQuestions={maxSpecialistQuestions}
						currentTime={currentTime}
						maxTime={maxTime}
						endTest={endTest}
						nextQuestion={nextQuestion}
					/>
				</UpperSection>

				<LowerSection>
					<Button
						className={
							"bg-slate-500 text-white text-base " +
							(answer === 1 ? "bg-blue-500" : "")
						}
						hover
						value={1}
						onClick={(e) => selectAnswer(1)}
					>
						Tak
					</Button>
					<Button
						className={
							"bg-slate-500 text-white text-base " +
							(answer === 0 ? "bg-blue-500" : "")
						}
						hover
						value={0}
						onClick={(e) => selectAnswer(0)}
					>
						Nie
					</Button>
				</LowerSection>
			</ExamContainer>
		);
	}
	return (
		<ExamContainer>
			<UpperSection>
				<Image src={TestImage} exam />
				<ExamNavigation
					baseQuestionNumber={baseQuestionNumber}
					maxBaseQuestions={maxBaseQuestions}
					specialistQuestionNumber={specialistQuestionNumber}
					maxSpecialistQuestions={maxSpecialistQuestions}
					currentTime={currentTime}
					maxTime={maxTime}
					endTest={endTest}
					nextQuestion={nextQuestion}
				/>
			</UpperSection>

			<LowerSection>
				<Button
					className={
						"py-3 px-5 bg-slate-500 text-white text-base " +
						(answer === 1 ? "bg-blue-500" : "")
					}
					hover
					value={1}
					onClick={(e) => selectAnswer(1)}
				>
					Tak
				</Button>
				<Button
					className={
						"py-3 px-5 bg-slate-500 text-white text-base " +
						(answer === 0 ? "bg-blue-500" : "")
					}
					hover
					value={0}
					onClick={(e) => selectAnswer(0)}
				>
					Nie
				</Button>
			</LowerSection>
		</ExamContainer>
	);

	function nextQuestion() {
		if (currentTime < maxTime && answer === undefined) {
			return;
		}

		if (baseQuestionNumber < maxBaseQuestions) {
			incrementBaseQuestionNumber();
			resetAnswer();
			resetTimer();
		} else if (specialistQuestionNumber < maxSpecialistQuestions) {
			incrementSpecialistQuestionNumber();
			resetTimer();
			resetAnswer();
		} else {
			endTest();
		}
	}

	function selectAnswer(a) {
		console.log(answer);
		setAnswer(a);
		console.log(answer);
	}

	function incrementBaseQuestionNumber() {
		setBaseQuestionNumber(baseQuestionNumber + 1);
	}

	function incrementSpecialistQuestionNumber() {
		setSpecialistQuestionNumber(specialistQuestionNumber + 1);
	}

	function incrementTimer() {
		setCurrentTime(currentTime + 1);

		if (currentTime >= maxTime) {
			nextQuestion();
			resetTimer();
		}
	}

	function resetTimer() {
		setCurrentTime(0);
	}

	function resetAnswer() {
		setAnswer(undefined);
	}

	function endTest() {
		setExamStarted(false);
	}
}
