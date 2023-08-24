import React from "react";
import tw from "tailwind-styled-components";

const StyledVideo = tw.video`
`;

export default function Video(props) {
	return (
		<StyledVideo {...props}>
			<source src={props.src} type="video/mp4"></source>
		</StyledVideo>
	);
}
