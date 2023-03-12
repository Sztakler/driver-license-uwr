import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex 
	flex-col 
	relative 
	min-h-screen 
	bg-orange-100
`;

const MainContent = tw.div`
	flex 
	bg-road-texture 
	bg-cover 
	flex-auto 
	items-center 
	justify-center 
	mb-16
`;

export { PageWrapper, MainContent };
