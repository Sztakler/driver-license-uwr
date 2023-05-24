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
  AnswersList,
  AnswerListElement,
  QuestionHeader,
  InfoText,
  AnswerText,
  ExamTimer,
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
import TestImage from "/src/assets/images/test.jpg";
import {func} from "prop-types";
import { useNavigate } from "react-router";
import Illustrations from "/src/assets/images/svg/icons/Illustrations";

export default function Exam() {
  const [baseQuestionNumber, setBaseQuestionNumber] = useState(1);
  const [maxBaseQuestions, setMaxBaseQuestions] = useState(5);
  const [specialistQuestionNumber, setSpecialistQuestionNumber] = useState(1);
  const [maxSpecialistQuestions, setMaxSpecialistQuestions] = useState(10);
  const [currentTime, setCurrentTime] = useState(0);
  const [examCountdown, setExamCountdown] = useState(25 * 60);
  const [totalExamTime, setTotalExamTime] = useState(25 * 60);
  const [maxTime, setMaxTime] = useState(20);
  const [answer, setAnswer] = useState(undefined);
  const [examStarted, setExamStarted] = useState(false);

  useEffect(() => {
    const interval = setInterval(incrementTimer, 1000);
    console.log(currentTime, examCountdown);

    return () => clearInterval(interval);
  }, [currentTime, examCountdown]);

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
          <AnswersList>
            <AnswerListElement>
              <AnswerMarker>A</AnswerMarker>
              <AnswerText>Może spodziewać się oszronienia jezdni</AnswerText>
            </AnswerListElement>
            <AnswerListElement>
              <AnswerMarker>B</AnswerMarker>
              <AnswerText>Powinien być przygotowany do zmiany przyczepności kół do jezdni.</AnswerText>
            </AnswerListElement>
            <AnswerListElement>
              <AnswerMarker>C</AnswerMarker>
              <AnswerText>Powinien spodziewać się lokalnie występujących opadów śniegu</AnswerText>
            </AnswerListElement>
          </AnswersList>
        </QuestionContent>
      </MainContent>

      <Menu>
        <MenuTop>
          <ExamNavigation>
            <NavigationButton onClick={() => navigate("/egzamin")}>Zakończ egzamin</NavigationButton>
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
            <ExamNavigation>
              <SelectButton>Start</SelectButton>
              <ExamTimer>12s</ExamTimer>
            </ExamNavigation>
          </ExamTimerContainer>
        </MenuBotMid>

        <MenuBottom>
          <ExamNavigation>
            <NextQuestionButton>Następne pytanie</NextQuestionButton>
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
    setExamCountdown(examCountdown - 1);
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

/*

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
  */

