import React from "react";

const separatorDefaultClasses = "self-center bg-[#a5a5a5]";

const separatorHorizontalClasses = "w-[98%] h-1";

const separatorVerticalClasses = "w-1 h-[95%]";

function assignMainStyling(horizontal, vertical) {
	let mainStyling = separatorDefaultClasses;

	if (horizontal) {
		mainStyling = [mainStyling, separatorHorizontalClasses].join(" ");
	}
	if (vertical) {
		mainStyling = [mainStyling, separatorVerticalClasses].join(" ");
	}

	return mainStyling;
}

export default function Separator({ horizontal, vertical }) {
	let separatorStyles = assignMainStyling(horizontal, vertical);

	return <div className={separatorStyles}></div>;
}
