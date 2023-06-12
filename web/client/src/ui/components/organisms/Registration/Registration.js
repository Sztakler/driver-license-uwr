import React from "react";

import {
	RegistrationContainer,
	LeftContainer,
	InfoContainer,
	Title,
	Subtitle,
	ImageContainer,
	ListContainer,
	RightContainer,
	RegisterForm,
	RegisterFormContainer,
	TopInputsContainer,
	BottomInputsContainer,
	SubmitButtonContainer,
	LoginButtonContainer,
	TextGrayedSpan,
	LoginButton,
	InputWrapper,
	TextUnderlineSpan,
	Disclaimer,
	InputLabelText,
} from "./styles";

import Input from "../../atoms/Input";
import Paragraph from "../../atoms/Paragraph";
import Button from "../../atoms/Button";
import BulletList from "../../molecules/BulletList";

import Illustrations from "/src/assets/images/svg/icons/Illustrations";
import Image from "../../atoms/Image";

export default function Registration() {
	const points = [
		"wglądu w Twoje statystyki i analizy",
		"zapisywania wybranych pytań",
		"śledzenia swoich postępów",
	];

	return (
		<RegistrationContainer>
			<LeftContainer>
				<ImageContainer>
					<Image src={Illustrations.RegistrationIllustration}></Image>
				</ImageContainer>
			</LeftContainer>

			<RightContainer>
				<LoginButtonContainer>
					<TextGrayedSpan>Masz już konto? </TextGrayedSpan>
					<LoginButton>Zaloguj się</LoginButton>
				</LoginButtonContainer>
				<RegisterFormContainer>
					<Title>Zarejestruj się</Title>
					<RegisterForm>
						<TopInputsContainer>
							<InputWrapper for="name">
								<InputLabelText>Imię</InputLabelText>
								<Input register id="name" type="text" placeholder="Jan"></Input>
							</InputWrapper>
							<InputWrapper for="login">
								<InputLabelText>Login</InputLabelText>
								<Input
									register
									id="login"
									type="text"
									placeholder="djjanek227"
								></Input>
							</InputWrapper>
						</TopInputsContainer>

						<BottomInputsContainer>
							<InputWrapper for="email">
								<InputLabelText>E-mail</InputLabelText>
								<Input
									register
									id="email"
									type="text"
									placeholder="jan@example.com"
								></Input>
							</InputWrapper>
							<InputWrapper for="password">
								<InputLabelText>Hasło</InputLabelText>
								<Input
									register
									id="password"
									type="password"
									placeholder="••••••••••••••••"
								></Input>
							</InputWrapper>
						</BottomInputsContainer>

						<SubmitButtonContainer>
							<Disclaimer>
								Klikając przycisk Załóż konto, akceptujesz nasz&nbsp;
								<TextUnderlineSpan>Regulamin</TextUnderlineSpan>,&nbsp;
								<TextUnderlineSpan>
									zasady ochrony prywatności&nbsp;
								</TextUnderlineSpan>
								i&nbsp;
								<TextUnderlineSpan>
									zasady dotyczące plików cookie
								</TextUnderlineSpan>
								.
							</Disclaimer>
							<Button primary size="s">
								Załóż konto
							</Button>
						</SubmitButtonContainer>
					</RegisterForm>
				</RegisterFormContainer>
			</RightContainer>
		</RegistrationContainer>
	);
}
