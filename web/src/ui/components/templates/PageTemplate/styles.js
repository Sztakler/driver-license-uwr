import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex 
	flex-col
	relative 
	w-full
	bg-white
	h-full
`

const HeroSection = tw.div`
	flex 
	flex-[1_0_auto]
	align-middle 
	justify-center
`;

const MainContent = tw.div`
	flex
	flex-col
	flex-[1_1_auto]
	self-center
	w-full
	px-12
	py-8
`

export { PageWrapper, HeroSection, MainContent };
