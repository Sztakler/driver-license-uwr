import React from "react";
import Tile from "../../molecules/Tile";

import { Grid } from "./styles";

export default function TiledMenu({ tiles, ...props }) {
	return (
		<Grid>
			{tiles.map((tile, index) => {
				return <Tile key={index} data={tile} />;
			})}
		</Grid>
	);
}
