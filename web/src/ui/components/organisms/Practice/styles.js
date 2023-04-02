import tw from "tailwind-styled-components";

const PracticeContainer = tw.div`
	self-center
	overflow-hidden
	bg-white
	border-double
	border-4
	border-[#FF5500]
	rounded-2xl
	max-w-[80%]
`;

const PracticeWrapper = tw.div`
	flex
	flex-col
	flex-wrap
	h-full
`;

const TopSection = tw.div`
	flex
	flex-row
	flex-wrap
	items-center
	gap-2
	border-b-2
	bg-[#FF5500]
	text-white
	p-4
`;

const CenterSection = tw.div`
	flex
	flex-row
	flex-wrap
`;

const Task = tw.div`
	flex
	flex-[1_1_65%]
	flex-col
	p-4
	gap-4
	justify-between
`;

const Answers = tw.div`
	flex
	flex-col
	justify-around
	bg-[#e2e2e2]
	border-y-2
	border-[#acacac]
	[&>div+div]:border-t-2
	[&>div+div]:border-[#acacac]
`;

const Answer = tw.div`
	p-4
`;

const Menu = tw.div`
	flex
	flex-col
	flex-auto
	items-center
	text-center
	bg-[#d9d9d9]
	px-6
	py-6
	gap-4
`;

const QuitOptions = tw.div`
	flex
	flex-row
	justify-between
	mb-auto
	w-full
`

const Row = tw.div`
	flex
	flex-row
	w-full
	justify-evenly
	mb-auto
`

const BottomSection = tw.div``;

export {
	PracticeContainer,
	PracticeWrapper,
	TopSection,
	CenterSection,
	Task,
	Answers,
	Answer,
	Menu,
	QuitOptions,
	Row,
	BottomSection,
};
