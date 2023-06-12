import React from "react";
import tw from "tailwind-styled-components";

import {
	buttonPrimaryClasses,
	buttonBlankClasses,
	buttonHoverClasses,
	buttonNavbarClasses,
	buttonNavbarIconClasses,
	buttonUnderscoredClasses,
	buttonBoldClasses,
	buttonBubbleClasses,
} from "./styles";

function assignButtonSize(size) {
	let fontSize = "";
	let buttonSize = "";

	if (size === "xs") {
		fontSize = "text-[16px]";
		buttonSize = "w-16 h-12";
	}
	if (size === "s") {
		fontSize = "text-[16px]";
		buttonSize = "w-44 h-12";
	}
	if (size === "m") {
		fontSize = "text-[19px]";
		buttonSize = "w-96 h-12";
	}
	if (size === "l") {
		fontSize = "text-[23px]";
		buttonSize = "w-108 h-16";
	}

	return [fontSize, buttonSize];
}

function assignBubbleSize(size) {
	let bubbleSize = "min-h-[24px] min-w-[24px]";

	if (size === "s") {
		bubbleSize = "min-w-[32px] max-w-[32px] min-h-[32px] max-h-[32px]";
	}
	if (size === "m") {
		bubbleSize = "min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px]";
	}
	if (size === "l") {
		bubbleSize = "min-w-[48px] max-w-[48px] min-h-[48px] max-h-[48px]";
	}

	return [bubbleSize];
}

const StyledButton = tw.button`
	${(props) =>
		props.bubble
			? assignBubbleSize(props.size).join(" ")
			: assignButtonSize(props.size).join(" ")}
  ${(props) => props.primary && buttonPrimaryClasses}
	${(props) => props.blank && buttonBlankClasses}
	${(props) => props.hover && buttonHoverClasses}
  ${(props) => props.navbar && buttonNavbarClasses}
  ${(props) => props.navbarIcon && buttonNavbarIconClasses}
  ${(props) => props.underscored && buttonUnderscoredClasses}
	${(props) => props.bubble && buttonBubbleClasses}
  ${(props) => props.bold && buttonBoldClasses}
	${(props) => props.full && "w-full"}
  ${(props) => props.active && "bg-[#FFBC0D]"}
  ${(props) => props.picked && "bg-[#91CE6B]"}
  ${(props) =>
		props.result === "skipped"
			? "bg-[#FBBD1F]"
			: props.result === "correct"
			? "bg-[#91CE6B]"
			: props.result === "incorrect"
			? "bg-[#FF6130]"
			: ""}
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
