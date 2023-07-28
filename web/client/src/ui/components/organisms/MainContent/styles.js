import tw from "tailwind-styled-components";

const Container = tw.div`
	relative
	flex
	flex-row
	max-md:flex-col
	max-w-[2800px]
`;

const SidebarContainer = tw.div`
	flex
	flex-col
	h-full
	bg-gradient-to-r
	from-[#FFF6E4]
	to-[#FFFBF3]
	self-start
	${(props) => (props.sticky ? "fixed pt-[110px]" : "absolute ")}
	top-0
	left-0
	`;

const SidebarArrowButton = tw.div`
	absolute
	top-[16px]
	left-[350px]
	flex
	flex-col
	cursor-pointer
	${(props) => (props.sidebarSticky ? "pt-[110px]" : "")}
`;

const Content = tw.div`
	grid
	grid-rows-auto
	px-24
	pt-[30px]
	${(props) => (props.moveRight ? "ml-[320px]" : "")}
	`;

const Title = tw.div`
	text-[56px]
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
