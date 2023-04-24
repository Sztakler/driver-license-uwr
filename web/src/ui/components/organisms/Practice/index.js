import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import ArrowRight from "../../../../../../src/assets/icons/ArrowRight";
import ArrowLeft from "../../../../../../src/assets/icons/ArrowLeft";
import StarOutlineIcon from "@mui/icons-material/Star";
import Explanation from "../../../../../../src/assets/icons/Explanation";
import Cancel from "../../../../../../src/assets/icons/Cancel";

import Button from "../../atoms/Button";
import Paragraph from "../../atoms/Paragraph";
import Image from "../../atoms/Image";
import Label from "../../atoms/Label";
import Bubble from "../../molecules/Bubble";

import Timer from "../../molecules/Timer";
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
import Clock from "../../../../../../src/assets/icons/Clock";

export default function Practice(props) {
	const location = useLocation();
	const navigate = useNavigate();

	const [currentTime, setCurrentTime] = useState(0);
	const [maxTime, setMaxTime] = useState(20);
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

	const [taskStarted, setTaskStarted] = useState(true);

	let handleSelect = (answer) => {
		setTask((prevState) => {
			return { ...prevState, pickedAnswer: answer };
		});
	};

	function incrementTimer() {
		if (currentTime < maxTime) {
			setCurrentTime(currentTime + 1);
		}
	}

	function resetTimer() {
		setCurrentTime(0);
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
						<StarOutlineIcon
							className="text-[#9d9d9d] group-hover:text-[#ffd700]"
							sx={{ fontSize: 32 }}
							si
						/>
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
						<Bubble secondary size="m">
							<Cancel />
						</Bubble>
					</QuitOptions>
					<Button primary full size="l" onClick={() => navigate("/")}>
						<Explanation />
						<span>Pokaż wyjaśnienie</span>
					</Button>
					<TimerContainer>
						<Label size="m">Czas na zapoznanie się z pytaniem</Label>
						<Row>
							<Button primary size="m" onClick={() => navigate("/")}>
								<span>START</span>
							</Button>
							<CustomTimer>
								<Clock />
								30 sekund
							</CustomTimer>
						</Row>
					</TimerContainer>
					<NextPrevious>
						<Button blank className="max-2xl:mt-auto max-2xl:justify-start">
							<ArrowLeft />
							<span>Poprzednie pytanie</span>
						</Button>
						<Button full size="m" primary>
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
