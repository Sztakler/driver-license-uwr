import tw from "tailwind-styled-components";

const HeroContainer = tw.div`
	flex
	flex-col
	gap-64
	items-center
	justify-center
	w-[100vw]
	py-16
	overflow-x-hidden
`;

const UpperSection = tw.section`
	flex 
	flex-col 
	items-center 
	justify-center 
	w-full 
	gap-12
`;

const LowerSection = tw.section`

`;

const Title = tw.span`
	text-[#141414]
	font-display
	text-6xl
	2xl:text-6xl
	xl:text-xl
	lg:text-base
	md:text-[12px]
	max-md:text-[6px]
`;

const SubTitle = tw.span`
	text-[#1c1c1c]
	2xl:text-[20px]
	xl:text-[16px]
	md:text-[12px]
	max-md:text-[6px]
	font-normal
`;

const IllustrationContainer = tw.div`
	snap-start
`;

const PanelContainer = tw.div`
	relative
	w-full
	snap-center
`;

const PanelButton = tw.button`
	font-semibold
	text-[26px]
	flex
	flex-row
	justify-start
	items-center
	gap-2
	hover:underline
`;

const Panel = tw.div`
	grid
	grid-cols-2
	snap-center
`;

const InfoContainer = tw.div`
	flex
	flex-col
	gap-[30px]
	max-md:gap-0
`;

const ImageContainer = tw.div`
`;

const ButtonAbsolute = tw.button`
	absolute
	right-[12%]
	top-[56%]
	font-bold
	text-[1.4vw]
	xl:text-[26px]
	flex
	justify-center
	items-center
	gap-2
`;

const ButtonAbsoluteContainer = tw.div`
`;

const PanelAbsolute = tw.div`
`;

export {
	HeroContainer,
	UpperSection,
	LowerSection,
	Title,
	SubTitle,
	IllustrationContainer,
	PanelContainer,
	PanelButton,
	Panel,
	InfoContainer,
	ImageContainer,
	PanelAbsolute,
	ButtonAbsolute,
	ButtonAbsoluteContainer,
};
