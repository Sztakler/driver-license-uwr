import React, { useContext, useState } from "react";
import { inReviewModeState } from "../../../../../recoil/atoms";
import { useRecoilState } from "recoil";
import TaskContext from "../../../../../context/TaskContext";
import Bubble from "../../../molecules/Bubble";
import Star from "../../../../../icons/Star";
import Text from "../../../atoms/Text";
import Image from "../../../atoms/Image";

import { TaskTopSection, InnerWrapper, TaskInfo, ImageBox } from "./styles";

export default function TaskTop() {
	const [favoriteTask, setFavoriteTask] = useState(false);
	const { task, setTask, taskStarted } = useContext(TaskContext);
	const [inReviewMode] = useRecoilState(inReviewModeState);

	return task ? (
		<TaskTopSection>
			<TaskInfo>
				<Text>Typ pytania: {task.zakres_struktury}</Text>
				<Text>Wartość punktowa: {task.liczba_punktow}</Text>
				<Text>Liczba rozwiązanych zadań: 100</Text>
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
				{taskStarted || inReviewMode ? (
					/* <video>
						<source
							src={require("/src/assets/images/test2.mp4")}
							type="video/mp4"
						></source>
					</video> */
					<Image exam src={task.media} />
				) : (
					<Image exam src={require("/src/assets/images/multi.png")} />
				)}
			</ImageBox>
		</TaskTopSection>
	) : (
		<div>Wczytywanie...</div>
	);
}
