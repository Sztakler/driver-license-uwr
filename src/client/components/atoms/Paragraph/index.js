import React from "react";

export default function Paragraph(props) {
	const { style, children } = props;

	return <p className={style}>{children}</p>;
}
