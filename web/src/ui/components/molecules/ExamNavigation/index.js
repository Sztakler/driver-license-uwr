import React from "react";
import Timer from "../Timer";
import Button from "../../atoms/Button";
import Label from "../../atoms/Label";

import {
    NavigationContainer,
    QuestionCountersContainer,
    QuestionCounter,
    Counter,
    TimerContainer,
} from "./styles";


function ExamNavigation(props) {
    return (
        <NavigationContainer>
            <Button className="bg-orange-500 text-white text-xl w-fit" onClick={props.endTest}>Zakończ test</Button>

            <QuestionCountersContainer className="flex flex-row gap-12 mb-5">
                <QuestionCounter>
                    <Label size="m">Pytania podstawowe</Label>
                    <Counter>{props.baseQuestionNumber} z {props.maxBaseQuestions}</Counter>
                </QuestionCounter>
                <QuestionCounter>
                    <Label size="m">Pytania specjalistyczne</Label>
                    <Counter >{props.specialistQuestionNumber} z {props.maxSpecialistQuestions}</Counter>
                </QuestionCounter>
            </QuestionCountersContainer>


            <TimerContainer>
                <Label size="m">Czas na zapoznanie się z pytaniem</Label>
                <Timer currentTime={props.currentTime} maxTime={props.maxTime} />
            </TimerContainer>

            <Button className="bg-orange-500 text-white text-base w-fit" onClick={props.nextQuestion} >Następne pytanie</Button>
        </NavigationContainer>
    )
}

export default ExamNavigation;


