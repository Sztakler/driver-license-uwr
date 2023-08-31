import React from "react";
import { useNavigate } from "react-router";

import Illustrations from "assets/images/svg/icons/Illustrations";
import Image from "client/components/atoms/Image";

import { BrandTitle } from "./styles";

// Just logo of our page absoluted
export default function BrandAbsoluted() {
	const navigate = useNavigate();

	return (
		<BrandTitle onClick={() => navigate("/")}>
			<Image src={Illustrations.PageLogo} />
		</BrandTitle>
	);
}
