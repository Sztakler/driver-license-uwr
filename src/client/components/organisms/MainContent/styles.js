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
	bg-gradient-to-r
	from-[#FFF6E4]
	to-[#FFFBF3]
	self-start
	md:-left-2
	${(props) => (props.sticky ? "md:fixed md:pt-[80px]" : "md:absolute md:top-0")}
	top-0
	left-0
	`;

const SidebarArrowButton = tw.div`
  max-md:hidden
	absolute
	left-[350px]
	h-[250px]
	w-[25px]
	hover:font-semibold
	flex
	flex-col
	cursor-pointer
	pt-[25px]
	${(props) =>
		props.sidebarSticky ? " md:fixed md:pt-[40px]  md:left-[340px]" : ""}
	${(props) => (props.sidebarHidden ? " left-[24px]" : "")}
`;

const Content = tw.div`
	grid
	grid-rows-auto
	pl-24
	max-md:pl-4
	pt-[30px]
	${(props) => (props.moveRight ? "md:ml-[320px]" : "")}
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
rotate-90
inline-block
mt-2
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
