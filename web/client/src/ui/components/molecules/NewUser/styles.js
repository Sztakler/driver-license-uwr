import tw from "tailwind-styled-components";

const NewUserContainer = tw.div`
	h-full
	w-1/2
	rounded-[39px]
`;

const Row = tw.div`
	flex 
	flex-col 
	items-start 
	justify-start 
	p-4
`;

const Column = tw.div`
	container 
	flex 
	flex-col 
	p-4
`;

const Heading4 = tw.h4`
	
`;

const Heading5 = tw.h5`
	
`;

export { NewUserContainer, Row, Column, Heading4, Heading5 };
