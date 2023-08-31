import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import PracticeContext from "context/PracticeContext";

import Text from "client/components/atoms/Text";
import ImageBox from "client/components/molecules/PracticeMolecules/ImageBox";
import { lowerCaseAll } from "client/components/../utils/other";

import { TaskTopSection, TaskInfo, InfoWrapper } from "./styles";

export default function TaskTopReview() {
	const { task } = useContext(PracticeContext);

	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
	return (
		<TaskTopSection>
			<InfoWrapper>
				<TaskInfo>
					<Text className="font-light">Wartość punktowa: </Text>
					<Text className="font-normal">{task.points} pkt</Text>
				</TaskInfo>
				<TaskInfo>
					<Text className="font-light">Typ pytania: </Text>
					<Text className="font-normal ">
						{lowerCaseAll(task.structure_scope, isDesktop)}
					</Text>
				</TaskInfo>
			</InfoWrapper>
			<ImageBox isReview={true} media={task.media} />
		</TaskTopSection>
	);
}
