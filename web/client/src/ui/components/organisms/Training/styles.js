import tw from "tailwind-styled-components";

const Container = tw.div`
    flex
    flex-col
    max-md:flex-col
    min-h-[calc(100vh-90px)]
    mt-[90px]
    max-lg:mt-[61px]
    items-center
    bg-[#FFF3DD]
`;

const HeaderContainer = tw.div`
    flex
    flex-col
    max-lg:items-center
    max-lg:justify-center
    max-lg:text-center
    w-full
    max-w-[1830px]    
`;

const TitleContainer = tw.div`
    flex 
    flex-col
    px-44
    mb-8
`;

const IllustrationContainer = tw.div`
    flex
    flex-col
    mb-10
`;

const MainContainer = tw.div`
    flex
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
    text-[90px]
    leading-[1.4]
    text-[#0d0d0d]
    font-display
`;

const Subtitle = tw.div`
    text-sm
    text-overflow
    text-[#0d0d0d]
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
    scroll-pl-10 // add padding to scroll
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
    rounded-[46px]
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