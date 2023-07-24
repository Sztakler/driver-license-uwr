import React, { useContext, useEffect, useState } from "react";

import TaskContext from "../../../../../../context/TaskContext";
import Star from "../../../../../../icons/Star";
import Text from "../../../../atoms/Text";
import Image from "../../../../atoms/Image";
import Video from "../../../../atoms/Video";
import Button from "../../../../atoms/Button";

import { TaskTopSection, TaskInfo, ImageBox } from "./styles";

export default function TaskTop({ isReview }) {
	const [favoriteTask, setFavoriteTask] = useState(false);
	const { task, taskStarted } = useContext(TaskContext);

	const mediaExtension = task.media.includes(".")
		? task.media.split(".").pop()
		: "";

	async function setSavedQuestion(id) {
		try {
			const response = await fetch(
				"http://localhost:5000/api/saved-questions",
				{
					method: "POST",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ question_id: id }),
				}
			);

			if (response.ok) {
				console.log("Data submitted successfully");
			} else {
				console.error("Error submitting data");
			}
		} catch (error) {
			console.error("Network error:", error);
		}

		return 0;
	}

	console.log("task", task);

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
					setSavedQuestion(task.id);
				}}
				size="l"
				className="absolute top-4 -right-16"
			>
				<Star picked={task.is_saved} />
			</Button>
			<ImageBox>
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
