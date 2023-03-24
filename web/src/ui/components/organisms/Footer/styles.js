import tw from "tailwind-styled-components";

const FooterContainer = tw.div`
	flex
	justify-center
	items-center
	w-full
	bg-[#414141]
	text-white
	p-8
`;

const Text = tw.span`
 	text-[21px]
`;

const FooterWrapper = tw.div`
	flex
	h-full
	w-full
	flex-row
	flex-wrap
	justify-center
	items-center
`;

const Left = tw.div`
	flex	
	flex-grow-[1]
	flex-col
	p-8
	items-center
`

const Center = tw.div`
	flex
	flex-grow-[3]
	flex-wrap
	h-full
	p-8
	justify-center
`;

const Column = tw.div`
	flex
	flex-1
	self-center
	flex-col
	items-center
	p-4
`

const ContactOptions = tw.div`
	flex
	flex-row
	flex-wrap
	justify-center
	w-full
	gap-4
`

const Right = tw.div`
	flex
	flex-grow-[1]
	flex-col
	p-8
	items-center
`;

export { FooterContainer, FooterWrapper, Left, Center, Column, ContactOptions, Right, Text };
