import React from "react";

import {
	HeaderContainer,
	TitleContainer,
	IllustrationContainer,
	Title,
	Buttons,
} from "./styles";
import Subtitle from "client/components/atoms/Subtitle";

export default function Header({ title, subtitle, illustration, children }) {
	return (
		<HeaderContainer>
			<TitleContainer>
				<Title>{title}</Title>
				<Subtitle>{subtitle}</Subtitle>
			</TitleContainer>
			<IllustrationContainer />
			<Buttons>{children}</Buttons>
		</HeaderContainer>
	);
}
