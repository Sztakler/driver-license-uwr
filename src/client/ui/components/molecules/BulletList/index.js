import React from "react";

import BulletPoint from "../BulletPoint";

export default function BulletList(props) {
	const uuidv4 = require("uuid/v4");
	const { points, bullet } = props;

	return (
		<div className="mt-2  text-[0.95vw]">
			{points.map((text, index) => {
				return <BulletPoint bullet={bullet} key={uuidv4 + index} text={text} />;
			})}
		</div>
	);
}
