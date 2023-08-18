import React from "react";
import tw from "tailwind-styled-components";

import {
	separatorDefaultClasses,
	separatorHorizontalClasses,
	separatorVerticalClasses,
} from "./styles";

const Separator = tw.div`
	${() => separatorDefaultClasses}
	${(props) => props.horizontal && separatorHorizontalClasses}
	${(props) => props.vertical && separatorVerticalClasses}
`;

export default Separator;
