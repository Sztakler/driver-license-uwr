import React from "react";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";
import Tile from "../../molecules/Tile";

import { TiledMenuWrapper, InfoSection, Options, OptionsContainer } from "./styles";

export default function TiledMenu({ tiles, tiles2, ...props }) {
	const par = "Lorem excepteur officia ad excepteur ea duis dolore occaecat fugiat est labore. Ipsum irure fugiat laborum tempor dolor ipsum irure incididunt ullamco culpa Lorem officia dolor ut. Et mollit duis aute reprehenderit ullamco tempor adipisicing magna aliquip veniam mollit qui. Velit laboris ad consectetur nulla laborum aute dolor dolore irure non. Mollit esse aliquip ea incididunt in id elit velit commodo ad laboris. Velit reprehenderit nostrud exercitation consectetur in aliqua cillum aliquip enim dolore deserunt esse anim. Amet pariatur nulla reprehenderit non est dolor magna non sunt sunt officia eiusmod."
	return (
		<TiledMenuWrapper>
			<InfoSection>
				<Heading level={1}>Tryby nauki</Heading>
				<Paragraph innerHTML={par}></Paragraph>
			</InfoSection>
			<OptionsContainer>
				<Heading level={2}>Praktyka</Heading>
				<Options>
					{tiles.map((tile, index) => {
						return <Tile key={index} data={tile} />;
					})}
				</Options>
			</OptionsContainer>
			<OptionsContainer>
				<Heading level={2}>Teoria</Heading>
				<Options>
					{tiles2.map((tile, index) => {
						return <Tile key={index} data={tile} />;
					})}
				</Options>
			</OptionsContainer>
		</TiledMenuWrapper>
	);
}
