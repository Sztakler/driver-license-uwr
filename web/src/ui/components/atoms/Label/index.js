import React from "react";
import tw from "tailwind-styled-components";

const labelDefaultClasses = "";

const labelPrimaryClasses = "";

const labelLoginClasses =
	"absolute bottom-6 pointer-events-none peer-focus:-top-6";

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

const LabelStyled = tw.label`
  ${(props) => props.login && labelLoginClasses}
	${(props) => assignFontSize(props.size)}
`;

function Label(props) {
	return (
		<LabelStyled htmlFor={props.htmlFor} {...props}>
			{props.children}
		</LabelStyled>
	);
}

export default Label;
