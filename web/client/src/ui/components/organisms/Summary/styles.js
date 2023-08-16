import tw from "tailwind-styled-components";

const SummaryContainer = tw.div`
	flex
	justify-center
	items-center
	w-full
	max-2md:p-2
	text-center
	max-md:pt-0
	`;

const InnerTextBox = tw.div`
	relative
	${(props) =>
		props.positive
			? "xl:bg-positive-result max-md:bg-positive-result-mobile"
			: "xl:bg-negative-result max-md:bg-negative-result-mobile"}
	bg-no-repeat
	bg-top
	bg-contain
	max-md:bg-auto
	max-md:bg-top
	h-full
	min-h-[calc(100vh-145px)]
	max-h-[calc(100vh-145px)]
	max-md:max-h-[calc(98vh-83px)]
	max-md:min-h-[calc(98vh-83px)]
	w-full

	flex
	flex-col
	items-center
	justify-center
`;

const InsideBackground = tw.div`
	flex 
	flex-col 
	absolute
	justify-center 
	items-center 
	max-md:mt-16
	text-center 
	md:max-w-[700px]
	md:min-w-[700px]
	break-words
	text-8xl 
	max-md:text-4xl 
	max-md:top-[65px]
	md:top-[50%]
	md:-translate-y-[50%]
`;

const Table = tw.div`
	flex
	flex-row
	max-md:flex-col
	flex-wrap
	justify-center
	text-xl 
	p-4
	mt-4
	mb-1
	gap-4
	font-semibold
	max-md:gap-2
`;

const Row = tw.div`

`;

const StatisticContainer = tw.div`
	flex
	flex-col
	max-md:justify-between
	max-md:items-center
	max-md:flex-row
	flex-[0_1_20%]
	max-md:gap-4
	gap-2
`;

const Statistic = tw.span`
	text-base
	max-w-[125px]
	break-words
	max-md:text-left
`;

const Points = tw.span`
	flex
	max-md:items-center
	justify-center
	text-5xl
	max-md:text-right
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
