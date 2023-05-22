import React from "react";
import Image from "../../atoms/Image";

import {
	ContactContainer,
	UpperSection,
	LowerSection,
	Title,
	SubTitle,
} from "./styles";

export default function Contact() {
	return (
		<ContactContainer>
			<UpperSection>
				<SubTitle>JESTESMY PROFESJONALNI SERIO</SubTitle>
				<Title>Tu będzie kiedyś kontakt</Title>
			</UpperSection>
			<LowerSection>
				<Image primary src={require("/src/assets/images/car.png")} />
			</LowerSection>
		</ContactContainer>
	);
}
