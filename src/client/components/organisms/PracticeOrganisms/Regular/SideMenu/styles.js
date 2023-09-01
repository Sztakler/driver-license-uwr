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
	md:bg-gradient-to-b md:from-[0px] md:from-[#FFDFA3] md:to-[#FFE8BC00] md:to-100%
	text-center
	p-4
	mt-[36px]
	rounded-[39px]
	max-md:rounded-none
	max-w-[458px]
	max-h-[558px]
	ml-[112px]
	md:relative
	
	xl:w-[975px]
	lg:w-[832px]
	md:w-[640px]
	max-2xl:flex-none
	max-2xl:w-full
	max-2xl:max-w-full
	max-2xl:gap-4
	max-2xl:m-0
	max-md:px-2
	max-md:py-0
	overflow-hidden
`;

const QuestionCounter = tw.div`
	absolute
	md:top-4
	md:left-6
	flex
	flex-col
	items-start
	justify-center
	font-medium
	md:gap-1
	max-md:top-[70px]
	max-md:left-[2.5%]
`;

const TimerContainer = tw.div`
	flex
	flex-col
	items-start
	justify-start
	gap-2
	w-full
	max-md:order-1
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
	${(props) => (props.expired ? "bg-red-600" : "bg-[#89E07B]")}
	rounded-[3rem]
	text-xl
`;

const KnowledgeLevel = tw.div`
	flex
	flex-col
	items-start
	gap-2

	max-md:absolute
	max-md:top-[52px]
	max-md:max-w-[150px]
	max-md:w-[150px]
	max-md:left-[28.5%]
	max-md:items-center
	max-md:justify-center
	max-md:gap-1
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
	self-start
	md:gap-4
	w-full
	max-md:order-4

	max-2xl:flex-row
	max-2xl:[&>*]:w-[50%]
	max-md:[&>*]:w-auto
	${(props) => props.isExam && "max-md:[&>*]:w-full px-2"}
	max-md:absolute
	max-md:bottom-2
	max-md:left-0
	max-md:w-full
	max-md:justify-around
`;

export {
	MenuContainer,
	QuestionCounter,
	TimerContainer,
	CustomTimer,
	KnowledgeLevel,
	Row,
	NextPrevious,
};
