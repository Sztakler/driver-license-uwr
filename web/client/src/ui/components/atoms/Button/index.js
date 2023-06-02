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
  ${(props) => props.active && "bg-[#FFD363]"}
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
