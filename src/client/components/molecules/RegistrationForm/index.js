import React, { useState } from "react";

import Label from "client/components/atoms/Label";
import Input from "client/components/atoms/Input";
import {
	LoginFormContainer,
	InnerWrapper,
	InputSection,
	Heading,
} from "./styles";
import Image from "client/components/atoms/Image";
import Button from "client/components/atoms/Button";

export default function RegistrationForm(props) {
	const [usernameInput, setUsernameInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [emailInput, setEmailInput] = useState("");

	function handleUsername(event) {
		setUsernameInput(event.target.value);
	}

	function handlePassword(event) {
		setPasswordInput(event.target.value);
	}

	function handleEmail(event) {
		setEmailInput(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		alert("[Registration] not implemented");
	}

	return (
		<LoginFormContainer onSubmit={handleSubmit}>
			<Heading>Zarejestruj się</Heading>
			<InnerWrapper>
				<Label size="2xl">E-mail</Label>
				<InputSection>
					<Image icon src={require("assets/images/mail.png")} />
					<Input
						login
						id="emailInput"
						type="email"
						value={emailInput}
						onChange={handleEmail}
						placeholder="example@mail.com"
					/>
				</InputSection>
			</InnerWrapper>
			<InnerWrapper>
				<Label size="2xl">Login</Label>
				<InputSection>
					<Image icon src={require("assets/images/mail.png")} />
					<Input
						login
						id="usernameInput"
						type="text"
						value={usernameInput}
						onChange={handleUsername}
						placeholder="Username"
					/>
				</InputSection>
			</InnerWrapper>
			<InnerWrapper>
				<Label size="2xl">Hasło</Label>
				<InputSection>
					<Image icon src={require("assets/images/lock.png")} />
					<Input
						login
						id="passwordInput"
						type="password"
						value={passwordInput}
						onChange={handlePassword}
						placeholder="******************"
					/>
				</InputSection>
			</InnerWrapper>

			<InnerWrapper>
				<Button type="submit" className="bg-orange-600 text-white text-xl">
					Zarejestruj
				</Button>
			</InnerWrapper>
		</LoginFormContainer>
	);
}
