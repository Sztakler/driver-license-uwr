import React from "react";

import Text from "/src/ui/components/atoms/Text";

export default function Bullet(props) {
	const { style, text, bullet } = props;

	return (
		<div>
			<Text className="material-symbols-outlined">{bullet}</Text>
		</div>
	);
}
