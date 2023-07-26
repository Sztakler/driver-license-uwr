import tw from "tailwind-styled-components";

const HeaderContainer = tw.div`
	flex
	flex-col
  min-h-[calc(100vh-300px)]
	mb-48
`;

const TitleContainer = tw.div`
	flex 
	flex-col
	pl-44
`;

const IllustrationContainer = tw.div`
	flex
	flex-col
	w-full
	relative
	items-center
`;

const Title = tw.div`
	text-[90px]
	text-[#0d0d0d]
	font-display
`;

const Subtitle = tw.div`
	text-[20px]
	mb-8
	pt-5
	text-overflow
	text-[#0d0d0d]
	max-w-prose
`;

const Buttons = tw.div`
	self-center
	mt-4
`;

export {
	HeaderContainer,
	TitleContainer,
	IllustrationContainer,
	Title,
	Subtitle,
	Buttons,
};
