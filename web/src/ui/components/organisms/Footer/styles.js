import tw from "tailwind-styled-components";

const FooterContainer = tw.div`
	flex
	flex-[0_1_50px]
	w-full
	bg-[#414141]
	text-white
	p-4
`;

const FooterWrapper = tw.div`
	flex
	h-full
	w-[80rem]
	flex-row
	flex-wrap
	justify-center
	mx-auto
`;

const Left = tw.div`
	flex	
	flex-grow-[1]
	flex-col
	p-8
`;

const Center = tw.div`
	flex
	flex-grow-[3]
	flex-wrap
	p-8
	justify-center
`;

const FeatureList = tw.ul`

`;

const Feature = tw.li`
	cursor-pointer
	m-1
	hover:underline
	underline-offset-4
`;

const Column = tw.div`
	flex
	flex-auto
	flex-col
	items-center
	justify-start
`;

const Top = tw.div`
	flex
	self-center
`;

const Bottom = tw.div`
	flex
	self-center
	text-center
`;

const ContactOptions = tw.div`
	flex
	flex-row
	flex-wrap
	justify-center
	w-full
	gap-4
`;

const Right = tw.div`
	flex
	flex-grow-[1]
	flex-col
	p-8
	items-center
`;

const Popup = tw.div`
	w-56
	absolute
	bg-white
	text-black
	p-1
	rounded-lg
	top-[125%]
	text-center
	left-1/2
	-ml-[7.5rem]
	z-10

	after:absolute
	after:bottom-full
	after:left-1/2
	after:border-8
	after:border-t-transparent
	after:border-x-transparent
	after:border-b-white
`;

export {
	FooterContainer,
	FooterWrapper,
	Left,
	Center,
	FeatureList,
	Feature,
	Column,
	Top,
	Bottom,
	ContactOptions,
	Right,
	Popup,
};
