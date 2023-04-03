import React from "react";
import { useNavigate, useLocation } from "react-router";

import Image from "../../atoms/Image";
import Heading from "../../atoms/Heading";

import { TileContainer, Text } from "./styles";

export default function Tile(props) {
	const { title, description } = props
	const navigate = useNavigate();
	const route = useLocation();

	const navigateToPage = () => {
		navigate(route.pathname + "/" + data.navigationTarget);
	};

	return (
		<TileContainer {...props}>
			{/* <Image tileLogo secondary src={data.icon} /> */}
			<Heading level={3} styles="text-center">{title}</Heading>
			<Text>{description}</Text>
		</TileContainer>
	);
}
