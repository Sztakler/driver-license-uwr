import tw from "tailwind-styled-components";

const ListAlign = tw.div`
	flex
	flex-col
	px-48
	min-h-[calc(100vh-310px)]
	mb-24

	max-lg:px-8
	max-md:px-4
	`;

const InnerContainer = tw.div`
	flex
	flex-col
	self-center
	rounded-[39px]
	h-[784px]
	overflow-y-scroll
	w-full
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
`;

const ItemBody = tw.div`
	flex
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
	max-w-[758px]
	max-h-[428px]

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

const Header = tw.div`
	flex
	flex-row
	flex-wrap
	sticky
	top-0
	z-10
	bg-[#FCF1DB]
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
