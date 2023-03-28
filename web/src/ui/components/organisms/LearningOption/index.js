import React from "react";
import { useLocation } from "react-router";
import { LearningOptionContainer } from "./styles";

export default function LearningOption() {
	const location = useLocation();

	return (
		
	<LearningOptionContainer>Opcja{console.log(location.state)}</LearningOptionContainer>
	)
}
