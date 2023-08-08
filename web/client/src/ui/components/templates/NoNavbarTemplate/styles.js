import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex 
	flex-col
	relative 
	min-w-screen
	bg-gradient-to-b from-[91px] from-[#FFF1DB]  via-[#FFFBF3] via-[200px] to-[#FFFBF3] to-100%
	min-h-screen
	${(props) => (props.hamburgerView ? "pt-[210px]" : "pt-[80px]")}
`;

const MainContent = tw.div`
	flex
	flex-col
	flex-[1_1_auto]
	self-center
	w-full
	items-center
	min-h-screen
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
