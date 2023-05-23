import React, { useState } from "react";

import Label from "../../atoms/Label";
import Input from "../../atoms/Input";
import {
	LoginFormContainer,
	InnerWrapper,
	InputSection,
	Heading,
} from "./styles";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";

export default function LoginForm(props) {
	const [usernameInput, setUsernameInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");

	function handleUsername(event) {
		setUsernameInput(event.target.value);
	}

	function handlePassword(event) {
		setPasswordInput(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();

		alert(usernameInput + " " + passwordInput);
	}

	return (
		<LoginFormContainer onSubmit={handleSubmit}>
			<Heading>Zaloguj się</Heading>
			<InnerWrapper>
				<Label size="2xl">Login</Label>
				<InputSection>
					<Image icon src={require("/src/assets/images/mail.png")} />
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
					<Image icon src={require("/src/assets/images/lock.png")} />
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
					Zaloguj
				</Button>
			</InnerWrapper>
		</LoginFormContainer>
	);
}
