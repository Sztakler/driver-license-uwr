import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex 
	flex-col
	relative
`;

const MainContent = tw.div`
	flex 
	flex-auto 
	justify-center 
	min-h-screen
	pt-[115px]

`;

export { PageWrapper, MainContent };
