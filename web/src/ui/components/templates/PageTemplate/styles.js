import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex 
	flex-col
	relative 
	w-full
	bg-white
	min-h-screen
`;

const HeroSection = tw.div`
	flex 
	flex-[1_0_auto]
	align-middle 
	justify-center
`;

const MainContent = tw.div`
	container
	flex
	flex-col
	flex-[1_0_auto]
	self-center
	h-full
	p-16
`

export { PageWrapper, HeroSection, MainContent };
