import React from "react";
import { useNavigate } from "react-router";

import Illustrations from "../../../../assets/images/svg/icons/Illustrations";
import Image from "../../atoms/Image";

import { BrandTitle } from "./styles";

export default function BrandAbsoluted() {
	const navigate = useNavigate();

	return (
		<BrandTitle onClick={() => navigate("/")}>
			<Image src={Illustrations.PageLogo} />
		</BrandTitle>
	);
}
