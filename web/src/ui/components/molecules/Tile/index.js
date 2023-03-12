import React from "react";

import { useNavigate, useLocation } from "react-router";
import Image from "../../atoms/Image";

import { TileContainer, Heading, Text } from "./styles";

export default function Tile({ data, navigationTarget }) {
	const navigate = useNavigate();
	const route = useLocation();

	const navigateToPage = () => {
		navigate(route.pathname + "/" + data.navigationTarget);
	};

	return (
		<TileContainer onClick={navigateToPage}>
			<Image tileLogo src={data.icon} secondary />
			<Heading>Title</Heading>
			<Text>{data.description}</Text>
		</TileContainer>
	);
}
