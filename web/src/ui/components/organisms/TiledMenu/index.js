import React from "react";

import Tile from "../../molecules/Tile";

export default function TiledMenu({ tiles, ...props }) {
	return (
		<div className="grid grid-cols-2 auto-rows-fr gap-6 max-w-screen-lg">
			{tiles.map((tile, index) => {
				return <Tile key={index} data={tile} />;
			})}
		</div>
	);
}
