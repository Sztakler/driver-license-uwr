import React from "react";
import tw from "tailwind-styled-components";

import {
	imageDefaultClasses,
	imagePrimaryClasses,
	imageTileLogoClasses,
	imageIconClasses,
} from "./styles";

const StyledImage = tw.img`
	${() => imageDefaultClasses}
	${(props) => props.primary && imagePrimaryClasses}
	${(props) => props.tileLogo && imageTileLogoClasses}
	${(props) => props.icon && imageIconClasses}
`;

export default function Image(props) {
	return <StyledImage src={props.src} {...props} />;
}
