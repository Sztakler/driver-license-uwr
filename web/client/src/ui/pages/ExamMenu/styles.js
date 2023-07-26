import tw from "tailwind-styled-components";

const Container = tw.div`
	flex
	flex-col
	max-md:flex-col
	min-h-[calc(100vh-91px)]
	p-4
`;

const HeaderContainer = tw.div`
	flex
	justify-center
	flex-col
	h-[calc(100vh-38px)]
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
	text-[90px]
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
