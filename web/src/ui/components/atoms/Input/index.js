import React from "react";

const inputDefaultClasses = "block";

const inputPrimaryClasses =
	"w-full px-2 py-3 border-2 border-solid border-black text-x";

const inputSecondaryClasses = "";

function assignMainStyling(primary, secondary) {
	let mainStyling = inputDefaultClasses;

	if (primary) {
		mainStyling = [mainStyling, inputPrimaryClasses].join(" ");
	}
	if (secondary) {
		mainStyling = [mainStyling, inputSecondaryClasses].join(" ");
	}

	return mainStyling;
}

export default function Input({ type, primary, secondary }) {
	let inputStyles = assignMainStyling(primary, secondary);

	if (type === "textarea") {
		return <textarea></textarea>;
	}
	if (type === "select") {
		return <select></select>;
	}
	return <input className={inputStyles}></input>;
}
