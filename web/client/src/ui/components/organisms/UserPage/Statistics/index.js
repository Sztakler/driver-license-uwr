import React from "react";

import { StatisticsAlign, InnerContainer } from "./styles";
import Diagram from "../../../molecules/UserPage/Diagram";

export default function Statistics() {
	return (
		<StatisticsAlign>
			<InnerContainer>
				<Diagram />
				<Diagram />
			</InnerContainer>
		</StatisticsAlign>
	);
}
