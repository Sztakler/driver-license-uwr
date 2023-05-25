import React, { useEffect, useState } from "react";
import Image from "../../atoms/Image";

import {
  ExamContainer,
  UpperSection,
  LowerSection,
  ExamStartPanel,
  MainContent,
  Menu,
  MenuTop,
  MenuTopMid,
  MenuBotMid,
  MenuBottom,
  QuestionInfo,
  QuestionContent,
  MediaContainer,
  ExamInfo,
  NavigationButton,
  NextQuestionButton,
  ExamNavigation,
  InfoValue,
  InfoValueFullWidth,
  InfoElementRow,
  InfoElementColumn,
  AnswersForm,
  AnswerInput,
  AnswerText,
  AnswerInputWrapper,
  QuestionHeader,
  InfoText,
  AnswerLabel,
  ExamTimer,
  TimerOuterBar,
  TimerInnerBar,
  ExamTimerContainer,
  SelectButton,
  AnswerMarker,
  HeaderContainer,
  IllustrationContainer,
  TitleContainer,
  Title,
  Subtitle,
} from "./styles";
import Button from "../../atoms/Button";
import Paragraph from "../../atoms/Paragraph";
import Modal from "../../molecules/Modal";
import TestImage from "/src/assets/images/test.jpg";
import {func} from "prop-types";
import { useNavigate } from "react-router";
import Illustrations from "/src/assets/images/svg/icons/Illustrations";

export default function Exam() {
  const [questionTime, setQuestionTime] = useState(0);
  const [examCountdown, setExamCountdown] = useState(25 * 60);
  const [totalExamTime, setTotalExamTime] = useState(25 * 60);
  const [maxQuestionTime, setMaxQuestionTime] = useState(5); // should be 25
  const [answer, setAnswer] = useState(undefined);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [examStarted, setExamStarted] = useState(false);
  const [exitModalShow, setExitModalShow] = useState(false);

  const [questionNumber, setQuestionNumber] = useState(1);
  const [maxQuestionNumber, setMaxQuestionNumber] = useState(32);
  const [baseQuestionsNumber, setBaseQuestionsNumber] = useState(20);
  const [specialistQuestionsNumber, setSpecialistQuestionsNumber] = useState(12);

  useEffect(() => {
    const interval = setInterval(incrementTimers, 1000);

    return () => clearInterval(interval);
  }, [questionTime, examCountdown]);

  const navigate = useNavigate();

  return (
    <ExamContainer>
      <MainContent>
        <QuestionInfo>
          <InfoElementRow>
            <InfoText>Wartość punktowa</InfoText>
            <InfoValue>3</InfoValue>
          </InfoElementRow>
          <InfoElementRow>
            <InfoText>Aktualna kategoria</InfoText>
            <InfoValue>B</InfoValue>
          </InfoElementRow>
          <InfoElementRow>
            <InfoText>Czas do końca egzaminu</InfoText>
            <InfoValue>{toClockTime(examCountdown)}</InfoValue>
          </InfoElementRow>
        </QuestionInfo>
        <MediaContainer>
          <Image src={TestImage}></Image>
        </MediaContainer>
        <QuestionContent>
          <QuestionHeader>Czy w tej sytacji sygnały świetlne decydują o pierwszeństwie wjazdu dla Ciebie na skrzyżowanie?</QuestionHeader>
          <AnswersForm>
            <AnswerLabel for="answer0">
              <AnswerInput type="radio" id="answer0" name="answer" value="0" onChange={handleAnswerChange} />
              <AnswerMarker>A</AnswerMarker>
              <AnswerText>Może spodziewać się oszronienia jezdni</AnswerText>
            </AnswerLabel>
            <AnswerLabel for="answer1">
              <AnswerInput type="radio" id="answer1" name="answer" value="1" onChange={handleAnswerChange} />
              <AnswerMarker>B</AnswerMarker>
              <AnswerText>Powinien być przygotowany do zmiany przyczepności kół do jezdni.</AnswerText>
            </AnswerLabel>
            <AnswerLabel for="answer2">
              <AnswerInput type="radio" id="answer2" name="answer" value="2" onChange={handleAnswerChange} />
              <AnswerMarker>C</AnswerMarker>
              <AnswerText>Powinien spodziewać się lokalnie występujących opadów śniegu</AnswerText>
            </AnswerLabel>
          </AnswersForm>
        </QuestionContent>
      </MainContent>

      <Menu>
        <MenuTop>
          <ExamNavigation>
            <NavigationButton 
              onClick={() => {
                setExitModalShow(true);
              }}>Zakończ egzamin</NavigationButton>
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
          </ExamNavigation>
        </MenuTop>

        <MenuTopMid>
          <ExamInfo>
            <InfoElementColumn>
              <InfoText>Pytania podstawowe</InfoText>
              <InfoValueFullWidth>3 z 20</InfoValueFullWidth>
            </InfoElementColumn>
            <InfoElementColumn>
              <InfoText>Pytania specjalistyczne</InfoText>
              <InfoValueFullWidth>0 z 12</InfoValueFullWidth>
            </InfoElementColumn>
          </ExamInfo>
        </MenuTopMid>

        <MenuBotMid>
          <ExamTimerContainer>
            <InfoText>Czas na zapoznanie się z pytaniem</InfoText>
            <ExamTimer>
              <SelectButton>Start</SelectButton>
              <TimerOuterBar>
                <TimerInnerBar
                  style={{width: `${questionTime/maxQuestionTime*100}%`}}
                >
                  {questionTime}s
                </TimerInnerBar>
              </TimerOuterBar>
            </ExamTimer>
          </ExamTimerContainer>
        </MenuBotMid>

        <MenuBottom>
          <ExamNavigation>
            <NextQuestionButton onClick={nextQuestion}>Następne pytanie</NextQuestionButton>
          </ExamNavigation>
        </MenuBottom>
      </Menu>

    </ExamContainer>
  );


  function toClockTime(time) {
    let minutes = Math.floor(time / 60).toFixed(0);
    let seconds = Math.floor(time % 60).toFixed(0);

    let MM = minutes.toString();
    let SS = seconds.toString();

    if (minutes < 10) {
      MM = "0" + minutes;
    }
    if (seconds < 10) {
      SS = "0" + seconds;
    }

    return minutes === totalExamTime ? 
      MM :
      MM + ":" + SS;
  }

  /**
   * Loads next question, resets corresponding state variables.
   */
  function nextQuestion() {
    console.log(questionNumber);
    resetQuestionTime();
  }

  /**
   * Stores selected answer index in `answer` state variable.
   */
  function handleAnswerChange(event) {
    setAnswer(event.target.value);
  }

  function incrementTimers() {
    if (questionTime + 1 >= maxQuestionTime) {
      setQuestionTime(0);
    } else {
      setQuestionTime(questionTime + 1);
    }
  }

  function resetQuestionTime() {
    setQuestionTime(0);
  }
}

