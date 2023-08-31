import React from "react";

import Text from "client/components/atoms/Text";

import { LoadingContainer } from "./styles";

// Loading screen, shown when we are waiting for backend response
export default function Loading() {
	return (
		<LoadingContainer>
			<Text className="my-auto mx-auto text-7xl max-md:text-3xl font-display">
				Wczytywanie...
			</Text>
		</LoadingContainer>
	);
}
