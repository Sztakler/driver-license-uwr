import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StarOutlineIcon from "@mui/icons-material/Star";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";

import Button from "../../atoms/Button";
import Paragraph from "../../atoms/Paragraph";
import Image from "../../atoms/Image";
import Timer from "../../molecules/Timer";
import Label from "../../atoms/Label";

import {
	PracticeContainer,
	Wrapper,
	FavoriteTask,
	TaskTopSection,
	InnerWrapper,
	TaskInfo,
	ImageBox,
	Answers,
	TaskBottomSection,
	Answer,
	Menu,
	QuitOptions,
	TimerContainer,
	Row,
	NextPrevious,
} from "./styles";

import Bubble from "../../molecules/Bubble";
import Heading from "../../atoms/Heading";

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
							X
						</Bubble>
					</QuitOptions>
					<Button primary full size="m" onClick={() => navigate("/")}>
						<CommentRoundedIcon></CommentRoundedIcon>
						<span>Pokaż wyjaśnienie</span>
					</Button>
					<TimerContainer>
						<Label size="m">Czas na zapoznanie się z pytaniem</Label>
						<Row>
							<Button primary size="m" onClick={() => navigate("/")}>
								<span>START</span>
							</Button>
							{/* <Timer
								className="max-w-[350px]"
								currentTime={currentTime}
								maxTime={maxTime}
							/> */}
						</Row>
					</TimerContainer>
					<NextPrevious>
						<Button full primary>
							<span>Następne pytanie</span>
							<ArrowForwardIcon />
						</Button>
						<Button blank>
							<ArrowBackIcon />
							<span>Poprzednie pytanie</span>
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
