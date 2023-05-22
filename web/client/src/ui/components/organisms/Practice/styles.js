import tw from "tailwind-styled-components";

const PracticeContainer = tw.div`
	max-w-[1600px]
	border-double
	rounded-2xl
	w-full
	h-full
	pt-16
	max-2xl:p-20
`;

const BrandTitle = tw.div`
	absolute
	top-[38px]
	left-[52px]
	cursor-pointer
	
	max-lg:left-[50%]
	max-lg:translate-x-[-50%]
`;

const Wrapper = tw.div`
	flex
	flex-row
	flex-wrap
	gap-4

	max-2xl:justify-center
`;

const FavoriteTask = tw.div`
	flex
	flex-row
	w-full
`;

const TaskTopSection = tw.div`
	flex
	flex-col
	relative
	m-auto

	max-2xl:w-full
`;

const InnerWrapper = tw.div`
	flex
	flex-col
	w-full
`;

const TaskInfo = tw.div`
	flex
	flex-row
	flex-wrap
	items-end
	self-center
 	justify-around
	w-full
	pb-1
	mt-2
`;

const ImageBox = tw.div`
	relative
	flex
	self-center
	items-center
	justify-center
	w-[928px]
	h-[522px]
	overflow-hidden
	border-2
	border-[#424242]
	rounded-lg
	bg-[#FFE5A3]

	max-2xl:w-full
	max-2xl:h-auto
`;

const TaskBottomSection = tw.div`
	flex
	flex-col
	w-[928px]

	max-2xl:w-full
`;

const Answers = tw.div`
	flex
	${(props) =>
		props.row ? "flex-row justify-around" : "flex-col justify-around gap-4"}
	mt-8
`;

const Answer = tw.div`
	flex
	flex-row
	items-center
	gap-2
`;

const Menu = tw.div`
	flex
	flex-col
	flex-grow
	items-start
	gap-16
	${(props) => (props.inReviewMode ? "gap-4" : "gap-16")}
	text-center
	p-4
	bg-[#FFF6E4]
	rounded-xl
	shadow-xl
	w-[558px]

	ml-[72px]
	max-2xl:ml-0
	max-2xl:flex-none
	max-2xl:w-full
	max-2xl:gap-4
`;

const QuitOptions = tw.div`
	flex
	flex-row
	items-center
	justify-end
	gap-2
	w-full
`;
const TimerContainer = tw.div`
	flex
	flex-col
	items-start
	justify-start
	gap-2
	w-full
`;

const CustomTimer = tw.div`
	flex
	items-center
	justify-center
	gap-2
	w-full
	px-4
	py-3
	w-26
	h-14
	${(props) => (props.expired ? "bg-red-600" : "bg-[#FFE49E]")}
	border-[#8D8D8D]
	border-2
	rounded-[3rem]
	text-xl
`;

const Row = tw.div`
	flex
	flex-row
	items-center
	gap-4
	w-full
	[&>*]:w-half
`;

const NextPrevious = tw.div`
	flex
	flex-col-reverse
	items-start
	gap-4
	w-full

	max-2xl:flex-row
	max-2xl:[&>*]:w-[50%]
`;

const ReviewQuestions = tw.div`
	flex
	flex-col
	items-start
	gap-2
	h-full
	w-full
`;

export {
	PracticeContainer,
	BrandTitle,
	Wrapper,
	FavoriteTask,
	TaskTopSection,
	InnerWrapper,
	TaskInfo,
	ImageBox,
	TaskBottomSection,
	Answers,
	Answer,
	Menu,
	QuitOptions,
	TimerContainer,
	CustomTimer,
	Row,
	NextPrevious,
	ReviewQuestions,
};
