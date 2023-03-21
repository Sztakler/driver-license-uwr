import React from "react";
import Tile from "../../molecules/Tile";

import { TiledMenuWrapper, Grid } from "./styles";

export default function TiledMenu({ tiles, ...props }) {
	return (
		<TiledMenuWrapper>
			<Grid>
				{tiles.map((tile, index) => {
					return <Tile key={index} data={tile} />;
				})}
			</Grid>
		</TiledMenuWrapper>
	);
}
