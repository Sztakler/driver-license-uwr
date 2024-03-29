import React from "react";
import tw from "tailwind-styled-components";

import {
	imageDefaultClasses,
	imagePrimaryClasses,
	imageTileLogoClasses,
	imageIconClasses,
	imageExamClasses,
	imageTheoryClasses,
} from "./styles";

const StyledImage = tw.img`
	${() => imageDefaultClasses}
	${(props) => props.primary && imagePrimaryClasses}
	${(props) => props.tileLogo && imageTileLogoClasses}
	${(props) => props.icon && imageIconClasses}
	${(props) => props.exam && imageExamClasses}
	${(props) => props.theory && imageTheoryClasses}
`;

export default function Image(props) {
	return <StyledImage src={props.src} {...props} />;
}
