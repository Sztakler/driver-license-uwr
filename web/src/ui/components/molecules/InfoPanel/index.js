import React from "react";

import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";
import BulletList from "../BulletList";

export default function InfoPanel({ data }) {

    let image = <div className="green-300 w-1/2 min-h-full float-left flex justify-center items-center">
        <img className="h-full w-auto" src={data.image} />
    </div>

    let info = <div className="blue-300 w-1/2 min-h-full flex flex-col items-start p-5 pt-20">
        <Heading level={2}>{data.header}</Heading>

        {data.description.map((innerHTML, index) => {
            return <Paragraph style="text-base" key={data.id + index} innerHTML={innerHTML} />;
        })}

        <BulletList points={data.points} />

    </div>

    let normalLayout = <div className="flex flex-row flex-wrap justify-between slate-500 w-full h-full">
        {image}
        {info}
    </div>

    let reverseLayout = <div className="flex flex-row flex-wrap justify-between slate-500 w-full h-full">
        {info}
        {image}
    </div>

    return <div className="flex flex-row flex-wrap justify-between slate-500 w-full h-full">
        {data.layout === "reverse" ?
            reverseLayout :
            normalLayout}
    </div>
}
