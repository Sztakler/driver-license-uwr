import React from "react";

export default function Bullet(props) {
	const { bullet } = props;

	return (
		<div className="flex flex-row gap-x-2">
			<span className="material-symbols-outlined text-[0.95vw]">{bullet}</span>
		</div>
	);
}
