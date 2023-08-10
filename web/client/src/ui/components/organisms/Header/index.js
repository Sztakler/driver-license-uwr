import React from "react";

import {
	HeaderContainer,
	TitleContainer,
	IllustrationContainer,
	Title,
	Subtitle,
	Buttons,
} from "./styles";

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
