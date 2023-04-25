import React from "react";

export default function Paragraph(props) {
	const { style, content } = props;

	return (
		<p className={style}>{content}</p>
	);
}
