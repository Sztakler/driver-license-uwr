import React from "react";
import tw from "tailwind-styled-components";

import {
	unorderedListDefaultClasses,
	unorderedListPrimaryClasses,
	unorderedListNavbarClasses,
} from "./styles";

const StyledUnorderedList = tw.ul`
	${() => unorderedListDefaultClasses}
  ${(props) => props.primary && unorderedListPrimaryClasses}
  ${(props) => props.navbar && unorderedListNavbarClasses}
`;

export default function UnorderedList(props) {
	return <StyledUnorderedList {...props}>{props.children}</StyledUnorderedList>;
}
