import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex 
	flex-col
	w-full
	h-full

	overflow-y-auto
	scrollbar
	snap-mandatory
	snap-y
	scroll-p-[200px]
	bg-[#FFFAED]
	mt-[90px]
`;

const HeroSection = tw.div`
	flex 
	flex-[1_0_auto]
	align-middle 
	justify-center
	bg-[#ffefd0]
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
