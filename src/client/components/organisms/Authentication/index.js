import React from "react";
import LoginForm from "client/components/molecules/LoginForm";

import { AuthenticationContainer } from "./styles";

export default function Authentication() {
	return (
		<AuthenticationContainer>
			<LoginForm />
		</AuthenticationContainer>
	);
}
