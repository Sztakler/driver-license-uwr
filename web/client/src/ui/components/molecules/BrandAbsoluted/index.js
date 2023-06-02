import React from "react";
import { useNavigate } from "react-router";

import Image from "../../atoms/Image";
import PageLogo from "/src/assets/images/svg/icons/PageLogo";

import { BrandTitle } from "./styles";

export default function BrandAbsoluted() {
	const navigate = useNavigate();

	return (
		<BrandTitle onClick={() => navigate("/")}>
			<Image src={PageLogo.PageLogo} />
		</BrandTitle>
	);
}
