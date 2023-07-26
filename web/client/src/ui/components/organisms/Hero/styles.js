import tw from "tailwind-styled-components";

const HeroContainer = tw.div`
	container
	flex
	flex-col
	gap-64
	items-center
	justify-center
	p-10
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
	text-[70px]
`;

const SubTitle = tw.span`
	text-[#1c1c1c]
	text-[26px]
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
