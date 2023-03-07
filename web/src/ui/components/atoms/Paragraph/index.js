import React from "react";

export default function Paragraph(props) {
    const { style, innerHTML } = props;

    return (
        <p className={style} dangerouslySetInnerHTML={{__html: innerHTML}}></p>
    );
}
