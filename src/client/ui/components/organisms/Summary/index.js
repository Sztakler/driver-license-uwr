import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import Image from "../../atoms/Image";
import Illustrations from "../../../../../assets/images/svg/icons/Illustrations";

import {
  SummaryContainer,
  InnerTextBox,
  InsideBackground,
  Table,
  StatisticContainer,
  Statistic,
  Points,
} from "./styles";

function feedbackGenerator(results) {
  if (results.scoredPoints > 75) {
    return "EGZAMIN ZALICZONY";
  } else {
    return "EGZAMIN NIEZALICZONY";
  }
}

export default function Summary() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [results, setResult] = useState({
    questionCounter: 0,
    scoredPoints: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    skippedQuestions: 0,
  });

  async function getExamResult() {
    let res = await fetch(`http://localhost:5000/api/exam/results/${id}`).then(
      (response) => response.json()
    );
    return res.summary;
  }

  useEffect(() => {
    async function fetchDataAndSetIt() {
      let res = await getExamResult();
      setResult(res);
    }

    fetchDataAndSetIt();
  }, []);

  return (
    <SummaryContainer>
      <InnerTextBox positive={results.scoredPoints >= 68}>
        <InsideBackground>
          <Text className="font-[Barriecito] max-md:text-[125%] max-xl:text-[100%] text-[70%] max-md:max-w-[300px] max-xl:max-w-[800px] max-w-[500px] break-words">
            {feedbackGenerator(results)}
          </Text>
          <Table>
            <StatisticContainer>
              <Statistic>zdobyte punkty:</Statistic>
              <Points>{results.scoredPoints}</Points>
            </StatisticContainer>
            <StatisticContainer>
              <Statistic>dobre odpowiedzi:</Statistic>
              <Points className="text-[#518402]">
                {results.correctAnswers}
              </Points>
            </StatisticContainer>
            <StatisticContainer>
              <Statistic>błędne odpowiedzi:</Statistic>
              <Points className="text-[#FF4412]">
                {results.incorrectAnswers}
              </Points>
            </StatisticContainer>
            <StatisticContainer>
              <Statistic>pominięte odpowiedzi:</Statistic>
              <Points className="text-[#FBBD1F]">
                {results.skippedQuestions}
              </Points>
            </StatisticContainer>
          </Table>
          <Button
            primary
            hover
            size="m"
            className="mb-2 max-w-[280px]"
            onClick={() => {
              navigate("/egzamin");
            }}
          >
            {"NOWY EGZAMIN"}
          </Button>
          <Button
            blank
            className=""
            onClick={() => {
              navigate(`/egzamin/przeglad-odpowiedzi/${id}`);
            }}
          >
            <Image src={Illustrations.ArrowLeft} />
            <Text>Przejrzyj odpowiedzi</Text>
          </Button>
        </InsideBackground>
      </InnerTextBox>
    </SummaryContainer>
  );
}
