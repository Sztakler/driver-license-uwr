import React from "react";

import Text from "/src/ui/components/atoms/Text";

export default function Loading() {
	return (
		<div className="flex h-full w-full font-display text-[8vw] justify-center items-center 	max-2xl:my-20">
			<Text>Wczytywanie...</Text>
		</div>
	);
}
