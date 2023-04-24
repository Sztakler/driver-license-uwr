import React from "react";
import tw from "tailwind-styled-components";

import {
	buttonDefaultClasses,
	buttonPrimaryClasses,
	buttonSecondaryClasses,
	buttonBlankClasses,
	buttonNavbarClasses,
	buttonUnderscoredClasses,
	buttonBoldClasses,
	buttonHighlightedClasses,
} from "./styles";

function assignButtonSize(size) {
	let fontSize = "text-base";
	let containerPaddings = "";

	if (size === "s"){
		containerPaddings = "py-3 px-3"
	}
	if (size === "m") {
		fontSize = "text-2xl";
		containerPaddings = "p-5";
	}
	if (size === "l") {
		fontSize = "text-3xl";
		containerPaddings = "py-3 px-10"
	}

	return [fontSize, containerPaddings];
}

const StyledButton = tw.button`
  ${(props) => props.primary && buttonPrimaryClasses}
	${(props) => props.secondary && buttonSecondaryClasses}
	${(props) => props.blank && buttonBlankClasses}
  ${(props) => props.navbar && buttonNavbarClasses}
  ${(props) => props.underscored && buttonUnderscoredClasses}
  ${(props) => props.bold && buttonBoldClasses}
	${(props) => props.full && 'w-full'}
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