import React from "react";
import tw from "tailwind-styled-components";

const unorderedListPrimaryClasses = "m-0 px-5 list-disc text-lg";

const unorderedListNavbarClasses = "lg:flex flex-row justify-around sm:hidden";

const UnorderedListStyled = tw.ul`
  ${(props) => props.primary && unorderedListPrimaryClasses}
  ${(props) => props.navbar && unorderedListNavbarClasses}
`;

export default function UnorderedList(props) {
	return <UnorderedListStyled {...props}>{props.children}</UnorderedListStyled>;
}
