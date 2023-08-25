import React, { useContext, useEffect } from "react";
import TaskContext from "context/TaskContext";

import Image from "client/components/atoms/Image";
import Video from "client/components/atoms/Video";
import Text from "client/components/atoms/Text";
import { getMediaExtension } from "client/utils/other";

import { ImageContainer } from "./styles";

export default function ImageBox({ isReview, media }) {
	const { task, taskStarted, setNewVideoIsPlaying, setNewImageIsLoaded } =
		useContext(TaskContext);

	function handleVideoPlay() {
		setNewVideoIsPlaying(true);
	}

	function handleVideoEnd() {
		setNewVideoIsPlaying(false);
	}

	function handleImageLoad() {
		setNewImageIsLoaded(true);
	}

	useEffect(() => {
		setNewVideoIsPlaying(false);
		setNewImageIsLoaded(false);
	}, [task]);

	return (
		<ImageContainer>
			{taskStarted || isReview ? (
				getMediaExtension(media) === "mp4" ? (
					<Video
						src={task.media}
						autoPlay
						onPlay={handleVideoPlay}
						onEnded={handleVideoEnd}
					></Video>
				) : getMediaExtension(media) === "jpg" ? (
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
							src={require("assets/images/multi.png")}
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
						src={require("assets/images/multi.png")}
					/>
					<Text className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-center w-[70%] whitespace-break-spaces text-xl">
						Naciśnij start aby wyświetlić multimedia
					</Text>
				</>
			)}
		</ImageContainer>
	);
}
