import React from "react";

export default function UnorderedList({ children }) {
	const unorderedListClasses = "m-0 px-5 list-disc text-lg";

	return <ul className={unorderedListClasses}>{children}</ul>;
}
