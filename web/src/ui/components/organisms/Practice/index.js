import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import ArrowRight from "../../../../icons/ArrowRight";
import ArrowLeft from "../../../../icons/ArrowLeft";
import Star from "../../../../icons/Star";
import Explanation from "../../../../icons/Explanation";
import Cancel from "../../../../icons/Cancel";
import Clock from "../../../../icons/Clock";
import PageLogo from "../../../../../../src/assets/images/svg/icons/PageLogo";

import Button from "../../atoms/Button";
import Paragraph from "../../atoms/Paragraph";
import Image from "../../atoms/Image";
import Label from "../../atoms/Label";
import Bubble from "../../molecules/Bubble";
import Modal from "../../molecules/Modal";

import {
	PracticeContainer,
	BrandTitle,
	Wrapper,
	TaskTopSection,
	TaskInfo,
	ImageBox,
	Answers,
	TaskBottomSection,
	Answer,
	Menu,
	QuitOptions,
	TimerContainer,
	CustomTimer,
	Row,
	NextPrevious,
} from "./styles";

export default function Practice(props) {
	const navigate = useNavigate();

	const [currentTime, setCurrentTime] = useState(30);
	const [minTime, setMinTime] = useState(0);
	const [task, setTask] = useState({
		question:
			"Qui laboris laborum ut consectetur Lorem deserunt qui excepteur voluptate amet. Mollit culpa laborum do dolor. Velit do aliquip aliqua pariatur reprehenderit non qui consectetur ut amet. Incididunt ad nisi est dolore dolore nulla proident id officia exercitation est officia deserunt mollit.",
		image: require("../../../../../../src/assets/images/test.jpg"),
		points: 3,
		type: "specjalistyczne",
		answers: ["TAK", "NIE"],
		pickedAnswer: null,
	});
	const [explanationModalShow, setExplanationModalShow] = useState(false);
	const [exitModalShow, setExitModalShow] = useState(false);
	const [taskStarted, setTaskStarted] = useState(false);
	const [favoriteTask, setFavoriteTask] = useState(false);

	function renderAnswers(task) {
		if (task.answers.length === 2) {
			return (
				<Answers row={true}>
					{task.answers.map((answer) => {
						return (
							<Answer>
								<Button
									primary
									onClick={() =>
										setTask((prevState) => {
											return { ...prevState, pickedAnswer: answer };
										})
									}
									size="l"
									active={answer === task.pickedAnswer}
								>
									<span>{answer}</span>
								</Button>
							</Answer>
						);
					})}
				</Answers>
			);
		} else if (task.answers.length === 3) {
			return (
				<Answers row={false}>
					{task.answers.map((answer, idx) => {
						return (
							<Answer>
								<Bubble
									secondary
									onClick={() =>
										setTask((prevState) => {
											return { ...prevState, pickedAnswer: answer };
										})
									}
									size="m"
									picked={answer === task.pickedAnswer}
								>
									{String.fromCharCode(65 + idx)}
								</Bubble>
								<span>{answer}</span>
							</Answer>
						);
					})}
				</Answers>
			);
		} else throw Error;
	}

	function decrementTimer() {
		if (taskStarted && currentTime > minTime) {
			setCurrentTime(currentTime - 1);
		}
	}

	useEffect(() => {
		const interval = setInterval(decrementTimer, 1000);
		return () => clearInterval(interval);
	}, [taskStarted, currentTime]);

	return (
		<PracticeContainer>
			<BrandTitle onClick={() => navigate("/")}>
				<Image src={PageLogo.PageLogo} />
			</BrandTitle>
			<Wrapper>
				<TaskTopSection>
					<TaskInfo>
						<span>Typ pytania: {task.type}</span>
						<span>Wartość punktowa: {task.points}</span>
						<span>Liczba rozwiązanych zadań: 100</span>
					</TaskInfo>
					<Bubble
						secondary
						onClick={() => {
							setFavoriteTask((prevState) => {
								return !prevState;
							});
						}}
						picked={favoriteTask}
						size="l"
						className="absolute top-4 -right-16"
					>
						<Star picked={favoriteTask} />
					</Bubble>
					<ImageBox>
						{taskStarted ? (
							<Image exam src={task.image} />
						) : (
							<Image
								exam
								src={require("../../../../../../src/assets/images/multi.png")}
							/>
						)}
					</ImageBox>
				</TaskTopSection>

				<Menu>
					<QuitOptions>
						<span>Zakończ trening</span>
						<Bubble
							secondary
							size="m"
							onClick={() => {
								setExitModalShow(true);
							}}
						>
							<Cancel />
						</Bubble>
						<Modal
							onClose={() => {
								setExitModalShow(false);
							}}
							show={exitModalShow}
						>
							<h4>Czy napewno chcesz zakończyć trening?</h4>
							<div>
								<Button primary onClick={() => navigate("/")}>
									TAK
								</Button>
								<Button primary onClick={() => setExitModalShow(false)}>
									NIE
								</Button>
							</div>
						</Modal>
					</QuitOptions>
					<Button
						primary
						full
						size="l"
						onClick={() => {
							taskStarted && setExplanationModalShow(true);
						}}
					>
						<Explanation />
						<span>Pokaż wyjaśnienie</span>
					</Button>
					<Modal
						onClose={() => {
							setExplanationModalShow(false);
						}}
						show={explanationModalShow}
					>
						<h4>Wyjaśnienie odpowiedzi</h4>
						<span>
							<b>Art. 26. ust. 1.</b>
							Kierujący pojazdem, zbliżając się do przejścia dla pieszych, jest
							obowiązany zachować szczególną ostrożność i ustąpić pierwszeństwa
							pieszemu znajdującemu się na przejściu.
						</span>
					</Modal>
					<TimerContainer>
						<Label size="m">Czas na zapoznanie się z pytaniem</Label>
						<Row>
							<Button primary size="m" onClick={() => setTaskStarted(true)}>
								<span>START</span>
							</Button>
							<CustomTimer expired={currentTime === 0}>
								<Clock />
								{currentTime} sekund
							</CustomTimer>
						</Row>
					</TimerContainer>
					<NextPrevious>
						<Button
							blank
							className="max-2xl:mt-auto max-2xl:justify-start"
							onClick={() => {
								navigate(0);
							}}
						>
							<ArrowLeft />
							<span>Poprzednie pytanie</span>
						</Button>
						<Button
							full
							size="m"
							primary
							onClick={() => {
								navigate(0);
							}}
						>
							<span>Następne pytanie</span>
							<ArrowRight />
						</Button>
					</NextPrevious>
				</Menu>

				<div className="flex basis-[100%]"></div>

				<TaskBottomSection>
					<Paragraph className="inline-block">{task.question}</Paragraph>
					{renderAnswers(task)}
				</TaskBottomSection>
			</Wrapper>
		</PracticeContainer>
	);
}
