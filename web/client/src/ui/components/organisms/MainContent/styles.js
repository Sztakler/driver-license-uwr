import tw from "tailwind-styled-components";

const Container = tw.div`
	relative
	flex
	flex-row
	max-md:flex-col
	w-full
	h-full
	bg-[#FFFAED]
	pt-6
`;

const SidebarContainer = tw.div`
	flex
	flex-row
	max-md:flex-col
	h-full
	bg-gradient-to-r
	from-[#FFF6E4]
	to-[#FFFBF3]
`;

const SidebarArrowButton = tw.div`
absolute top-[16px] left-[330px] flex flex-col cursor-pointer
`;

const Content = tw.div`
	grid
	grid-rows-auto
	py-4
	px-24
`;

const Title = tw.div`
	text-8xl
	text-[#0d0d0d]
	font-display
`;

const Subtitle = tw.div`
	text-2xl
	mb-6
	pt-5
	text-overflow
	text-[#0d0d0d]
	max-w-prose
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

const SidebarArrowButtonParagraph = tw.div`
rotate-90 translate-y-16 -translate-x-10
`;

const SidebarButtonInvisibleCheckbox = tw.input`
appearance-none w-[60px] checked:bg-blue-500
`;

const ScrolldownButton = tw.button`
self-center mt-10
`;

export {
	Container,
	SidebarContainer,
	Content,
	Title,
	Subtitle,
	PanelsScroller,
	Panel,
	SidebarArrowButton,
	SidebarArrowButtonParagraph,
	SidebarButtonInvisibleCheckbox,
	ScrolldownButton,
};
