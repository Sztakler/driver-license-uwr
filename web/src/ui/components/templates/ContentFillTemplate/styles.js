import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex 
	flex-col 
	relative 
	bg-orange-100
`;

const MainContent = tw.div`
	flex 
	bg-road-texture 
	bg-cover 
	flex-auto 
	items-center 
	justify-center 
	p-10
	min-h-screen
`;

export { PageWrapper, MainContent };
