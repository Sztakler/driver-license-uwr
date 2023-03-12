import React from "react";

export default function Bullet(props) {
    const { style, text } = props;

    return (
        <div>
            <span className="material-symbols-outlined">
                chevron_right
            </span>
        </div>
    );
}
