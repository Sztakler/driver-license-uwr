import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex 
	flex-col
	relative 
	min-w-screen
	bg-[#FFEFD0]
	min-h-screen
`;

const MainContent = tw.div`
	flex
	flex-col
	flex-[1_1_auto]
	self-center
	w-full
	items-center
	h-screen
	p-8
`;

const Wrapper = tw.div`
	flex
	flex-row
	flex-wrap
	gap-4

	max-2xl:justify-center
`;

export { PageWrapper, MainContent, Wrapper };
