import React from "react";

import Button from "client/components/atoms/Button";
import Image from "client/components/atoms/Image";
import HomePageIllustrations from "assets/images/svg/HomePage/HomePageIllustrations";

import { SlideContainer, ImageContainer, ArrowDown } from "./styles";

// Views on home page are called slides, this is universal component to
// construct them
export default function Slide({
	id,
	scrollDown,
	children,
	bgImage,
	isLastSlide = false,
}) {
	return (
		<SlideContainer id={"panel-" + id}>
			<ImageContainer>
				<Image className="w-full h-full max-w-full block" src={bgImage}></Image>
			</ImageContainer>
			{children}
			{!isLastSlide && (
				<ArrowDown>
					<Button onClick={() => scrollDown(id + 1)}>
						<Image
							className="flex self-center w-[2vw] "
							src={HomePageIllustrations.ArrowDown}
						/>
					</Button>
				</ArrowDown>
			)}
		</SlideContainer>
	);
}
