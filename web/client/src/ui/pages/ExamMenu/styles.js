import tw from "tailwind-styled-components";

const Container = tw.div`
	flex
	flex-col
	max-md:flex-col
	lg:min-h-[calc(100vh-115px)]
	max-lg:min-h-screen
	p-4
`;

const HeaderContainer = tw.div`
	flex
	flex-col
`;

const TitleContainer = tw.div`
	flex 
	flex-col
	lg:px-44
	container
	max-lg:px-16

`;

const IllustrationContainer = tw.div`
	flex
	flex-col
	lg:px-44
`;

const Title = tw.div`
	text-[90px]
	text-[#0d0d0d]
	font-display
	whitespace-break-spaces
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
