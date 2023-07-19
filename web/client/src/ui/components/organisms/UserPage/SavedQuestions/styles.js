import tw from "tailwind-styled-components";

const ListAlign = tw.div`
	flex
	flex-col
	px-48
	min-h-[calc(100vh-310px)]
	mb-24
`;

const InnerContainer = tw.div`
	flex
	flex-col
	self-center
	bg-[#FCF1DB]
	border
	border-[#CECECE]
	rounded-xl
	h-full
	w-full
`;

const Questions = tw.div`
	flex
	flex-col
	h-full
`;

const ListItem = tw.div`
	flex
	flex-col
	w-full
	grow-[0]
	transition-all
	duration-500
	${(props) => (props.active ? "grow-[1]" : "")}
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
`;

const ItemBody = tw.div`
	flex
	h-full
	px-14
	py-6
	flex-row
	flex-wrap
	gap-12
	border-b
	border-[#CECECE]
`;

const ImageBox = tw.div`
	flex
	min-w-[752px]
	min-h-[423px]
	overflow-hidden
	border-2
	border-[#424242]
	rounded-lg
	bg-[#FFE5A3]
`;

const TaskData = tw.div`
	flex
	flex-col
	flex-1
	py-6
	gap-12
`;

const Answers = tw.div`
	flex
	flex-col
	gap-4
`;

const Answer = tw.div`
	flex
	flex-row
	items-center
	gap-2
`;

const StatusIcon = tw.image`

`;

const Header = tw.div`
	flex
	flex-row
	flex-wrap
	gap-8
	py-8
	px-16
	border-b
	border-[#CECECE]
`;

const FiltersList = tw.div`
	flex
	flex-row
	gap-2
	items-center
`;

const Filter = tw.div`
	flex
	flex-row
	flex-wrap
	items-center
`;

const Name = tw.text`
  font-medium
`;

export {
	ListAlign,
	InnerContainer,
	ListItem,
	Header,
	FiltersList,
	Filter,
	Name,
	StatusIcon,
	ItemBody,
	ImageBox,
	TaskData,
	Answers,
	Answer,
	ItemHeader,
	Questions,
};
