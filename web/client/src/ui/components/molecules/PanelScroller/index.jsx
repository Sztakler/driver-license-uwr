import React from "react";

import Image from "../../atoms/Image";
import Paragraph from "../../atoms/Paragraph";

import { Container, Panel } from "./styles";

export default function PanelsScroller({ panelsContents }) {
	return (
		<Container>
			{panelsContents.map((panel) => (
				<Panel>
					<Image src={panel.image} className="h-[300px] text-elipsis"></Image>
					<Paragraph style="text-[#0d0d0d]">{panel.description}</Paragraph>
				</Panel>
			))}
		</Container>
	);
}
