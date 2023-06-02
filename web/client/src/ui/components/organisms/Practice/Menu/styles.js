import tw from "tailwind-styled-components";

const MenuContainer = tw.div`
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
	max-h-[558px]
	ml-[72px]
	max-2xl:ml-0
	max-2xl:flex-none
	max-2xl:w-full
	max-2xl:gap-4
	overflow-hidden
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
	MenuContainer,
	QuitOptions,
	TimerContainer,
	CustomTimer,
	Row,
	NextPrevious,
	ReviewQuestions,
};
