import React, { useEffect, useState } from "react";

import Input from "../../atoms/Input";
import Paragraph from "../../atoms/Paragraph";
import Label from "../../atoms/Label";
import Button from "../../atoms/Button";

import { useNavigate } from "react-router";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
	cachedAnswersState,
	inReviewModeState,
	resultsState,
} from "../../../../recoil/atoms";

import {
  Subtitle,
  Container,
  Form,
  LeftContainer,
  RightContainer,
  FilterName,
} from "./styles";

export default function QuestionsSelectionForm({ data, headings, ...props }) {
	const resetResult = useResetRecoilState(resultsState);
	const resetReviewMode = useResetRecoilState(inReviewModeState);
	const resetCachedAnswers = useResetRecoilState(cachedAnswersState);
	const navigate = useNavigate();

	let startPractice = () => {
		resetReviewMode();
		resetResult();
		resetCachedAnswers();
		navigate("/trening/praktyka");
	};

  return (
    <Container className="flex flex-col w-full gap-[200px]">
      <Form className="flex flex-row justify-center w-full h-full align-center gap-48">
        <LeftContainer className="flex flex-col justify-start">
          <Label for="all" training>
            <Input checkbox id="all" type="checkbox" value="all"></Input>
            <Paragraph style="text-2xl">
              <FilterName className="font-semibold">Wszystkie</FilterName>(2125)
            </Paragraph>
          </Label>

          <Label for="saved" training>
          <Input
            checkbox
            id="saved"
            type="checkbox"
            value="saved"
          ></Input>
          <Paragraph style="text-2xl">
            <FilterName className="font-semibold">Zapisane</FilterName>(25)
          </Paragraph>
          </Label>
        </LeftContainer>

      <RightContainer className="flex flex-col justify-start align-center">
        <Subtitle className="pb-4 text-2xl font-semibold">
          Poziom znajomości:
        </Subtitle>

        <Label for="low" training>
          <Input checkbox id="low" type="checkbox" value="low"></Input>
          <Paragraph style="text-xl">niski (1000)</Paragraph>
        </Label>

        <Label for="medium" training>
          <Input
            checkbox
            id="medium"
            type="checkbox"
            value="medium"
          ></Input>
          <Paragraph style="text-xl">średni (1000)</Paragraph>
        </Label>

        <Label for="high" training>
          <Input
            checkbox
            id="high"
            type="checkbox"
            value="high"
          ></Input>
          <Paragraph style="text-xl">wysoki (1000)</Paragraph>
        </Label>
      </RightContainer>
      </Form>
      <Button
        primary
        size="l"
        className="self-center w-[70%] mt-10"
        onClick={startPractice}
      >
        <Subtitle className="py-6 m-0 text-4xl font-semibold text-center">
        Rozpocznij trening 
        </Subtitle>
      </Button>
    </Container>
  );
}
