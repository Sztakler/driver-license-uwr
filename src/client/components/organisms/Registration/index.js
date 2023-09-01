import React from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router";

import RegistrationForm from "client/components/molecules/RegistrationForm";

import {
	RegistrationContainer,
	Title,
	FormContainer,
	LoginButtonContainer,
	TextGrayedSpan,
	LoginButton,
} from "./styles";

export default function Registration() {
	const navigate = useNavigate();

	const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

	return (
		<RegistrationContainer>
			<FormContainer>
				<Title>Zarejestruj się</Title>
				<RegistrationForm />
				<LoginButtonContainer>
					{isDesktop ? (
						<>
							<TextGrayedSpan>Masz już konto? </TextGrayedSpan>
							<LoginButton
								onClick={() => {
									navigate("/login");
								}}
							>
								Zaloguj się
							</LoginButton>{" "}
						</>
					) : (
						<LoginButton
							onClick={() => {
								navigate("/login");
							}}
						>
							<TextGrayedSpan>Masz już konto? </TextGrayedSpan>{" "}
						</LoginButton>
					)}
				</LoginButtonContainer>
			</FormContainer>
		</RegistrationContainer>
	);
}
