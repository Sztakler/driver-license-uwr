import React from "react";
import Separator from "../../atoms/Separator";
import LoginForm from "../../molecules/LoginForm";
import NewUser from "../../molecules/NewUser";

import { AuthenticationContainer } from "./styles";

export default function Authentication() {
	return (
		<AuthenticationContainer>
			<LoginForm />
		</AuthenticationContainer>
	);
}
