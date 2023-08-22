import React from "react";

import Text from "../../atoms/Text";

export default function Loading() {
	return (
		<div className="fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] font-display ">
			<Text className="my-auto mx-auto text-7xl max-md:text-3xl">
				Wczytywanie...
			</Text>
		</div>
	);
}
