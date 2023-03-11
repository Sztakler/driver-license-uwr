import React from "react";

const inputDefaultClasses = "block";

const inputPrimaryClasses = "";

const inputLoginClasses =
	"flex flex-auto w-9/12 px-2 py-3 bg-white bg-opacity-0 border-b-2 border-solid border-black peer";

function assignMainStyling(primary, login) {
	let mainStyling = inputDefaultClasses;

	if (primary) {
		mainStyling = [mainStyling, inputPrimaryClasses].join(" ");
	}
	if (login) {
		mainStyling = [mainStyling, inputLoginClasses].join(" ");
	}

	return mainStyling;
}

export default function Input({ type, primary, login }) {
	let inputStyles = assignMainStyling(primary, login);

	if (type === "textarea") {
		return <textarea />;
	}
	if (type === "select") {
		return <select />;
	}
	return <input className={inputStyles} />;
}
