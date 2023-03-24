import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex 
	flex-col
	relative 
	min-h-screen
	w-full
	bg-white
`;

const HeroSection = tw.div`
	flex 
	align-middle 
	justify-center
`;

const MainContent = tw.div`
	container
	flex
	flex-col
	self-center
	min-h-screen
	p-16
`

export { PageWrapper, HeroSection, MainContent };
