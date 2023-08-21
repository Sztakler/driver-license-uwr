import React, { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";

import TaskContext from "../../../../../../../context/TaskContext";
import Star from "../../../../../../../assets/images/svg/icons/Star";

import Text from "../../../../atoms/Text";
import Image from "../../../../atoms/Image";
import Video from "../../../../atoms/Video";
import Button from "../../../../atoms/Button";
import { lowerCaseAll } from "../../../../../../utils/utils";

import { TaskTopSection, TaskInfo, ImageBox } from "./styles";

export default function TaskTop({ isExam, isReview }) {
	const {
		task,
		taskStarted,
		setNewVideoIsPlaying,
		setNewImageIsLoaded,
		favoriteTask,
		setNewFavoriteTask,
	} = useContext(TaskContext);

	const [isHoveringStar, setIsHoveringStar] = useState(false);

	const handleMouseOver = () => {
		setIsHoveringStar(true);
	};

	const handleMouseOut = () => {
		setIsHoveringStar(false);
	};

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
				setNewFavoriteTask((prevState) => {
					return !prevState;
				});
				console.log("Data submitted successfully");
			} else {
				console.error("Error submitting data");
			}
		} catch (error) {
			console.error("Network error:", error);
		}

		return 0;
	}

	function handleVideoPlay() {
		setNewVideoIsPlaying(true);
	}

	function handleVideoEnd() {
		setNewVideoIsPlaying(false);
	}

	function handleImageLoad() {
		setNewImageIsLoaded(true);
	}

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
			{!isExam && (
				<Button
					bubble
					onClick={() => {
						setSavedQuestion(task.id);
					}}
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
					size="l"
					className="absolute top-8 -right-16 max-md:fixed max-md:top-[70px] max-md:left-[2.5%] md:border-2 md:border-[#ABA797]"
				>
					<Star picked={favoriteTask} hovered={isHoveringStar} />
				</Button>
			)}
			<ImageBox>
				{taskStarted || isReview ? (
					mediaExtension === "mp4" ? (
						<Video
							src={task.media}
							autoPlay
							onPlay={handleVideoPlay}
							onEnded={handleVideoEnd}
						></Video>
					) : mediaExtension === "jpg" ? (
						<Image
							exam
							src={task.media}
							onLoad={handleImageLoad}
							className=""
						></Image>
					) : (
						<>
							<Image
								exam
								className="w-full h-auto object-cover"
								src={require("../../../../../../../assets/images/multi.png")}
							/>
							<Text className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-center w-[70%] whitespace-break-spaces text-xl">
								Brak multimediów dla danego pytania
							</Text>
						</>
					)
				) : (
					<>
						<Image
							exam
							className="w-full h-auto object-cover"
							src={require("../../../../../../../assets/images/multi.png")}
						/>
						<Text className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-center w-[70%] whitespace-break-spaces text-xl">
							Naciśnij start aby wyświetlić multimedia
						</Text>
					</>
				)}
			</ImageBox>
		</TaskTopSection>
	);
}
