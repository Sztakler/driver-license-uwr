import React from "react";

import Image from "client/components/atoms/Image";
import Paragraph from "client/components/atoms/Paragraph";

import { Container, Panel } from "./styles";

export default function PanelsScroller({ panelsContents }) {
	return (
		<Container>
			{panelsContents.map((panel) => (
				<Panel>
					<Image
						src={panel.image}
						className="h-[10px] w-auto text-elipsis"
					></Image>
					<Paragraph style="text-[#0d0d0d]">{panel.description}</Paragraph>
				</Panel>
			))}
		</Container>
	);
}
