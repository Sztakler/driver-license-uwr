import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";

import TaskContext from "../../../../../../../context/TaskContext";
import { lowerCaseAll } from "../../../../../../utils/utils";

import Text from "../../../../atoms/Text";
import Image from "../../../../atoms/Image";
import Video from "../../../../atoms/Video";

import { TaskTopSection, TaskInfo, ImageBox } from "./styles";

export default function TaskTopReview() {
	const { task } = useContext(TaskContext);

	const mediaExtension = task.media.includes(".")
		? task.media.split(".").pop()
		: "";

	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
	return (
		<TaskTopSection>
			<TaskInfo>
				<div className="whitespace-nowrap overflow-hidden">
					<Text className="font-light">Wartość punktowa: </Text>
					<Text className="font-normal">{task.liczba_punktow} pkt</Text>
				</div>
				<div className="whitespace-nowrap overflow-hidden">
					<Text className="font-light">Typ pytania: </Text>
					<Text className="font-normal ">
						{lowerCaseAll(task.zakres_struktury, isDesktop)}
					</Text>
				</div>
			</TaskInfo>
			<ImageBox>
				{mediaExtension === "mp4" ? (
					<Video src={task.media} autoPlay></Video>
				) : mediaExtension === "jpg" ? (
					<Image exam src={task.media}></Image>
				) : (
					""
				)}
			</ImageBox>
		</TaskTopSection>
	);
}
