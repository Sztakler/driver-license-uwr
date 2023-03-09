import React from "react";

import Paragraph from "../Paragraph";
import Bullet from "../Bullet";

export default function BulletPoint(props) {
    const { style, text } = props;

    return (
        <div className={style}>
            <Bullet /> <Paragraph innerHTML={text}/>
        </div>
    );
}
