import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import ArrowRight from "../../../../../../src/assets/icons/ArrowRight";
import ArrowLeft from "../../../../../../src/assets/icons/ArrowLeft";
import StarOutlineIcon from "@mui/icons-material/Star";
import Explanation from "../../../../../../src/assets/icons/Explanation";
import Cancel from "../../../../../../src/assets/icons/Cancel";
import Clock from "../../../../../../src/assets/icons/Clock";

import Button from "../../atoms/Button";
import Paragraph from "../../atoms/Paragraph";
import Image from "../../atoms/Image";
import Label from "../../atoms/Label";
import Bubble from "../../molecules/Bubble";
import Modal from "../../molecules/Modal";

import {
	PracticeContainer,
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
import Star from "../../../../../../src/assets/icons/Star";

export default function Practice(props) {
	const location = useLocation();
	const navigate = useNavigate();

	const [currentTime, setCurrentTime] = useState(30);
	const [minTime, setMinTime] = useState(0);
	const [task, setTask] = useState({
		question:
			"Qui laboris laborum ut consectetur Lorem deserunt qui excepteur voluptate amet. Mollit culpa laborum do dolor. Velit do aliquip aliqua pariatur reprehenderit non qui consectetur ut amet. Incididunt ad nisi est dolore dolore nulla proident id officia exercitation est officia deserunt mollit.",
		image: require("../../../../../../src/assets/images/test.jpg"),
		points: 3,
		type: "specjalistyczne",
		answers: [
			"TAK",
			"NIE",
			"Quis ad proident exercitation nostrud velit culpa anim elit proident ipsum velit nisi sit minim.",
		],
		pickedAnswer: null,
	});
	const [explanationModalShow, setExplanationModalShow] = useState(false);
	const [exitModalShow, setExitModalShow] = useState(false);
	const [taskStarted, setTaskStarted] = useState(true);

	let handleSelect = (answer) => {
		setTask((prevState) => {
			return { ...prevState, pickedAnswer: answer };
		});
	};

	function incrementTimer() {
		if (currentTime > minTime) {
			setCurrentTime(currentTime - 1);
		}
	}

	function resetTimer() {
		setCurrentTime(30);
	}

	useEffect(() => {
		const interval = setInterval(incrementTimer, 1000);

		return () => clearInterval(interval);
	}, [currentTime]);

	return (
		<PracticeContainer>
			<Wrapper>
				<TaskTopSection>
					<TaskInfo>
						<span>Typ pytania: {task.type}</span>
						<span>Wartość punktowa: {task.points}</span>
						<span>Liczba rozwiązanych zadań: 100</span>
					</TaskInfo>
					<Bubble secondary size="l" className="absolute top-4 -right-16 ">
						{/* <StarOutlineIcon
							className="text-[#9d9d9d] group-hover:text-[#ffd700]"
							sx={{ fontSize: 32 }}
							si
						/> */}
						<Star />
					</Bubble>
					<ImageBox>
						{taskStarted ? (
							<Image exam src={task.image} />
						) : (
							<span>Naciśnij start aby wyświetlić multimedia</span>
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
						</Modal>
					</QuitOptions>
					<Button
						primary
						full
						size="l"
						onClick={() => setExplanationModalShow(true)}
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
							<br />
							Kierujący pojazdem, zbliżając się do przejścia dla pieszych, jest
							obowiązany zachować szczególną ostrożność i ustąpić pierwszeństwa
							pieszemu znajdującemu się na przejściu.
						</span>
					</Modal>
					<TimerContainer>
						<Label size="m">Czas na zapoznanie się z pytaniem</Label>
						<Row>
							<Button primary size="m" onClick={() => navigate("/")}>
								<span>START</span>
							</Button>
							<CustomTimer>
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
					<Paragraph className="inline-block" innerHTML={task.question} />
					<Answers>
						{task.answers.map((answer, idx) => {
							return (
								<Answer>
									<Bubble
										onClick={() => handleSelect(answer)}
										secondary
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
				</TaskBottomSection>
			</Wrapper>
		</PracticeContainer>
	);
}
