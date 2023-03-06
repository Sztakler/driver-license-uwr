import React from "react";

const buttonDefaultClasses = "py-2 px-6";

const buttonPrimaryClasses =
	"border-2 border-solid border-gray-500 bg-black text-white rounded-full";

const buttonSecondaryClasses = "";

const buttonHoverClasses = "hover:cursor-pointer hover:bg-[#aeadad]";

function assignMainStyling(primary, secondary, hover) {
	let mainStyling = buttonDefaultClasses;

	if (primary) {
		mainStyling = [mainStyling, buttonPrimaryClasses].join(" ");
	}
	if (secondary) {
		mainStyling = [mainStyling, buttonSecondaryClasses].join(" ");
	}
	if (hover) {
		mainStyling = [mainStyling, buttonHoverClasses].join(" ");
	}

	return mainStyling;
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

export default function Button({ primary, secondary, hover, size, children }) {
	let buttonStyles = assignMainStyling(primary, secondary, hover);
	let fontSize = assignFontSize(size);

	buttonStyles = [buttonStyles, fontSize].join(" ");

	return <button className={buttonStyles}>{children}</button>;
}
