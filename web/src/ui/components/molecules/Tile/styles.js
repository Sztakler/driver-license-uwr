import tw from "tailwind-styled-components";

const TileContainer = tw.div`
	w-[22rem]
	h-80
	border-4 
	border-solid 
	border-[#FF5500]
	rounded-2xl 
	bg-white 
	p-6

	hover:scale-105 
	hover:cursor-pointer
`;

const Text = tw.span`

`;

export { TileContainer, Text };
