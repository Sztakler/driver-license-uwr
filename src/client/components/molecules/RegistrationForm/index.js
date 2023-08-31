import React, { useState } from "react";
import { urlToServer } from "client/configure_build";

import Input from "client/components/atoms/Input";
import Button from "client/components/atoms/Button";
import Text from "client/components/atoms/Text";

import {
	RegisterFormContainer,
	RegisterForm,
	InputsContainer,
	InputWrapper,
	InputLabelText,
	SubmitButtonContainer,
	TextUnderlineSpan,
	Disclaimer,
} from "./styles";

import { useNavigate } from "react-router";

export default function RegistrationForm() {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	// Name change
	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	// Email change
	const handleMailChange = (event) => {
		setMail(event.target.value);
		setMessage("");
	};

	// Password change
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	// Communication with server - POST request with data set by user in form
	let registerUser = async (e) => {
		e.preventDefault();
		try {
			let res = await fetch(`${urlToServer}//register`, {
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
				setMessage("Użytkownik o podanym adresie e-mail już istnieje!");
			}

			if (res.ok) {
				navigate("/login");
			} else {
				navigate("/register");
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<RegisterFormContainer>
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
						<Text className="text-[#FF6130]">{message}</Text>
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
				</InputsContainer>
				<Disclaimer onClick={() => {}}>
					Klikając przycisk Załóż konto, akceptujesz nasz&nbsp;
					<TextUnderlineSpan>Regulamin</TextUnderlineSpan>,&nbsp;
					<TextUnderlineSpan>
						zasady ochrony prywatności&nbsp;
					</TextUnderlineSpan>
					i&nbsp;
					<TextUnderlineSpan>zasady dotyczące plików cookie</TextUnderlineSpan>.
				</Disclaimer>
				<SubmitButtonContainer>
					<Button
						primary
						hover
						type="submit"
						className="font-medium w-full px-[50px] py-[13px] h-[50px]"
					>
						<Text>Załóż konto</Text>
					</Button>
				</SubmitButtonContainer>
			</RegisterForm>
		</RegisterFormContainer>
	);
}
