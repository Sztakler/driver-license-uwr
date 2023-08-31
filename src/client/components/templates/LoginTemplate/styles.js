import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex 
	flex-col
	w-full
	min-h-screen
	bg-gradient-to-b from-[91px] from-[#FFF1DB]  via-[#FFFBF3] via-[200px] to-[#FFFBF3] to-100%
	max-md:bg-gradient-to-t max-md:from-[0px] max-md:from-[#FFF5E2]  max-md:via-[#FFFAF1] max-md:via-[200px] max-md:to-[#FFFBF3] max-md:to-100%
	overflow-y-auto
	pt-[70px]
`;

const MainContent = tw.div`
	flex
	flex-col
	flex-[1_1_auto]
	relative
	self-center
	w-full
	bg-login
	max-md:bg-login-mobile
	bg-no-repeat 
	bg-center 
	max-md:bg-top
	bg-contain
	pt-[115px]
	max-md:pt-[70px]
`;

export { PageWrapper, MainContent };
