import tw from "tailwind-styled-components";

const Container = tw.div`
		flex
		flex-col
		max-md:flex-col
		items-center
`;

const HeaderContainer = tw.div`
		flex
		flex-col
		w-full
		max-w-[2648px]
        max-md:bg-training-menu-mobile
		max-md:max-h-[calc(98vh-83px)]
        max-md:min-h-[calc(98vh-83px)]
		max-md:bg-no-repeat
		max-md:bg-top
		max-md:bg-auto
		max-md:relative
        
`;

const TitleContainer = tw.div`
    flex 
    flex-col
    w-full
    md:px-[10vw]
    max-md:h-[300px]
    max-md:absolute
    max-md:justify-center
    max-md:items-center
    max-md:text-center
    max-md:top-[208px]
    max-md:p-4
`;

const IllustrationContainer = tw.div`
    flex
    flex-col
    w-full
    mb-8
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
		max-md:text-6xl
		text-[#0d0d0d]
    font-display
		mb-2
`;

const Subtitle = tw.div`
    text-base
    text-overflow
    text-[#0d0d0d]
    h-[140px]
    max-w-subtitle
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

export {
    Container,
    HeaderContainer,
    MainContainer,
    IllustrationContainer,
    TitleContainer,
    SidebarContainer,
    Content,
    Title,
    Subtitle,
    PanelsScroller,
    Panel,
};
