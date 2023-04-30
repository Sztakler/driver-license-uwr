import React from "react";
import tw from "tailwind-styled-components";

import {
	buttonDefaultClasses,
	buttonPrimaryClasses,
	buttonSecondaryClasses,
	buttonBlankClasses,
	buttonNavbarClasses,
	buttonUnderscoredClasses,
	buttonActiveClasses,
	buttonBoldClasses,
} from "./styles";

function assignButtonSize(size) {
	let fontSize = "text-base";
	let containerPaddings = "px-4 py-3";

	if (size === "s") {
		containerPaddings = "px-3 py-2";
	}
	if (size === "m") {
		fontSize = "text-xl";
		containerPaddings = "px-4 py-3";
	}
	if (size === "l") {
		fontSize = "text-2xl";
		containerPaddings = "px-5 py-4";
	}

	return [fontSize, containerPaddings];
}

const StyledButton = tw.button`
  ${(props) => props.primary && buttonPrimaryClasses}
	${(props) => props.secondary && buttonSecondaryClasses}
	${(props) => props.blank && buttonBlankClasses}
  ${(props) => props.navbar && buttonNavbarClasses}
  ${(props) => props.underscored && buttonUnderscoredClasses}
  ${(props) => props.active && buttonActiveClasses}
  ${(props) => props.bold && buttonBoldClasses}
	${(props) => props.full && "w-full"}
	${(props) => assignButtonSize(props.size).join(" ")}
`;

export default function Button(props) {
	let displayedComponent = <span>Provide text or image path in props</span>;
	if (props.image) {
		displayedComponent = <img className="w-8 h-auto" src={props.image} />;
	} else {
		displayedComponent = props.children;
	}

	return <StyledButton {...props}>{displayedComponent}</StyledButton>;
}
