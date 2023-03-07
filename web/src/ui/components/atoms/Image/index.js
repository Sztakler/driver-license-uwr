import React from "react";

const imageDefaultClasses = "";

const imagePrimaryClasses = "h-56 w-auto";

const imageSecondaryClasses =
	"float-left w-36 h-auto m-4 border-2 border-l-0 border-t-0 border-solid border-black rounded-br-3xl p-4";

const imageIconClasses = "absolute w-9 h-auto mr-4 right-0";

function assignMainStyling(primary, secondary, icon) {
	let mainStyling = imageDefaultClasses;

	if (primary) {
		mainStyling = [mainStyling, imagePrimaryClasses].join(" ");
	}
	if (secondary) {
		mainStyling = [mainStyling, imageSecondaryClasses].join(" ");
	}
	if (icon) {
		mainStyling = [mainStyling, imageIconClasses].join(" ");
	}

	return mainStyling;
}

export default function Image({ primary, secondary, icon, src }) {
	let imageStyles = assignMainStyling(primary, secondary, icon);

	return <img className={imageStyles} src={src} />;
}
