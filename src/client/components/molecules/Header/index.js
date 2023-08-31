import React from "react";

import Subtitle from "client/components/atoms/Subtitle";

import {
	HeaderContainer,
	TitleContainer,
	IllustrationContainer,
	Title,
	Buttons,
} from "./styles";

export default function Header({
	title,
	subtitle,
	desktopBgImage,
	mobileBgImage,
	children,
}) {
	return (
		<HeaderContainer mobileBgImage={mobileBgImage}>
			<TitleContainer>
				<Title>{title}</Title>
				<Subtitle>{subtitle}</Subtitle>
			</TitleContainer>
			<IllustrationContainer desktopBgImage={desktopBgImage} />
			<Buttons>{children}</Buttons>
		</HeaderContainer>
	);
}
