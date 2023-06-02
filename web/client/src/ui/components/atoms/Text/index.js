import React from "react";
import tw from "tailwind-styled-components";

const StyledSpan = tw.span`
`;

export default function Text(props) {
	return <StyledSpan {...props}>{props.children}</StyledSpan>;
}
