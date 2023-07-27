import tw from "tailwind-styled-components";

const SummaryContainer = tw.div`
	flex
	justify-center
	items-center
	h-[calc(100vh-91px)]
	w-full
	pb-8
	pt-4
	max-2xl:p-2
	text-center
	bg-[#FFEFD0]
	`;

const InnerTextBox = tw.div`
	relative
	${(props) => (props.positive ? "bg-positive-result" : "bg-negative-result")}
	bg-no-repeat
	bg-center
	bg-contain
	h-full
	max-h-[1000px]
	w-full

	flex
	flex-col
	items-center
	justify-center
	gap-4
`;

const InsideBackground = tw.div`
	flex 
	flex-col 
	justify-center 
	items-center
	absolute 
	mt-20
	text-center 
	w-[700px] 
	text-8xl 
	max-xl:text-4xl 
	max-lg:text-3xl 
	max-md:text-3xl 
	max-sm:text-3xl
`;

const Table = tw.div`
	flex
	flex-row
	justify-between 
	text-xl 
	border-2
	rounded-[39px]
	border-black
	p-4
	my-8
	font-semibold
`;

const Row = tw.div`

`;

const Column = tw.div`
	flex
	flex-col
	flex-[0_1_20%]
`;

const Statistic = tw.span`
	text-lg
	mb-2
`;

const Points = tw.span`
	text-5xl
`;

export {
	SummaryContainer,
	InnerTextBox,
	InsideBackground,
	Table,
	Row,
	Column,
	Statistic,
	Points,
};
