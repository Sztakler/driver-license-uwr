import React from "react";
import { useNavigate } from "react-router";

import Label from "client/components/atoms/Label";
import Heading from "client/components/atoms/Heading";
import Input from "client/components/atoms/Input";
import Button from "client/components/atoms/Button";

import {
	SettingsAlign,
	InnerContainer,
	Form,
	HorizontalContainer,
	VerticalContainer,
	InputContainer,
} from "./styles";

export default function Settings() {
	const navigate = useNavigate();

	async function ConfirmChanges(form, formData) {
		return fetch("http://localhost:5000/api/user-settings", {
			method: "POST",
			body: JSON.stringify(formData),
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				return data;
			});
	}

	function ValidateFields(formJson) {
		if (formJson.newPassword !== formJson.confirmedNewPassword) {
			alert("Nowe hasła nie są takie same!");
			return false;
		}
	}

	async function Logout() {
		await fetch("http://localhost:5000/logout", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		});

		navigate("/");
		navigate(0);
	}

	async function handleSubmit(e) {
		e.preventDefault();

		const form = e.target;
		const formData = new FormData(form);
		const formJson = Object.fromEntries(formData.entries());

		if (ValidateFields(formJson) === false) return;

		let result = await ConfirmChanges(form, formJson);
		alert(result.message);

		if (result.sensitiveData) {
			Logout();
		}

		if (result.correct) {
			navigate(0);
		}
	}

	return (
		<SettingsAlign>
			<InnerContainer>
				<Form method="post" onSubmit={handleSubmit}>
					<HorizontalContainer>
						<VerticalContainer>
							<Heading level={5}>Zmień e-mail:</Heading>
							<InputContainer>
								<Label>Nowy e-mail:</Label>
								<Input
									name="userEmail"
									type="email"
									register
									fixedWidth
								></Input>
							</InputContainer>
						</VerticalContainer>
						<VerticalContainer>
							<Heading level={5}>Zmień imię:</Heading>
							<InputContainer>
								<Label>Nowe imię:</Label>
								<Input name="userName" register fixedWidth></Input>
							</InputContainer>
						</VerticalContainer>
					</HorizontalContainer>
					<VerticalContainer>
						<Heading level={5}>Zmień hasło:</Heading>
						<VerticalContainer className="gap-4">
							<InputContainer>
								<Label>Nowe hasło:</Label>
								<Input
									name="newPassword"
									type="password"
									minLength="8"
									register
									fixedWidth
								></Input>
							</InputContainer>
							<InputContainer>
								<Label>Potwierdź nowe hasło:</Label>
								<Input
									name="confirmedNewPassword"
									type="password"
									minLength="8"
									register
									fixedWidth
								></Input>
							</InputContainer>
						</VerticalContainer>
					</VerticalContainer>

					<VerticalContainer>
						<Heading level={5}>Potwierdź zmiany:</Heading>
						<InputContainer>
							<Label>Wprowadź aktualne hasło:</Label>
							<Input
								name="providedPassword"
								type="password"
								required
								register
								fixedWidth
							></Input>
						</InputContainer>
						<Button
							type="submit"
							primary
							hover
							full
							className="h-[42px] self-end max-md:absolute bottom-4 md:mt-4"
						>
							Zapisz zmiany
						</Button>
					</VerticalContainer>
				</Form>
			</InnerContainer>
		</SettingsAlign>
	);
}
