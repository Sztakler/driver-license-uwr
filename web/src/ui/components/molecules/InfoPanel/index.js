import React from "react";

import Image from "../../atoms/Image";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";

export default function InfoPanel({ data }) {
    function image({ data }) {
        <div className="m-4">
            <img
                src={require('../../../../../../src/assets/images/car.png')}
                className="h-56 w-auto max-w-none"
            />
        </div>
    }

    function info({ data }) {
        <div className="m-4 max-w-prose">
            <h2 className="text-6xl font-bold mb-4">Testy na prawko</h2>
            <p className="text-base">to strona edukacyjna z darmowym dostępem do bazy <span className="font-bold">wszystkich pytań egzaminacyjnych na kategorię B</span>.</p>
            <p className="text-base">Z nami z łatwością przygotujesz się do egzaminu!</p>
        </div>
    }
    function normalLayout({ data }) {
        return <div className="flex justify-between flex-wrap">
            {image}
            {info}
        </div>
    }

    function reverseLayout({ data }) {
        return <div className="flex justify-between flex-wrap">
            {info}
            {image}
        </div>
    }
    function renderContent(layout) {
        if (layout === "normal") {
            return normalLayout
        } if (layout === "reverse") {
            return reverseLayout
        }
        else
            return normalLayout
    }

    return (

        <div className="flex justify-between flex-wrap w-full">
            <div>
                <img className="h-56 w-auto max-w-none" src={data.image} />
            </div>
            
            <div className="m-4 max-w-prose">
                <Heading level={2}>{data.header}</Heading>
                {data.description.map((innerHTML, index) => {
                    return <Paragraph style="text-base" key={data.id + index} innerHTML={innerHTML} />;
                })}
            </div>

        </div>
    );


}
