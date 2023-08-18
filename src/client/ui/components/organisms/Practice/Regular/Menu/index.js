import React, { useContext, useState, useEffect } from "react";

import TaskContext from "../../../../../../../context/TaskContext";
import Illustrations from "../../../../../../../assets/images/svg/icons/Illustrations";

import Button from "../../../../atoms/Button";
import Text from "../../../../atoms/Text";
import Modal from "../../../../molecules/Modal";
import Quit from "../../../../molecules/Practice/Quit";
import Heading from "../../../../atoms/Heading";
import Input from "../../../../atoms/Input";
import Image from "../../../../atoms/Image";

import {
  MenuContainer,
  TimerContainer,
  CustomTimer,
  Row,
  NextPrevious,
  KnowledgeLevel,
} from "./styles";
import { useMediaQuery } from "react-responsive";

export default function Menu({ isExam }) {
  const {
    task,
    setNewTask,
    taskStarted,
    setNewTaskStarted,
    savedQuestions,
    setNewSavedQuestions,
    videoIsPlaying,
    setNewVideoIsPlaying,
    imageIsLoaded,
    setNewImageIsLoaded,
  } = useContext(TaskContext);

  const [questionTimer, setQuestionTimer] = useState(
    task.zakres_struktury === "PODSTAWOWY" ? 20 : 50
  );
  const [explanationModalShow, setExplanationModalShow] = useState(false);
  const [result, setResult] = useState({
    questionCounter: 0,
    scoredPoints: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    skippedQuestions: 0,
  });
  const [taskIdx, setTaskIdx] = useState(0);
  const [examFinished, setExamFinished] = useState(false);
  const [knowledgeLevel, setKnowledgeLevel] = useState("-");

  function decrementTimer() {
    if (
      (videoIsPlaying && taskStarted) ||
      (task.wybrana_odpowiedz && !isExam)
    ) {
      return;
    }

    if (questionTimer > 0) {
      setQuestionTimer(questionTimer - 1);
    } else if (questionTimer === 0) {
      if (!taskStarted) {
        setNewTaskStarted(true);
        setQuestionTimer(20);
        return;
      }

      if (isExam) {
        nextQuestion();
      }
    }
  }

  function nextQuestion() {
    if (examFinished) {
      return;
    }

    if (isExam) {
      verifyAnswer(task.wybrana_odpowiedz);
      if (taskIdx === savedQuestions.length - 1) {
        setExamFinished(true);
      }
    }

    let newTaskIdx = taskIdx;
    if (newTaskIdx + 1 <= savedQuestions.length - 1) {
      newTaskIdx = newTaskIdx + 1;
    } else {
      return;
    }

    const changedItemIndex = savedQuestions.findIndex(
      (item) => item.id === task.id
    );

    if (changedItemIndex !== -1) {
      const updatedQuestions = [...savedQuestions];
      updatedQuestions[changedItemIndex] = task;
      setNewSavedQuestions(updatedQuestions);
    } else {
      console.log("Item not found.");
    }

    let isTaskBasic =
      savedQuestions[newTaskIdx].zakres_struktury === "PODSTAWOWY";

    console.log("typ taska", savedQuestions[newTaskIdx], isTaskBasic);

    setNewTask(savedQuestions[newTaskIdx]);
    setNewTaskStarted(!isTaskBasic);
    setTaskIdx(newTaskIdx);
    setNewVideoIsPlaying(false);
    setQuestionTimer(isTaskBasic ? 20 : 50);

    const selectElement = document.getElementById("knowledge_level");
    selectElement.selectedIndex = savedQuestions[newTaskIdx].knowledge_level;
  }

  function previousQuestion() {
    let newTaskIdx = taskIdx > 0 ? taskIdx - 1 : taskIdx;
    setTaskIdx(newTaskIdx);
    setNewTask(savedQuestions[newTaskIdx]);
    setQuestionTimer(0);
    const selectElement = document.getElementById("knowledge_level");
    selectElement.selectedIndex = savedQuestions[newTaskIdx].knowledge_level;
  }

  function verifyAnswer(pickedAnswer) {
    const taskResult = getTaskResult();

    setResult((prevState) => ({
      questionCounter: prevState.questionCounter + 1,
      scoredPoints:
        prevState.scoredPoints +
        task.liczba_punktow * (taskResult === "correct"),
      correctAnswers:
        prevState.correctAnswers + (taskResult === "correct" ? 1 : 0),
      incorrectAnswers:
        prevState.incorrectAnswers + (taskResult === "incorrect" ? 1 : 0),
      skippedQuestions:
        prevState.skippedQuestions + (taskResult === "skipped" ? 1 : 0),
    }));

    return;
  }

  function getTaskResult() {
    if (task.wybrana_odpowiedz === null) {
      return "skipped";
    }
    if (task.wybrana_odpowiedz === task.poprawna_odpowiedz) {
      return "correct";
    }
    return "incorrect";
  }

  function handleStartButton() {
    if (taskStarted) {
      return;
    }
    setNewTaskStarted(true);
    setQuestionTimer(15);
  }

  function handleExplanationShowButton() {
    taskStarted && setExplanationModalShow(true);
  }

  async function handleChangeKnowledgeLevel(e) {
    let newKnowledgeLevel = Number(e.target.value);
    setKnowledgeLevel(newKnowledgeLevel);

    const changedItemIndex = savedQuestions.findIndex(
      (item) => item.id === task.id
    );

    if (changedItemIndex !== -1) {
      const updatedQuestions = [...savedQuestions];
      updatedQuestions[changedItemIndex].knowledge_level = newKnowledgeLevel;
      setNewSavedQuestions(updatedQuestions);
    } else {
      console.log("Item not found.");
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/user-knowledge-levels",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question_id: task.id,
            knowledgeLevel: newKnowledgeLevel,
          }),
        }
      );

      if (response.ok) {
        console.log("Data submitted successfully");
      } else {
        console.error("Error submitting data");
      }
    } catch (error) {
      console.error("Network error:", error);
    }

    return 0;
  }

  function handleNextQuestionButton() {
    nextQuestion();
  }

  function handlePreviousQuestionButton() {
    previousQuestion();
  }

  function getMessage() {
    if (taskStarted) {
      if (videoIsPlaying) {
        return "Trwa odtwarzanie filmu";
      }

      if (imageIsLoaded || !videoIsPlaying) {
        return "Czas na udzielenie odpowiedzi";
      }

      return "";
    }

    return "Czas na zapoznanie się z pytaniem";
  }

  useEffect(() => {
    const interval = setInterval(decrementTimer, 1001);
    return () => clearInterval(interval);
  }, [taskStarted, questionTimer, videoIsPlaying]);

  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <MenuContainer isReview={false}>
      {!isExam && (
        <Button
          blank
          bubble={!isDesktop}
          size={!isDesktop ? "l" : ""}
          className="justify-center items-center w-[200px] order-3 max-md:absolute max-md:top-[70px] max-md:left-[20%] max-md:w-auto"
          onClick={handleExplanationShowButton}
        >
          <Image
            src={
              isDesktop
                ? Illustrations.Explanation
                : Illustrations.ExplanationMobile
            }
          />
          {isDesktop && <Text className="text-[16px]">Pokaż wyjaśnienie</Text>}
        </Button>
      )}
      <Quit isReview={false} isExam={isExam} result={result} />
      <Modal
        onClose={() => setExplanationModalShow(false)}
        show={explanationModalShow}
      >
        <Heading level={4}>Wyjaśnienie odpowiedzi</Heading>
        <Text>
          <b>Art. 26. ust. 1.</b>
          Kierujący pojazdem, zbliżając się do przejścia dla pieszych, jest
          obowiązany zachować szczególną ostrożność i ustąpić pierwszeństwa
          pieszemu znajdującemu się na przejściu.
        </Text>
      </Modal>
      <TimerContainer>
        <Row>
          <Button primary hover size="s" onClick={handleStartButton}>
            <Text>START</Text>
          </Button>
          <div className="relative w-full max-w-[332px]">
            <Text className="absolute -top-6 left-[50%] -translate-x-1/2 whitespace-nowrap">
              {isDesktop && getMessage()}
            </Text>
            <CustomTimer expired={questionTimer === 0}>
              <Image src={Illustrations.Clock} />
              <Text>{questionTimer} sekund</Text>
            </CustomTimer>
          </div>
        </Row>
      </TimerContainer>

      {!isExam && (
        <KnowledgeLevel>
          <Text className="text-[16px] px-2">Poziom znajomości pytania</Text>
          <Input
            id="knowledge_level"
            type="select"
            className="bg-[#FFE49E] rounded-[39px] w-full px-2 py-1"
            onChange={handleChangeKnowledgeLevel}
          >
            <option hidden value={0}>
              -
            </option>
            <option value={1}>Niska</option>
            <option value={2}>Średnia</option>
            <option value={3}>Wysoka</option>
          </Input>
        </KnowledgeLevel>
      )}

      <NextPrevious>
        {!isExam ? (
          <Button
            blank
            className="max-2xl:mt-auto max-md:my-auto max-2xl:justify-start"
            onClick={handlePreviousQuestionButton}
          >
            <Image src={Illustrations.ArrowLeft} />
            <Text className="max-md:text-base">Poprzednie pytanie</Text>
          </Button>
        ) : (
          <></>
        )}
        <Button hover size="m" primary onClick={handleNextQuestionButton}>
          <Text>Następne pytanie</Text>
          {isDesktop && <Image src={Illustrations.ArrowRight} />}
        </Button>
      </NextPrevious>
    </MenuContainer>
  );
}
