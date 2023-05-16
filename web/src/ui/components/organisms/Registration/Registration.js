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

import Illustrations from "../../../../../../src/assets/images/svg/icons/Illustrations";
import Image from "../../atoms/Image";

export default function Registration() {

	const points = [
		"wglądu w Twoje statystyki i analizy",
		"zapisywania wybranych pytań",
		"śledzenia swoich postępów"
	]

	return (
		<RegistrationContainer>
			<LeftContainer>
				<InfoContainer>
					<Title>Załóż darmowe konto</Title>
					<ListContainer>
						<Subtitle>Zyskasz możliwości:</Subtitle>
						<BulletList points={points} bullet="•" />
					</ListContainer>
				</InfoContainer>
				<ImageContainer>
					<Image src={Illustrations.RegistrationIllustration}></Image>
				</ImageContainer>
			</LeftContainer>

			<RightContainer>
				<LoginButtonContainer>
					<TextGrayedSpan>Masz już konto?</TextGrayedSpan>
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
								<Input register id="login" type="text" placeholder="djjanek227"></Input>
							</InputWrapper>
						</TopInputsContainer>

						<BottomInputsContainer>
							<InputWrapper for="email">
								<InputLabelText>E-mail</InputLabelText>
								<Input register id="email" type="text" placeholder="jan@example.com"></Input>
							</InputWrapper>
							<InputWrapper for="password">
								<InputLabelText>Hasło</InputLabelText>
								<Input register id="password" type="password" placeholder="••••••••••••••••"></Input>
							</InputWrapper>
						</BottomInputsContainer>

						<SubmitButtonContainer>
							<Disclaimer>Klikając przycisk Załóż konto, akceptujesz nasz <TextUnderlineSpan>Regulamin</TextUnderlineSpan>, <TextUnderlineSpan>Zasady ochrony prywatności</TextUnderlineSpan> i <TextUnderlineSpan>Zasady dotyczące plików cookie</TextUnderlineSpan>.</Disclaimer>
							<Button submit className="bg-[#ffd363] text-base font-semibold text-[#0d0d0d] border border-[#0d0d0d] rounded-[18px]">Załóż konto</Button>
						</SubmitButtonContainer>
					</RegisterForm>
				</RegisterFormContainer>
			</RightContainer>
		</RegistrationContainer>
	);
}
