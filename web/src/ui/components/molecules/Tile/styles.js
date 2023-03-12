import tw from "tailwind-styled-components";

const TileContainer = tw.div`
	border-2 
	border-solid 
	border-orange-300 
	rounded-2xl 
	bg-white 
	p-6 

	hover:scale-105 
	hover:cursor-pointer
`;

const Heading = tw.h2`
	mb-1"
`;

const Text = tw.span`

`;

export { TileContainer, Heading, Text };
