import React from "react";

export default function Bullet(props) {
    const { style, text, bullet } = props;

    return (
        <div>
            <span className="material-symbols-outlined">
                {bullet}
            </span>
        </div>
    );
}
