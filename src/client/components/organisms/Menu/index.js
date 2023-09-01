import React from "react";
import { useNavigate } from "react-router";

import Header from "client/components/molecules/Header";
import Button from "client/components/atoms/Button";

import { Container } from "./styles";

export default function Menu({
	title,
	subtitle,
	navigateTo,
	buttonText,
	desktopBgImage,
	mobileBgImage,
}) {
	const navigate = useNavigate();

	return (
		<Container>
			<Header
				title={title}
				subtitle={subtitle}
				desktopBgImage={desktopBgImage}
				mobileBgImage={mobileBgImage}
				buttonText={buttonText}
			>
				<div className="flex flex-row flex-wrap w-full justify-center mt-2 mb-6">
					<Button
						primary
						hover
						onClick={() => {
							navigate(navigateTo);
						}}
						size="l"
						className="max-md:max-w-[256px] max-md:h-[48px] max-md:text-[20px]"
					>
						{buttonText}
					</Button>
				</div>
			</Header>
		</Container>
	);
}
