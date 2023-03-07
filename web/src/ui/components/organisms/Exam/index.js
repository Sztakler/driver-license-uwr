import React from "react";
import Image from "../../atoms/Image";

import {
	ExamContainer,
	UpperSection,
	LowerSection,
	Title,
	SubTitle,
} from "./styles";

export default function Exam() {
	return (
		<ExamContainer>
			<UpperSection>
				<SubTitle>JESTESMY PROFESJONALNI SERIO</SubTitle>
				<Title>Tu będzie kiedyś egzamin</Title>
			</UpperSection>
			<LowerSection>
				<Image
					primary
					src={require("../../../../../../src/assets/images/car.png")}
				/>
			</LowerSection>
		</ExamContainer>
	);
}
