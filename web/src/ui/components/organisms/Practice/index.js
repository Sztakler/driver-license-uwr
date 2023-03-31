import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "../../atoms/Button";
import Paragraph from "../../atoms/Paragraph";
import Image from "../../atoms/Image";
import Heading from "../../atoms/Heading";
import Input from "../../atoms/Input";

import {
	PracticeContainer,
	PracticeWrapper,
	TopSection,
	CenterSection,
	Task,
	Answers,
	Answer,
	Menu,
	QuitOptions,
	Row,
	BottomSection,
} from "./styles";

export default function Practice(props) {
	const location = useLocation();
	const navigate = useNavigate();

	const [task, setTask] = useState({
		question:
			"Qui laboris laborum ut consectetur Lorem deserunt qui excepteur voluptate amet. Mollit culpa laborum do dolor. Velit do aliquip aliqua pariatur reprehenderit non qui consectetur ut amet. Incididunt ad nisi est dolore dolore nulla proident id officia exercitation est officia deserunt mollit.",
		image: require("../../../../../../src/assets/images/test.jpg"),
		answers: [
			"TAK",
			"NIE",
			"Quis ad proident exercitation nostrud velit culpa anim elit proident ipsum velit nisi sit minim.",
		],
		pickedAnswer: null,
	});

	let handleSelect = (answer) => {
		setTask((prevState) => {
			return { ...prevState, pickedAnswer: answer };
		});
	};

	return (
		<PracticeContainer>
			<TopSection>
				<span className="text-2xl">{location.state.type.displayable}</span>
				<ArrowForwardIosIcon fontSize="small" sx={{ color: "black" }} />
				<span className="text-2xl">{location.state.mode.displayable}</span>
				<ArrowForwardIosIcon fontSize="small" sx={{ color: "black" }} />
				<span className="text-2xl">
					{location.state.question_set.displayable}
				</span>
			</TopSection>
			<PracticeWrapper>
				<CenterSection>
					<Task>
						<Image test src={task.image} />
						<Paragraph innerHTML={task.question} />
						<Answers>
							{task.answers.map((answer) => {
								return (
									<Answer>
										<Input
											radio
											type="radio"
											name="taskAnswer"
											value={answer}
											onChange={() => {
												handleSelect(answer);
											}}
										/>
										<span>{answer}</span>
									</Answer>
								);
							})}
						</Answers>
					</Task>
					<Menu>
						<QuitOptions>
							<Button
								secondary
								className="bg-[#bf0000]"
								onClick={() => navigate("/")}
							>
								Powrót do menu
							</Button>
							<Button secondary className="bg-[#0080ff]"
															onClick={() => navigate("/training")}>
								Wybór treningu
							</Button>
						</QuitOptions>
						
						<Heading level={2}>Pytanie 1</Heading>
						<Heading level={3}>Pytanie specjalistyczne</Heading>
						<Row>
							<Button primary>Poprzednie pytanie</Button>
							<Button inactive={!task.pickedAnswer} primary>
								Następne pytanie
							</Button>
						</Row>
					</Menu>
				</CenterSection>
				<BottomSection></BottomSection>
			</PracticeWrapper>
		</PracticeContainer>
	);
}
