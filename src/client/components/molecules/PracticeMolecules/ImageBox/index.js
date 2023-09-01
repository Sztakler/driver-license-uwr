import React, { useContext } from "react";
import PracticeContext from "context/PracticeContext";

import Image from "client/components/atoms/Image";
import Video from "client/components/atoms/Video";
import Text from "client/components/atoms/Text";
import { getMediaExtension } from "client/utils/other";

import { ImageContainer } from "./styles";

// Universal ImageBox for tasks media
export default function ImageBox({ isReview, media, savedQuestionsView }) {
	const { taskStarted, setNewVideoIsPlaying, setNewImageIsLoaded } =
		useContext(PracticeContext);

	function handleVideoPlay() {
		setNewVideoIsPlaying(true);
	}

	function handleVideoEnd() {
		setNewVideoIsPlaying(false);
	}

	function handleImageLoad() {
		setNewImageIsLoaded(true);
	}

	function whatImageToShow() {
		if (media === "") {
			return (
				<>
					<Image
						exam
						className="w-full h-full object-cover"
						src={require("assets/images/multi.png")}
					/>
					<Text className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-center w-[70%] whitespace-break-spaces text-xl">
						Brak multimediów dla danego pytania
					</Text>
				</>
			);
		}

		if (taskStarted || isReview) {
			return getMediaExtension(media) === "mp4" ? (
				<Video
					src={media}
					className="h-full w-full object-cover"
					autoPlay
					controls={savedQuestionsView || isReview}
					onPlay={!savedQuestionsView ? handleVideoPlay : null}
					onEnded={!savedQuestionsView ? handleVideoEnd : null}
				></Video>
			) : (
				<Image
					exam
					className="h-full w-full object-cover"
					src={media}
					onLoad={!savedQuestionsView ? handleImageLoad : null}
				></Image>
			);
		}

		return (
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
		);
	}

	return (
		<ImageContainer savedQuestionsView={savedQuestionsView}>
			{whatImageToShow()}
		</ImageContainer>
	);
}
