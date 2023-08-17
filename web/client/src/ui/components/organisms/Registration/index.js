import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import {
	RegistrationContainer,
	Title,
	FormContainer,
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

	const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

	if (isDesktop) {
		return (
			<RegistrationContainer style={isDesktop ? { backgroundImage: `url(${RegisterPageIllustrations.Image1_Desktop})` } : ""} >
				<FormContainer>
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
									className="text-[16px] w-full"
								>
									Załóż konto
								</Button>
							</SubmitButtonContainer>
						</RegisterForm>
					</RegisterFormContainer>
				</FormContainer>
			</RegistrationContainer>
		);
	} else {
		return (
			<div className="h-[calc(100vh-145px)] flex flex-col p-8">
				<RegisterFormContainer>
					<Title className="text-[26px] font-medium pt-0">Zarejestruj się</Title>
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
								className="text-[16px] font-medium w-full px-[50px] py-[13px] max-md:px-[50px] max-md:py-[13px]"
							>
								Załóż konto
							</Button>
							<LoginButton
								className="pt-2"
								onClick={() => {
									navigate("/login");
								}}
							>
								<TextGrayedSpan className="text-[16px]">Masz już konto?</TextGrayedSpan>
							</LoginButton>
						</SubmitButtonContainer>

					</RegisterForm>
				</RegisterFormContainer>
			</div>

		);
	}
}
