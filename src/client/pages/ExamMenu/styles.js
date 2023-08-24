import tw from "tailwind-styled-components";

const Container = tw.div`
	flex
	flex-col
	max-md:flex-col
	items-center
`;

const HeaderContainer = tw.div`
	flex
	flex-col
	w-full
	max-w-[2648px]
	max-md:bg-exam-menu-mobile
	max-md:min-h-[662px]
	max-md:max-h-[662px]
	max-md:bg-no-repeat
	max-md:bg-top
	max-md:bg-auto
	max-md:relative
`;

const TitleContainer = tw.div`
	flex 
	flex-col
	container
	md:pl-[10vw]
	
	max-md:h-[300px]
	max-md:absolute
	max-md:justify-center
	max-md:items-center
	max-md:text-center
	max-md:top-[200px]
	max-md:px-3
`;

const IllustrationContainer = tw.div`
	flex
	flex-col
	mb-8
`;

const Title = tw.div`
	text-8xl
	max-md:text-6xl
	text-[#0d0d0d]
	font-display
	whitespace-break-spaces
	mb-2
`;

const Subtitle = tw.div`
	text-base
	text-[#0d0d0d]
	h-[140px]
    max-w-prose
`;

export {
	Container,
	HeaderContainer,
	IllustrationContainer,
	TitleContainer,
	Title,
	Subtitle,
};
