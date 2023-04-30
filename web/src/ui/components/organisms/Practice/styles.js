import tw from "tailwind-styled-components";

const PracticeContainer = tw.div`
	container
	border-double
	rounded-2xl
	w-full

	max-2xl:p-16
`;

const Wrapper = tw.div`
	flex
	flex-row
	flex-wrap
	max-2xl:justify-center
	gap-4
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
	flex
	relative
	self-center
	items-center
	justify-center
	rounded-lg
	w-[928px]
	h-[522px]
	max-2xl:w-full
	max-2xl:h-auto
	overflow-hidden
	border-2
	border-[#424242]
	bg-[#FFE5A3]
`;

const TaskBottomSection = tw.div`
	flex
	flex-col
	w-[928px]
	max-2xl:w-full
`;

const Answers = tw.div`
	flex
	flex-col
	justify-around
	gap-4
	mt-4
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
	flex-[1_1_auto]
	ml-[72px]
	max-2xl:ml-0
	max-2xl:flex-none
	max-2xl:w-full
	shadow-xl
	items-start
	text-center
	p-4
	gap-16
	max-2xl:gap-4
	bg-[#FFF6E4]
	rounded-xl
`;

const QuitOptions = tw.div`
	flex
	flex-row
	items-center
	justify-end
	w-full
	gap-2
`;
const TimerContainer = tw.div`
	flex
	flex-col
	w-full
	items-start
	justify-start
	gap-2
`;

const CustomTimer = tw.div`
	flex
	items-center
	justify-center
	gap-2
	w-full
	rounded-[3rem]
	px-4
	py-3
	bg-[#FFE49E]
	border-[#8D8D8D]
	border-2
	text-xl
`;

const Row = tw.div`
	flex
	flex-row
	items-center
	w-full
	gap-4
	[&>*]:w-half
`;

const NextPrevious = tw.div`
	flex
	flex-col-reverse
	items-start
	w-full
	gap-4
	max-2xl:flex-row
	max-2xl:[&>*]:w-[50%]
`;

export {
	PracticeContainer,
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
};
