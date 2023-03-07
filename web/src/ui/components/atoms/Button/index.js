import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const buttonDefaultClasses = "py-2 px-6";

const buttonPrimaryClasses =
	"border-2 border-solid border-gray-500 bg-black text-white rounded-full";

const buttonNavbarClasses =
	"py-3 px-6 rounded-half border border-solid border-black bg-white hover:bg-gray-200";

const buttonHoverClasses = "hover:cursor-pointer hover:bg-[#aeadad]";

export default function Button({
	primary,
	navbar,
	hover,
	size,
	children,
	navigationTarget,
	image,
}) {
	const navigate = useNavigate();

	let buttonStyles = assignMainStyling(primary, navbar, hover);
	let fontSize = assignFontSize(size);

	buttonStyles = [buttonStyles, fontSize].join(" ");

	let displayedComponent = <span>Provide text or image path in props</span>;
	if (image) {
		displayedComponent = <img className="w-10 h-auto" src={image} />;
	} else {
		displayedComponent = <span>{children}</span>;
	}
	return (
		<button
			className={buttonStyles}
			onClick={() =>
				navigationTarget !== "" ? navigate(navigationTarget) : null
			}
		>
			{displayedComponent}
		</button>
	);
}

function assignMainStyling(primary, navbar, hover) {
	let mainStyling = buttonDefaultClasses;

	if (primary) {
		mainStyling = [mainStyling, buttonPrimaryClasses].join(" ");
	}
	if (navbar) {
		mainStyling = [mainStyling, buttonNavbarClasses].join(" ");
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
