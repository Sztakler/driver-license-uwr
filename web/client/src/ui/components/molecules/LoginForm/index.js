import React, { useContext, useState } from "react";
import { AuthenticationContext } from "../../../../context/AuthenticationContext";

import Label from "../../atoms/Label";
import Input from "../../atoms/Input";
import Text from "../../atoms/Text";
import {
	LoginFormContainer,
	InnerWrapper,
	InputSection,
	Heading,
} from "./styles";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router";

export default function LoginForm(props) {
	const [usernameInput, setUsernameInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [test, setTest] = useState("TEST");
	let navigate = useNavigate();

	function handleUsername(event) {
		setUsernameInput(event.target.value);
	}

	function handlePassword(event) {
		setPasswordInput(event.target.value);
	}

	async function handleSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const formData = new FormData(form);
		const formJson = Object.fromEntries(formData.entries());
		console.log(formJson);
		try {
			const respond = await fetch("http://localhost:5000/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include", // this is needed for browser to set the cookie it receives
				body: JSON.stringify(formJson),
			});
			if (respond.status === 200) {
				setTest("POPRAWNE");
				let res = await respond.json();
				window.sessionStorage.setItem(
					"User",
					JSON.stringify({ id: res.id, name: res.name })
				);
				console.log(window.sessionStorage.getItem("User"));
				navigate("/");
			}
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<LoginFormContainer onSubmit={handleSubmit}>
			<Heading>Zaloguj się</Heading>
			<Text>{test}</Text>
			<InnerWrapper>
				<Label size="2xl">Login</Label>
				<InputSection>
					<Image icon src={require("/src/assets/images/mail.png")} />
					<Input
						login
						id="email"
						type="email"
						name="email"
						required
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
						id="password"
						type="password"
						name="password"
						required
						minLength="8"
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
