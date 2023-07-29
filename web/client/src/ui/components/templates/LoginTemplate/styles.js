import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex 
	flex-col
	bg-gradient-to-b from-[91px] from-[#FFF1DB]  via-[#FFFBF3] via-[20%] to-[#FFFBF3] to-100%
	relative
`;

const MainContent = tw.div`
	flex 
	flex-auto 
	justify-center 
	min-h-screen
	bg-login
	bg-no-repeat 
	bg-center 
	bg-contain
	pt-[115px]

`;

export { PageWrapper, MainContent };
