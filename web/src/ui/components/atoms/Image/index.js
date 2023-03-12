import React from "react";
import tw from "tailwind-styled-components";

const imageDefaultClasses = "";

const imagePrimaryClasses = "h-56 w-auto";

const imageTileLogoClasses =
	"float-left w-36 h-auto mr-5 mt-1 border-2  border-solid border-black rounded-3xl p-4";

const imageIconClasses = "absolute w-9 h-auto mr-4 right-0";

const ImageStyled = tw.img`
	${(props) => props.primary && imagePrimaryClasses}
	${(props) => props.tileLogo && imageTileLogoClasses}
	${(props) => props.icon && imageIconClasses}
`;

export default function Image(props) {
	return <ImageStyled src={props.src} {...props}></ImageStyled>;
}
