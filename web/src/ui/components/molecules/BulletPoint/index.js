import React from "react";

import Paragraph from "../../atoms/Paragraph";
import Bullet from "../../atoms/Bullet";

export default function BulletPoint(props) {
    const { text } = props;

    return (
        <div className="flex flex-row gap-x-2">
            <Bullet />
            <Paragraph content={text}/>
        </div>
    );
}
