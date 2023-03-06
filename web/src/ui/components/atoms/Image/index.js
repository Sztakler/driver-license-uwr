import React from "react";

const imageDefaultClasses = "";

const imagePrimaryClasses = "";

const imageSecondaryClasses =
	"float-left w-36 h-auto m-4 border-2 border-l-0 border-t-0 border-solid border-black rounded-br-3xl p-4";

function assignMainStyling(primary, secondary) {
	let mainStyling = imageDefaultClasses;

	if (primary) {
		mainStyling = [mainStyling, imagePrimaryClasses].join(" ");
	}
	if (secondary) {
		mainStyling = [mainStyling, imageSecondaryClasses].join(" ");
	}

	return mainStyling;
}

export default function Image({ primary, secondary, src }) {
	let imageStyles = assignMainStyling(primary, secondary);

	return <img className={imageStyles} src={src} />;
}
