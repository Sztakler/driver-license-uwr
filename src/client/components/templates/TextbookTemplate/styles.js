import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex
	flex-col
	w-full
	min-h-screen
	bg-gradient-to-b from-[91px] from-[#FFF1DB]  via-[#FFFBF3] via-[200px] to-[#FFFBF3] to-100%
	overflow-y-auto
	pt-[70px]
  max-md:overflow-y-hidden
`;

const MainContent = tw.div`
	flex
	flex-col
	flex-[1_1_auto]
	relative
	self-center
	w-full
	pt-12
	max-md:pt-[2vh]
	pb-6
`;

export { PageWrapper, MainContent };
