import tw from "tailwind-styled-components";

const TileContainer = tw.button`
	w-[24rem]
	border-4 
	border-solid 
	border-[#FF5500]
	rounded-2xl 
	bg-white 
	p-4
	text-center

	hover:scale-105 
	hover:cursor-pointer
`;

const Text = tw.span`
	text-lg
`;

export { TileContainer, Text };
