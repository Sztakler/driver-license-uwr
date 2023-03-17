import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex 
	flex-col 
	relative 
	min-h-screen 
	bg-white
`;

const HeroSection = tw.div`
	flex 
	align-middle 
	justify-center
`;

export { PageWrapper, MainContent, HeroSection };
