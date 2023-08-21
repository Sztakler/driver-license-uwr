import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex 
	flex-col
	relative
	min-h-screen
	${(props) => (props.hamburgerView ? "max-md:pt-[150px]" : "pt-[90px]")}
    max-md:max-h-screen
    max-md:overflow-y-hidden
`;

const MainContent = tw.div`
	flex
	flex-col
	relative
	w-full
	max-md:pt-[2vh]
`;

export { PageWrapper, MainContent };
