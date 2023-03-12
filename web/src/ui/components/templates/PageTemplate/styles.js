import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex 
	flex-col 
	relative 
	min-h-screen 
	bg-orange-100
`;

const MainContent = tw.div`
	flex 
	flex-auto 
	items-center 
	justify-center 
	mb-16
`;

const HeroSection = tw.div`
	flex 
	align-middle 
	justify-center
`;

export { PageWrapper, MainContent, HeroSection };
