import React from "react";
import tw from "tailwind-styled-components";

import {
	labelDefaultClasses,
	labelPrimaryClasses,
	labelLoginClasses,
} from "./styles";

function assignFontSize(size) {
	let fontSize = "text-base";

	if (size === "s") {
		fontSize = "text-sm";
	}
	if (size === "m") {
		fontSize = "text-base";
	}
	if (size === "l") {
		fontSize = "text-lg";
	}
	if (size === "xl") {
		fontSize = "text-xl";
	}
	if (size === "2xl") {
		fontSize = "text-2xl";
	}

	return fontSize;
}

const StyledLabel = tw.label`
	${() => labelDefaultClasses}
	${(props) => props.primary && labelPrimaryClasses}
  ${(props) => props.login && labelLoginClasses}
	${(props) => assignFontSize(props.size)}
`;

function Label(props) {
	return (
		<StyledLabel htmlFor={props.htmlFor} {...props}>
			{props.children}
		</StyledLabel>
	);
}

export default Label;
