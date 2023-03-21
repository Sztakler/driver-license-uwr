import React, { useEffect, useState } from "react";
import Image from "../../atoms/Image";
import ProgressBar from "@ramonak/react-progress-bar";

import {
	ExamContainer,
	UpperSection,
	LowerSection,
	Title,
	SubTitle,
} from "./styles";
import Button from "../../atoms/Button";

import TestImage from "../../../../../../src/assets/images/test.jpg"

export default function Exam() {
	const [baseQuestionNumber, setBaseQuestionNumber] = useState(1);
	const [maxBaseQuestions, setMaxBaseQuestions] = useState(5);
	const [specialistQuestionNumber, setSpecialistQuestionNumber] = useState(1);
	const [maxSpecialistQuestions, setMaxSpecialistQuestions] = useState(10);
	const [currentTime, setCurrentTime] = useState(0);
	const [maxTime, setMaxTime] = useState(20);
	const [answer, setAnswer] = useState(undefined)

	useEffect(() => {
		const interval = setInterval(incrementTimer, 1000);

		return () => clearInterval(interval);
	}, [currentTime]);



	return (
		<ExamContainer>
			<UpperSection>
				<div className="w-full">
					<img src={TestImage} className="h-full w-full"></img>
				</div>

				<div className="p-10 w-full h-full flex flex-col items-center justify-center gap-12">
					<Button className="bg-orange-500 text-white text-xl w-fit" onClick={endTest}>Zakończ test</Button>

					<div className="flex flex-row gap-12 mb-5">
						<div className="flex flex-col">
							<div className="text-base">Pytania podstawowe</div>
							<div className="bg-blue-500 text-white text-center p-2">{baseQuestionNumber} z {maxBaseQuestions}</div>
						</div>
						<div className="flex flex-col">
							<div className="text-base">Pytania specjalistyczne</div>
							<div className="bg-blue-500 text-white text-center p-2">{specialistQuestionNumber} z {maxSpecialistQuestions}</div>
						</div>
					</div>


					<div className="flex flex-col items-center justify-center mb-25">
						<div>Czas na zapoznanie się z pytaniem</div>
						<div className="bg-gray-500 w-full text-center text-yellow-50 relative">
							<div className="absolute left-1/2 text-xl">{currentTime}s</div>
							<ProgressBar
								completed={currentTime}
								maxCompleted={maxTime}
								isLabelVisible={false}
								bgColor="rgb(34 197 94)"
								labelSize="1.25rem"
								barContainerClassName="bg-gray-500"
								height="2rem"
								padding="2rem"
								transitionDuration="100ms"
							>
							</ProgressBar>
						</div>
					</div>

					<Button className="bg-orange-500 text-white text-base w-fit" onClick={nextQuestion} >Następne pytanie</Button>
				</div>
			</UpperSection>

			<LowerSection>
				<Button className={"bg-slate-500 text-white text-base " + (answer === 1 ? "bg-blue-500" : "")} hover value={1} onClick={(e) => selectAnswer(1)}>Tak</Button>
				<Button className={"bg-slate-500 text-white text-base " + (answer === 0 ? "bg-blue-500" : "")} hover value={0} onClick={(e) => selectAnswer(0)}>Nie</Button>
			</LowerSection>
		</ExamContainer >
	);

	function nextQuestion() {
		if (baseQuestionNumber < maxBaseQuestions && answer !== undefined) {
			incrementBaseQuestionNumber();
			resetAnswer();
			resetTimer();
		}
		else if (specialistQuestionNumber < maxSpecialistQuestions && answer !== undefined) {
			incrementSpecialistQuestionNumber();
			resetTimer();
			resetAnswer();
		}
		else {
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

	}
}