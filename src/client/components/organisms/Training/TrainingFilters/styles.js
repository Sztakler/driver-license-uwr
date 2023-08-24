import tw from "tailwind-styled-components";

const Container = tw.div`
		flex
		flex-col
		max-md:flex-col
		items-center
    w-full
    max-md:pt-[2vh]
`;

const HeaderContainer = tw.div`
		flex
		flex-col
		w-full
		max-w-[2648px]
`;

const TitleContainer = tw.div`
		flex 
		flex-col
		w-full
		md:pl-[10vw]
`;

const MainContainer = tw.div`
    max-md:flex-col
    h-full
		w-full
		flex
		flex-col
		relative
		justify-center
		items-center
`;

const SidebarContainer = tw.div`
    flex
    flex-row
    max-md:flex-col
    h-full
    bg-[#FFFAED]
`;

const Content = tw.div`
    grid
    grid-rows-auto
    py-4
    px-24
`;

const Title = tw.div`
	text-8xl
	max-md:text-6xl
	text-[#0d0d0d]
	font-display
	mb-2
	max-md:self-center

`;

const Form = tw.form`
    flex
    flex-col
    align-center
    justify-center
    gap-12
    px-4
    py-12
		md:flex-row
    md:gap-48
    md:py-16
    md:px-4
		md:w-full
		md:max-w-[calc(100vw-200px)]
    md:mb-14
		max-md:overflow-y-auto
		max-md:items-start
		max-md:justify-between
		max-md:gap-[3vh]
		max-md:py-[3vh]
`;

const InputsWrapper = tw.div`
    flex
    flex-col
    max-md:w-full
    max-md:justify-start
    max-md:items-start
`;

export {
	Container,
	HeaderContainer,
	MainContainer,
	TitleContainer,
	SidebarContainer,
	Content,
	Title,
	Form,
	InputsWrapper,
};
