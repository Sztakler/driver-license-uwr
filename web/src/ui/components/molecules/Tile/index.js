import React from "react";
import { useNavigate, useLocation } from "react-router";

import Image from "../../atoms/Image";
import Heading from "../../atoms/Heading";

import { TileContainer, Text } from "./styles";

export default function Tile({ data, navigationTarget }) {
	const navigate = useNavigate();
	const route = useLocation();

	const navigateToPage = () => {
		navigate(route.pathname + "/" + data.navigationTarget);
	};

	return (
		<TileContainer onClick={navigateToPage}>
			<Image tileLogo secondary src={data.icon} />
			<Heading level={3}>Title</Heading>
			<Text>{data.description}</Text>
		</TileContainer>
	);
}
