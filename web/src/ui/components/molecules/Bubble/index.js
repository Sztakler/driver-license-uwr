import React from "react";
import Image from "../../atoms/Image";

import {
	BubbleContainer,
} from "./styles";

export default function Bubble(props) {
	return <BubbleContainer size={props.size}>
		{props.src && <Image src={props.src}/>}
		{props.children}
	</BubbleContainer>;
}
