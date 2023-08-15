import tw from "tailwind-styled-components";

const Container = tw.div`
		flex
		flex-col
		max-md:flex-col
		items-center
        w-full
        max-md:pt-8
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
`;

const IllustrationContainer = tw.div`
    flex
    flex-col
`;

const MainContainer = tw.div`
	hidden
    max-md:flex-col
    h-full
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
		max-md:text-7xl
		text-[#0d0d0d]
        font-display
		mb-2
        self-center
`;


const PanelsScroller = tw.div`
    grid
    grid-flow-col
    auto-cols-[32%]
    gap-6
    pt-10
    overflow-x-auto
    overscroll-contain

    snap-mandatory
    snap-x
    scroll-pl-10
    scrollbar
`;

const Panel = tw.div`
    flex
    flex-col
    gap-8
    text-sm
    mb-6
    border
    border-[#dcdcdc]
    rounded-[39px]
    p-6
    bg-[#fffcf5]
    max-w-[440px]
    max-h-[590px]
    aspect-[440/590]

    snap-normal
    snap-start
`;

const Form = tw.form`
    flex
    flex-row
    flex-wrap
    align-center
    justify-center
    gap-12
    px-8
    py-12
    md:gap-48
    md:py-16
    md:px-64
    md:mb-14
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
    IllustrationContainer,
    TitleContainer,
    SidebarContainer,
    Content,
    Title,
    PanelsScroller,
    Panel,
    Form,
    InputsWrapper,
};
