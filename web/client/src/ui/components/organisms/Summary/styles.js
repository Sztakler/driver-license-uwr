import tw from "tailwind-styled-components";

const SummaryContainer = tw.div`
	flex
	justify-center
	items-center
	w-full
	max-2xl:p-2
	text-center
	pt-12
	max-xl:pt-0
	`;

const InnerTextBox = tw.div`
	relative
	${(props) =>
		props.positive
			? "bg-positive-result max-xl:bg-positive-result-mobile"
			: "bg-negative-result max-xl:bg-negative-result-mobile"}
	bg-no-repeat
	bg-top
	max-xl:bg-center
	bg-contain
	max-xl:bg-auto
	h-full
	max-h-[823px]
	min-h-[823px]
	w-full

	flex
	flex-col
	items-center
	justify-center
`;

const InsideBackground = tw.div`
	flex 
	flex-col 
	xl:absolute
	justify-center 
	items-center 
	max-xl:mt-16
	text-center 
	max-w-[700px]
	min-w-[700px]
	break-words
	text-8xl 
	max-xl:text-4xl 

`;

const Table = tw.div`
	flex
	flex-row
	max-xl:absolute
	max-xl:top-72
	max-xl:flex-col
	flex-wrap
	justify-center
	max-xl:gap-4
	text-xl 
	p-4
	my-4
	gap-4
	font-semibold
`;

const Row = tw.div`

`;

const StatisticContainer = tw.div`
	flex
	flex-col
	max-xl:justify-between
	max-xl:items-center
	max-xl:flex-row
	flex-[0_1_20%]
	max-xl:gap-4
	gap-2
`;

const Statistic = tw.span`
	text-base
	max-w-[125px]
	break-words
	max-xl:text-left
`;

const Points = tw.span`
	flex
	max-xl:items-center
	justify-center
	text-5xl
	max-xl:text-right
	self-center
	w-[50px]
`;

export {
	SummaryContainer,
	InnerTextBox,
	InsideBackground,
	Table,
	Row,
	StatisticContainer,
	Statistic,
	Points,
};
