import React from 'react';

export default function TileImage({text, image}) {
  return (
    <img
      className="float-left w-36 h-auto m-4 border-2 border-l-0 border-t-0 border-solid border-black rounded-br-3xl p-4"
      src={image}
    />
  );
}
