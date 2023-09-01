import tw from "tailwind-styled-components";

const Container = tw.div`
	relative
	flex
	flex-row
	max-md:flex-col
`;

const SidebarContainer = tw.div`
	flex
	flex-col
	h-full
	md:bg-gradient-to-r
	from-[#FFF6E4]
	to-[#FFFBF3]
	self-start
	md:-left-2
	${(props) => (props.sticky ? "md:fixed md:pt-[80px]" : "md:absolute md:top-0")}
	top-0
	max-md:top-12
	max-md:w-full
	left-0
	`;

const SidebarArrowButton = tw.div`
	md:absolute
	left-[350px]
	h-[450px]
	w-[50px]
	max-md:h-[50px]
	max-md:w-full
	hover:font-semibold
	flex
	flex-col
	max-md:flex-row
	max-md:px-2
	max-md:gap-2
	cursor-pointer
	md:pt-[25px]
	${(props) => (props.sidebarSticky ? " md:fixed md:pt-[40px] " : "")}
	${(props) => (props.sidebarHidden ? " left-[24px]" : "")}
`;

const Content = tw.div`
	grid
	grid-rows-auto
	md:pl-24
	md:pr-40
	${(props) =>
		props.sidebarHidden
			? "max-md:max-h-[calc(100vh-138px)]"
			: "max-md:max-h-[calc(100vh-320px)]"}
	pt-[30px]	
	pb-12
	max-md:overflow-y-scroll
	max-md:px-6
	break-words

	${(props) => (props.moveRight ? "md:ml-[320px]" : "")}
	`;

const Title = tw.h2`
	text-5xl
	max-md:text-4xl
	max-sm:text-3xl
	text-[#0d0d0d]
	font-sans
	block
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
md:absolute
md:-left-0
md:bottom-64
md:min-w-[140px]
md:min-h-[140px]
md:transform
md:rotate-[270deg]
md:inline-block
`;

const SidebarButtonInvisibleCheckbox = tw.input`
hidden w-[60px]
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
