import React, { useState } from "react";

import Label from "../../atoms/Label";
import Input from "../../atoms/Input";
import {
	LoginFormContainer,
	NoAccount,
	InnerWrapper,
	InputSection,
	Heading,
} from "./styles";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router";

export default function LoginForm(props) {
	const [usernameInput, setUsernameInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const navigate = useNavigate();

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
				let res = await respond.json();
				window.sessionStorage.setItem(
					"User",
					JSON.stringify({ id: res.id, name: res.name })
				);
				navigate("/");
			}
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<LoginFormContainer onSubmit={handleSubmit}>
			<input type="submit" className="hidden"></input>
			<NoAccount>
				Nie masz jeszcze konta?{" "}
				<Button
					className="text-black underline font-semibold "
					onClick={() => {
						navigate("/register");
					}}
				>
					Zarejestruj się
				</Button>
			</NoAccount>
			<Heading>Zaloguj się</Heading>
			<InnerWrapper>
				<Label className="text-[19px] font-semibold">E-mail</Label>
				<InputSection>
					<Input
						login
						id="email"
						type="email"
						name="email"
						required
						value={usernameInput}
						onChange={handleUsername}
					/>
				</InputSection>
			</InnerWrapper>
			<InnerWrapper>
				<Label className="text-[19px] font-semibold">Hasło</Label>
				<InputSection>
					<Input
						login
						id="password"
						type="password"
						name="password"
						required
						minLength="8"
						value={passwordInput}
						onChange={handlePassword}
					/>
				</InputSection>
			</InnerWrapper>

			<InnerWrapper>
				<Button primary hover type="submit" className="text-[19px]">
					Zaloguj
				</Button>
			</InnerWrapper>
		</LoginFormContainer>
	);
}
