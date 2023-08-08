import tw from "tailwind-styled-components";

const Container = tw.div`
		flex
		flex-col
		max-md:flex-col
		lg:min-h-[calc(100vh-91px)]
		h-[calc(100vh-91px)]
		max-lg:min-h-screen
		items-center
`;

const HeaderContainer = tw.div`
		flex
		flex-col
		min-h-full
		w-full
		items-center
		max-w-[2648px]
		pt-4
`;

const TitleContainer = tw.div`
    flex 
    flex-col
		lg:px-[10vw]
		w-full
`;

const IllustrationContainer = tw.div`
    flex
    flex-col
		w-full
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
    text-[90px]
    text-[#0d0d0d]
    font-display
`;

const Subtitle = tw.div`
    text-[18px]
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
