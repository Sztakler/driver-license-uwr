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

import RegisterPageIllustrations from "../../../../assets/images/svg/RegisterPage/RegisterPageIllustrations";
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
					<Image
						className="w-full h-full max-w-full block"
						src={RegisterPageIllustrations.Image1}
					></Image>
				</ImageContainer>
				<div className="flex flex-col absolute top-[21%] left-[30%] translate-x-1/2 -translate-y-1/2 w-[26%] gap-4 max-md:gap-2 max-sm:gap-0">
					<Text className="font-display text-[64px] leading-none w-[500px] whitespace-normal">
						Załóż darmowe konto
					</Text>
				</div>
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
							<Button
								primary
								hover
								type="submit"
								className="text-[19px] w-full"
							>
								Załóż konto
							</Button>
						</SubmitButtonContainer>
					</RegisterForm>
				</RegisterFormContainer>
			</RightContainer>
		</RegistrationContainer>
	);
}
