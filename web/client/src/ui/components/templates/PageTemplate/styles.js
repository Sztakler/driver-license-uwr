import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex 
	flex-col
	w-full
	h-full
	bg-fixed
	bg-gradient-to-b from-[91px] from-[#FFF1DB]  via-[#FFFBF3] via-[20%] to-[#FFFBF3] to-100%
	overflow-y-auto
	scrollbar
	snap-mandatory
	snap-y
	scroll-p-[200px]
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
