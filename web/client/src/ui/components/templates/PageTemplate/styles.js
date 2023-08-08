import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex 
	flex-col
	w-full
	min-h-screen
	bg-gradient-to-b from-[91px] from-[#FFF1DB]  via-[#FFFBF3] via-[200px] to-[#FFFBF3] to-100%
	max-lg:bg-gradient-to-t max-lg:from-[0px] max-lg:from-[#FFF5E2]  max-lg:via-[#FFFAF1] max-lg:via-[200px] max-lg:to-[#FFFBF3] max-lg:to-100%
	overflow-y-auto
	${(props) => (props.hamburgerView ? "pt-[210px]" : "pt-[80px]")}
`;

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
	relative
	self-center
	w-full
`;

export { PageWrapper, HeroSection, MainContent };
