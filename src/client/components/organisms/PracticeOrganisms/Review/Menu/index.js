import React, { useContext, useState } from "react";

import PracticeContext from "context/PracticeContext";
import Illustrations from "assets/images/svg/icons/Illustrations";

import Heading from "client/components/atoms/Heading";
import Image from "client/components/atoms/Image";
import Button from "client/components/atoms/Button";
import Text from "client/components/atoms/Text";
import Modal from "client/components/molecules/Modal";
import Quit from "client/components/molecules/PracticeMolecules/Quit";
import ReviewTasks from "client/components/molecules/PracticeMolecules/ReviewTasks";

import { MenuContainer, NextPrevious } from "./styles";
import { useMediaQuery } from "react-responsive";

export default function MenuReview({ isExam }) {
	const { setNewTask, setNewPickedAnswer, savedQuestions } =
		useContext(PracticeContext);
	const [explanationModalShow, setExplanationModalShow] = useState(false);
	const [result] = useState({
		questionCounter: 0,
		scoredPoints: 0,
		correctAnswers: 0,
		incorrectAnswers: 0,
		skippedQuestions: 0,
	});
	const [taskIdx, setTaskIdx] = useState(0);

	function handleExplanationShowButton() {
		setExplanationModalShow(true);
	}

	function handleNextQuestionButton() {
		const newTaskIdx =
			taskIdx + 1 <= savedQuestions.length - 1 ? taskIdx + 1 : taskIdx;
		setNewTask(savedQuestions[newTaskIdx]);
		setTaskIdx(newTaskIdx);
		setNewPickedAnswer(savedQuestions[newTaskIdx].wybrana_odpowiedz);
		return;
	}

	function handlePreviousQuestionButton() {
		let newTaskIdx = taskIdx > 0 ? taskIdx - 1 : taskIdx;
		setTaskIdx(newTaskIdx);
		setNewTask(savedQuestions[newTaskIdx]);
		setNewPickedAnswer(savedQuestions[newTaskIdx].wybrana_odpowiedz);
	}

	function updateTaskIdx(newTaskIdx) {
		setTaskIdx(newTaskIdx);
	}

	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

	return (
		<MenuContainer isReview={true}>
			<Button
				blank
				bubble={!isDesktop}
				size={!isDesktop ? "l" : ""}
				className="max-md:justify-center md:justify-start items-center w-[224px] max-md:order-3 absolute max-md:top-[70px] max-md:left-[2.5%] md:top-6 md:left-4 max-md:w-auto"
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

			<Quit isReview={true} isExam={isExam} result={result} />
			<Modal
				onClose={() => {
					setExplanationModalShow(false);
				}}
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
			<NextPrevious>
				<Button
					blank
					className="max-2xl:mt-auto max-md:my-auto max-2xl:justify-start"
					onClick={handlePreviousQuestionButton}
				>
					<Image src={Illustrations.ArrowLeft} />
					<Text>Poprzednie pytanie</Text>
				</Button>
				<Button full hover size="m" primary onClick={handleNextQuestionButton}>
					<Text>Następne pytanie</Text>
					<Image src={Illustrations.ArrowRight} />
				</Button>
			</NextPrevious>
			<ReviewTasks
				taskIdx={taskIdx}
				updateTaskIdx={updateTaskIdx}
				savedQuestions={savedQuestions}
			/>
		</MenuContainer>
	);
}
