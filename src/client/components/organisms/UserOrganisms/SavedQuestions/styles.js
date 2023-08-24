import tw from "tailwind-styled-components";

const ListAlign = tw.div`
	flex
	flex-col
	px-48

	max-lg:px-8
	max-md:px-4
	max-md:mb-0
	`;

const InnerContainer = tw.div`
	flex
	flex-col
	self-center
	lg:h-[70vh]
	overflow-y-scroll
	w-full
	max-lg:max-h-[calc(100vh-357px)]
	max-md:border-t
	max-md:border-[#CECECE]
	md:rounded-[39px]
	`;

const Questions = tw.div`
	flex
	flex-col
	h-full
	pb-32

`;

const ListItem = tw.div`
	flex
	flex-col
	w-full
	transition-all
	duration-500
`;

const ItemHeader = tw.button`
	flex
	flex-row
	flex-wrap
	items-center
	w-full
	py-6
	px-14
	justify-between
	border-b
	border-[#CECECE]
	max-md:px-4
`;

const ItemBody = tw.div`
	flex
	px-14
	py-6
	flex-row
	flex-wrap
	gap-12
	max-md:gap-0
	border-b
	border-[#CECECE]

	max-md:px-4
`;

const ImageBox = tw.div`
	flex
	aspect-[758/428]
	max-lg:min-w-[86vw]
	lg:min-w-[526px]
	lg:min-h-[296px]
	max-h-[300px]

	overflow-hidden
	border-2
	border-[#424242]
	rounded-[39px]
	bg-[#FFE5A3]
`;

const TaskData = tw.div`
	flex
	flex-col
	flex-1
	py-6
	gap-12
	relative
	max-md:pb-12
`;

const Answers = tw.div`
	flex
	gap-4
	flex-col
	${(props) =>
		props.row
			? "max-md:flex-row max-md:justify-center max-md:items-center max-md:flex-wrap"
			: ""}
`;

const Answer = tw.div`
	flex
	flex-row
	items-center
	gap-2
`;

const AboveHeader = tw.div`
	flex
	flex-row
	w-full
	justify-between
	pb-2
	my-2
`;

const Header = tw.div`
	flex
	flex-row
	flex-wrap
	sticky
	top-0
	z-10
	md:bg-[#FCF1DB]
	gap-8
	py-8
	px-16
	border-b
	border-[#CECECE]
	${(props) =>
		props.mobileView
			? "max-md:flex max-md:h-[calc(100vh-70px)] max-md:px-24 max-md:w-screen left-0 max-md:bg-gradient-to-t max-md:from-[#FFE9C8] max-md:to-[#FFF8EB] max-md:absolute max-md:justify-start max-md:items-center max-md:flex-col"
			: "max-md:hidden"}
`;

const FiltersList = tw.div`
	flex
	flex-row
	gap-2
	items-center

	max-md:flex-col
	max-md:w-[160px]
`;

const Filter = tw.div`
	flex
	flex-row
	flex-wrap
	md:items-center
	max-md:w-full
`;

const Name = tw.text`
  font-medium
	max-md:mr-auto
	max-md:mb-6
`;

const Placeholder = tw.div`
	flex
	w-full
	h-full
	text-4xl
	items-center
	justify-center
`;

export {
	ListAlign,
	InnerContainer,
	ListItem,
	Header,
	AboveHeader,
	FiltersList,
	Filter,
	Name,
	ItemBody,
	ImageBox,
	TaskData,
	Answers,
	Answer,
	ItemHeader,
	Questions,
	Placeholder,
};
