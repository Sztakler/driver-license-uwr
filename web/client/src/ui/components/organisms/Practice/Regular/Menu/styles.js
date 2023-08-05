import tw from "tailwind-styled-components";

const MenuContainer = tw.div`
	flex
	flex-row
	flex-wrap
	flex-grow
	items-start
	justify-start
	gap-16
	${(props) => (props.inReviewMode ? "gap-4" : "gap-16")}
	bg-gradient-to-b from-[0px] from-[#FFDFA3] to-[#FFE8BC00] to-100%
	text-center
	p-4
	mt-[36px]
	rounded-[39px]
	max-w-[528px]
	max-h-[558px]
	ml-[112px]

	max-2xl:flex-none
	max-2xl:w-full
	max-2xl:max-w-full
	max-2xl:gap-4
	max-2xl:m-0
	overflow-hidden
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
	py-3
	w-full
	max-w-[332px]
	h-12
	${(props) => (props.expired ? "bg-red-600" : "bg-[#FFE49E]")}
	border-[#8D8D8D]
	border-2
	rounded-[3rem]
	text-xl
`;

const KnowledgeLevel = tw.div`
	flex
	flex-col
	items-start
	gap-2
`;

const Row = tw.div`
	flex
	flex-row
	items-center
	gap-4
	w-full
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

export {
	MenuContainer,
	TimerContainer,
	CustomTimer,
	KnowledgeLevel,
	Row,
	NextPrevious,
};
