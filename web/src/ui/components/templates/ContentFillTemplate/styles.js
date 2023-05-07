import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex 
	flex-col 
	relative 
	bg-orange-100
`;

const MainContent = tw.div`
	flex 
	bg-[#ffefd0] 
	flex-auto 
	justify-center 
	p-10
	pt-0
	min-h-screen
`;

export { PageWrapper, MainContent };
