import React from "react";
import tw from "tailwind-styled-components";

const buttonPrimaryClasses =
	"border-2 border-solid border-gray-500 bg-black text-white rounded-full";

const buttonNavbarClasses = "block";

const buttonHoverClasses = "hover:cursor-pointer";

const buttonHighlightedClasses = "bg-pink-500 rounded-half";

const ButtonStyled = tw.button`
	py-3
	px-5
  ${(props) => props.primary && buttonPrimaryClasses}
  ${(props) => props.navbar && buttonNavbarClasses}
  ${(props) => props.hover && buttonHoverClasses}
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

	return <ButtonStyled {...props}>{displayedComponent}</ButtonStyled>;
}

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
