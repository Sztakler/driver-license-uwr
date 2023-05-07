import React from "react";

import BulletPoint from "../BulletPoint";

export default function BulletList(props) {
	const uuidv4 = require("uuid/v4");
	const { points, bullet } = props;

	return (
		<div className="mt-2">
			{points.map((text, index) => {
				return (
					<BulletPoint style="text-base" bullet={bullet} key={uuidv4 + index} text={text} />
				);
			})}
		</div>
	);
}
