import React from "react";

import BulletPoint from "../BulletPoint";

export default function BulletList(props) {
	const uuidv4 = require("uuid/v4");
    const { points } = props;

    return (
        <div className="mt-2">
            {
                points.map((text, index) => {
                    return <BulletPoint style="text-base" key={uuidv4 + index} text={text} />;
                })
            }
        </div>
    );
}
