import React from "react";

export default function Heading(props) {
	const { level, children } = props;

	return React.createElement(`h${level}`, null, children);
}
