import React, { useState } from "react";
import { urlToServer } from "client/configure_build";

import Label from "client/components/atoms/Label";
import Input from "client/components/atoms/Input";
import {
	LoginFormContainer,
	NoAccount,
	InnerWrapper,
	InputSection,
	Heading,
} from "./styles";
import Button from "client/components/atoms/Button";
import { useNavigate } from "react-router";
import Text from "client/components/atoms/Text";

export default function LoginForm(props) {
	const [usernameInput, setUsernameInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [message, setMessage] = useState("");
	const navigate = useNavigate();

	function handleUsername(event) {
		setMessage("");
		setUsernameInput(event.target.value);
	}

	function handlePassword(event) {
		setMessage("");
		setPasswordInput(event.target.value);
	}

	async function handleSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const formData = new FormData(form);
		const formJson = Object.fromEntries(formData.entries());

		try {
			const respond = await fetch(`${urlToServer}/login`, {
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
			} else {
				setMessage("Nie istnieje użytkownik z podanym e-mailem lub hasłem!");
			}
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<LoginFormContainer onSubmit={handleSubmit}>
			<input type="submit" className="hidden"></input>

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
				<Button
					primary
					hover
					type="submit"
					className="text-[19px] max-md:w-full"
				>
					Zaloguj
				</Button>
				<Text className="text-[#FF6130] mt-4">{message}</Text>
				<NoAccount>
					Nie masz jeszcze konta?{" "}
					<Button
						className="text-black underline font-semibold underline-offset-2 "
						onClick={() => {
							navigate("/register");
						}}
					>
						Zarejestruj się
					</Button>
				</NoAccount>
			</InnerWrapper>
		</LoginFormContainer>
	);
}
