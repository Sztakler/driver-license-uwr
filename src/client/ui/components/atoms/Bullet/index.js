import React from "react";

import Text from "../Text";

export default function Bullet(props) {
	const { bullet } = props;

	return (
		<div>
			<Text className="material-symbols-outlined text-[0.95vw]">{bullet}</Text>
		</div>
	);
}
