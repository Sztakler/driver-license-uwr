import React, { useState } from "react";
import Timer from "../Timer";
import Button from "../../atoms/Button";
import Label from "../../atoms/Label";
import Modal from "../Modal";

import {
	NavigationContainer,
	QuestionCountersContainer,
	QuestionCounter,
	Counter,
	TimerContainer,
} from "./styles";
import { useNavigate } from "react-router";

function ExamNavigation(props) {
	const [exitModalShow, setExitModalShow] = useState(false);
	const navigate = useNavigate();

	return (
		<NavigationContainer>
			<Button
				className="py-3 px-5 bg-orange-500 text-white text-xl w-fit"
				onClick={() => {
					setExitModalShow(true);
				}}
			>
				Zakończ test
			</Button>
			<Modal
				onClose={() => {
					setExitModalShow(false);
				}}
				show={exitModalShow}
			>
				<h4>Czy napewno chcesz zakończyć trening?</h4>
				<div>
					<Button
						primary
						onClick={() =>
							navigate("/trening/podsumowanie", {
								state: { positive: true, isTraining: false },
							})
						}
					>
						TAK
					</Button>
					<Button primary onClick={() => setExitModalShow(false)}>
						NIE
					</Button>
				</div>
			</Modal>
			<QuestionCountersContainer className="flex flex-row gap-12 mb-5">
				<QuestionCounter>
					<Label size="m">Pytania podstawowe</Label>
					<Counter>
						{props.baseQuestionNumber} z {props.maxBaseQuestions}
					</Counter>
				</QuestionCounter>
				<QuestionCounter>
					<Label size="m">Pytania specjalistyczne</Label>
					<Counter>
						{props.specialistQuestionNumber} z {props.maxSpecialistQuestions}
					</Counter>
				</QuestionCounter>
			</QuestionCountersContainer>

			<TimerContainer>
				<Label size="m">Czas na zapoznanie się z pytaniem</Label>
				<Timer currentTime={props.currentTime} maxTime={props.maxTime} />
			</TimerContainer>

			<Button
				className="py-3 px-5 bg-orange-500 text-white text-base w-fit"
				onClick={props.nextQuestion}
			>
				Następne pytanie
			</Button>
		</NavigationContainer>
	);
}

export default ExamNavigation;
