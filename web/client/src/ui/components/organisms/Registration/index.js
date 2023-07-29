import React, { useState } from "react";

import {
	RegistrationContainer,
	LeftContainer,
	Title,
	ImageContainer,
	RightContainer,
	RegisterForm,
	RegisterFormContainer,
	InputsContainer,
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
import Button from "../../atoms/Button";

import Illustrations from "/src/assets/images/svg/icons/Illustrations";
import Image from "../../atoms/Image";
import { useNavigate } from "react-router";
import Text from "../../atoms/Text";

export default function Registration() {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");
	const [userAlreadyExistsAlert, setUserAlreadyExistsAlert] = useState(false);

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleMailChange = (event) => {
		setMail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	let registerUser = async (e) => {
		e.preventDefault();
		console.log(mail, password);
		try {
			let res = await fetch("http://localhost:5000/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: name,
					email: mail,
					password: password,
				}),
			});
			if (res.status === 400) {
				setUserAlreadyExistsAlert(true);
			}

			if (res.ok) {
				navigate("/login");
			} else {
				navigate("/register");
			}
		} catch (err) {
			console.log("ERROR");
		}
	};

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
					<LoginButton
						onClick={() => {
							navigate("/login");
						}}
					>
						Zaloguj się
					</LoginButton>
				</LoginButtonContainer>
				<RegisterFormContainer>
					<Title>Zarejestruj się</Title>
					<RegisterForm onSubmit={registerUser}>
						<InputsContainer>
							<InputWrapper for="name">
								<InputLabelText>Imię</InputLabelText>
								<Input
									register
									id="name"
									type="text"
									value={name}
									onChange={handleNameChange}
								></Input>
							</InputWrapper>
							<InputWrapper for="email">
								<InputLabelText>E-mail</InputLabelText>
								<Input
									register
									required
									id="email"
									type="email"
									value={mail}
									onChange={handleMailChange}
								></Input>
							</InputWrapper>
							<InputWrapper for="password">
								<InputLabelText>Hasło</InputLabelText>
								<Input
									register
									required
									id="password"
									type="password"
									placeholder="min. 8 liter"
									value={password}
									onChange={handlePasswordChange}
								></Input>
							</InputWrapper>
							{userAlreadyExistsAlert && (
								<Text className="text-red-600">
									Użytkownik o podanym mailu już istnieje!
								</Text>
							)}
						</InputsContainer>

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
							<Button primary size="s" type="submit" className="w-[80%]">
								Załóż konto
							</Button>
						</SubmitButtonContainer>
					</RegisterForm>
				</RegisterFormContainer>
			</RightContainer>
		</RegistrationContainer>
	);
}
