import React from "react";
import tw from "tailwind-styled-components";

import {
	inputDefaultClasses,
	inputPrimaryClasses,
	inputLoginClasses,
	inputRadioClasses
} from "./styles";

const StyledInput = tw.input`
	${() => inputDefaultClasses}
	${(props) => props.primary && inputPrimaryClasses}
	${(props) => props.login && inputLoginClasses}
	${(props) => props.type == "radio" && inputRadioClasses}
`;

const StyledTextarea = tw.textarea``;

const StyledSelect = tw.select``;

export default function Input(props) {
	if (props.type === "textarea") {
		return <StyledTextarea {...props} />;
	}
	if (props.type === "select") {
		return <StyledSelect {...props} />;
	}
	return <StyledInput {...props} />;
}
