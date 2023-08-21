import React from "react";

import Text from "../../atoms/Text";

export default function Loading() {
	return (
		<div className="fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] max-2xl:my-20 font-display">
			<Text className="text-7xl">Wczytywanie...</Text>
		</div>
	);
}
