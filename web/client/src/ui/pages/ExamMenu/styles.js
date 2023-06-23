import tw from "tailwind-styled-components";

const Container = tw.div`
	flex
	flex-col
	max-md:flex-col
	min-h-[calc(100vh-90px)]
	bg-[#FFEFD0]
	mt-[90px]
	max-lg:mt-[61px]
`;

const HeaderContainer = tw.div`
	flex
	flex-col
	h-full
`;

const TitleContainer = tw.div`
	flex 
	flex-col
	pl-44
`;

const IllustrationContainer = tw.div`
	flex
	flex-col
	mb-20
`;

const Title = tw.div`
	text-5xl
	text-[#0d0d0d]
	font-display
`;

const Subtitle = tw.div`
	text-sm
	text-overflow
	text-[#0d0d0d]
`;

export {
	Container,
	HeaderContainer,
	IllustrationContainer,
	TitleContainer,
	Title,
	Subtitle,
};
