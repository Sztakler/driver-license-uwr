import React from "react";

import Label from "../../atoms/Label";
import Input from "../../atoms/Input";
import {
	LoginFormContainer,
	InnerWrapper,
	LabelSection,
	InputSection,
	Heading,
} from "./styles";
import Image from "../../atoms/Image";

export default function LoginForm(props) {
	return (
		<LoginFormContainer>
			<Heading>Zaloguj się</Heading>
			<InnerWrapper>
				<InputSection>
					<Image
						icon
						src={require("../../../../../../src/assets/images/mail.png")}
					/>
					<Input login />
					<Label login size="2xl">
						Login
					</Label>
				</InputSection>
			</InnerWrapper>
			<InnerWrapper>
				<InputSection>
					<Image
						icon
						src={require("../../../../../../src/assets/images/lock.png")}
					/>
					<Input login type="password" />
					<Label login size="2xl">
						Hasło
					</Label>
				</InputSection>
			</InnerWrapper>
		</LoginFormContainer>
	);
}
