import tw from "tailwind-styled-components";

const Container = tw.div`
	flex
	flex-col
	max-md:flex-col
	lg:min-h-[calc(100vh-115px)]
	max-lg:min-h-screen
	items-center
`;

const HeaderContainer = tw.div`
	flex
	flex-col
	w-full
	max-w-[2648px]
	pt-4
`;

const TitleContainer = tw.div`
	flex 
	flex-col
	lg:px-[10vw]
	container
	max-lg:px-16

`;

const IllustrationContainer = tw.div`
	flex
	flex-col
	my-8
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
