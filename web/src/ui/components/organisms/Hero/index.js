import React from "react";
import Image from "../../atoms/Image";

import {
	HeroContainer,
	UpperSection,
	LowerSection,
	Title,
	SubTitle,
} from "./styles";

export default function Hero() {
	return (
		<HeroContainer>
			<UpperSection>
				<SubTitle>JESTESMY PROFESJONALNI SERIO</SubTitle>
				<Title>Egzaminy na prawko</Title>
			</UpperSection>
			<LowerSection>
				<Image
					primary
					src={require("../../../../../../src/assets/images/car.png")}
				/>
			</LowerSection>
		</HeroContainer>
	);
}
