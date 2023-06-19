import React, { useContext, useState } from "react";
// import { inReviewModeState } from "../../../../../recoil/atoms";
import { useRecoilState } from "recoil";
import TaskContext from "../../../../../context/TaskContext";
import Star from "../../../../../icons/Star";
import Text from "../../../atoms/Text";
import Image from "../../../atoms/Image";
import Video from "../../../atoms/Video";

import { TaskTopSection, InnerWrapper, TaskInfo, ImageBox } from "./styles";
import Button from "../../../atoms/Button";

export default function TaskTop({isReview}) {
	const [favoriteTask, setFavoriteTask] = useState(false);
	const { task, setTask, taskStarted } = useContext(TaskContext);
	// const [inReviewMode] = useRecoilState(inReviewModeState);

	const mediaExtension = task.media.includes(".")
		? task.media.split(".").pop()
		: "";

	return (
		<TaskTopSection>
			<TaskInfo>
				<div>
					<Text className="font-light">Typ pytania: </Text>
					<Text className="font-normal">{task.zakres_struktury}</Text>
				</div>
				<div>
					<Text className="font-light">Wartość punktowa: </Text>
					<Text className="font-normal">{task.liczba_punktow} pkt</Text>
				</div>
				<div>
					<Text className="font-light">Liczba rozwiązanych zadań: </Text>
					<Text className="font-normal">100</Text>
				</div>
			</TaskInfo>
			<Button
				bubble
				onClick={() => {
					setFavoriteTask((prevState) => {
						return !prevState;
					});
				}}
				size="l"
				className="absolute top-4 -right-16"
			>
				<Star picked={favoriteTask} />
			</Button>
			<ImageBox>
				{console.log(task)}
				{taskStarted || isReview ? (
					mediaExtension === "mp4" ? (
						<Video src={task.media} autoPlay></Video>
					) : mediaExtension === "jpg" ? (
						<Image exam src={task.media}></Image>
					) : (
						""
					)
				) : (
					<Image exam src={require("/src/assets/images/multi.png")} />
				)}
			</ImageBox>
		</TaskTopSection>
	);
}
