import React from "react";

import { useNavigate, useLocation } from "react-router";
import Image from "../../atoms/Image";

export default function Tile({ data, navigationTarget }) {
	const navigate = useNavigate();
	const route = useLocation();

	const navigateToPage = () => {
		navigate(route.pathname + "/" + data.navigationTarget);
	};

	return (
		<div
			className="border-2 border-solid border-orange-300 rounded-2xl bg-white p-6 hover:scale-105 hover:cursor-pointer"
			onClick={navigateToPage}
		>
			<div>
				<Image src={data.icon} secondary />
			</div>
			<h2 className="mb-1">Title</h2>
			<span>{data.description}</span>
		</div>
	);
}
