import React, { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import PracticeContext from "context/PracticeContext";
import { urlToServer } from "client/configure_build";

import Text from "client/components/atoms/Text";
import Button from "client/components/atoms/Button";
import ImageBox from "client/components/molecules/PracticeMolecules/ImageBox";
import Star from "assets/images/svg/icons/Star";
import { lowerCaseAll } from "client/components/../utils/other";

import { TaskTopSection, TaskInfo, InfoWrapper } from "./styles";

export default function TaskTop({ isExam }) {
	const { task, favoriteTask, setNewFavoriteTask } =
		useContext(PracticeContext);

	const [isHoveringStar, setIsHoveringStar] = useState(false);

	const handleMouseOver = () => {
		setIsHoveringStar(true);
	};

	const handleMouseOut = () => {
		setIsHoveringStar(false);
	};

	async function setSavedQuestion(id) {
		try {
			const response = await fetch(`${urlToServer}/api/saved-questions`, {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ question_id: id }),
			});

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

	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

	return (
		<TaskTopSection>
			<InfoWrapper>
				<TaskInfo>
					<Text className="font-light">Wartość punktowa: </Text>
					<Text className="font-normal">{task.liczba_punktow} pkt</Text>
				</TaskInfo>
				<TaskInfo className="whitespace-nowrap overflow-hidden">
					<Text className="font-light">Typ pytania: </Text>
					<Text className="font-normal ">
						{lowerCaseAll(task.zakres_struktury, isDesktop)}
					</Text>
				</TaskInfo>
			</InfoWrapper>
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
			<ImageBox isReview={false} media={task.media} />
		</TaskTopSection>
	);
}
