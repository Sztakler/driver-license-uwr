import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex 
	flex-col
	relative 
	bg-gradient-to-b max-md:from-[0px] max-md:from-[#FEDDAC] max-md:to-[#FFF8EB] max-md:to-100%
	from-[91px] from-[#FFF1DB]  via-[#FFFBF3] via-[200px] to-[#FFFBF3] to-100%
	min-h-screen
	w-full
	max-w-screen
	pt-[70px]
	max-md:max-h-screen
	max-md:overflow-y-hidden
`;

const MainContent = tw.div`
	flex
	flex-col
	self-center
	w-full
	items-center
`;

const Wrapper = tw.div`
	flex
	flex-row
	max-xl:flex-col
	xl:flex-wrap
	gap-4
	max-2xl:justify-center 
	max-md:max-h-[calc(100vh-150px)]
	w-full
	max-2xl:items-center
`;

export { PageWrapper, MainContent, Wrapper };
