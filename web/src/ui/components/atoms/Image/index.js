import React from "react";
import tw from "tailwind-styled-components";

const imageDefaultClasses = "";

const imagePrimaryClasses = "h-56 w-auto";

const imageNavbarClasses = "";

const imageTileLogoClasses =
	"float-left w-36 h-auto m-4 border-2 border-l-0 border-t-0 border-solid border-black rounded-br-3xl p-4";

const imageIconClasses = "absolute w-9 h-auto mr-4 right-0";

const ImageStyled = tw.img`
	${(props) => props.primary && imagePrimaryClasses}
	${(props) => props.navbar && imageNavbarClasses}
	${(props) => props.tileLogo && imageTileLogoClasses}
	${(props) => props.icon && imageIconClasses}
`;

export default function Image(props) {
	return <ImageStyled src={props.src} {...props}></ImageStyled>;
}
