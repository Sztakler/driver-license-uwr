import React from "react";

import Bullet from "client/components/atoms/Bullet";
import Paragraph from "client/components/atoms/Paragraph";

import { BulletListContainer, ItemContainer } from "./styles";

export default function BulletList(props) {
	const { points, bullet } = props;

	return (
		<BulletListContainer>
			{points.map((text, index) => {
				return (
					<ItemContainer>
						<Bullet bullet={bullet} />
						<Paragraph>{text}</Paragraph>
					</ItemContainer>
				);
			})}
		</BulletListContainer>
	);
}
