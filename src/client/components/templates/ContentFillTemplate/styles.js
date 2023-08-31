import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex 
	flex-col
	relative
	min-h-screen
	pt-[70px]
  max-md:max-h-screen
  max-md:overflow-y-hidden
`;

const MainContent = tw.div`
	flex
	flex-col
	relative
	w-full
	md:pt-12
	max-md:pt-[2vh]
`;

export { PageWrapper, MainContent };
