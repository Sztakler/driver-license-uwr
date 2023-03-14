import React from "react";
import tw from "tailwind-styled-components";

import {
	buttonDefaultClasses,
	buttonPrimaryClasses,
	buttonNavbarClasses,
	buttonUnderscoredClasses,
	buttonBoldClasses,
<<<<<<< HEAD
=======
	buttonActiveClasses,
>>>>>>> 15486e4 (Further updates in FAQ)
	buttonHighlightedClasses,
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

const StyledButton = tw.button`
	${() => buttonDefaultClasses}
  ${(props) => props.primary && buttonPrimaryClasses}
  ${(props) => props.navbar && buttonNavbarClasses}
  ${(props) => props.underscored && buttonUnderscoredClasses}
  ${(props) => props.bold && buttonBoldClasses}
  ${(props) => props.highlighted && buttonHighlightedClasses}
	${(props) => assignFontSize(props.size)}
`;

export default function Button(props) {
	let displayedComponent = <span>Provide text or image path in props</span>;
	if (props.image) {
		displayedComponent = <img className="w-8 h-auto" src={props.image} />;
	} else {
		displayedComponent = <span>{props.children}</span>;
	}

	return <StyledButton {...props}>{displayedComponent}</StyledButton>;
}
