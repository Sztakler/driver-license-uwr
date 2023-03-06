import React from "react";
import PropTypes from "prop-types";

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

function Label({ htmlFor, children, size, primary, secondary }) {
	let labelClasses = "";
	let fontSize = assignFontSize(size);

	labelClasses = [labelClasses, fontSize].join(" ");

	return (
		<label htmlFor={htmlFor} className={labelClasses}>
			{children}
		</label>
	);
}

export default Label;
