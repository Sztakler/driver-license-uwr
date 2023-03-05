import React from "react";
import PropTypes from "prop-types";

function Label({ htmlFor, children = "default", size = "m" }) {
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

	const labelClasses = fontSize;

	return (
		<label htmlFor={htmlFor} className={labelClasses}>
			{children}
		</label>
	);
}

Label.propTypes = {
	children: PropTypes.string,
	size: PropTypes.oneOf(["s", "m", "l", "xl", "2xl"]),
};

export default Label;
