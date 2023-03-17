import React from "react";
import tw from "tailwind-styled-components";

import {
	buttonDefaultClasses,
	buttonPrimaryClasses,
	buttonNavbarClasses,
	buttonUnderscoredClasses,
	buttonBoldClasses,
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 15486e4 (Further updates in FAQ)
  ${(props) => props.active && buttonActiveClasses}
>>>>>>> 93eed15 (Further updates in FAQ)
=======
=======
  ${(props) => props.active && buttonActiveClasses}
>>>>>>> 127b4ce16344e9afd89937069f2d74f8a6d0fd56
>>>>>>> 9d18498f437c16fe60787f811f66ac6673e322db
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
