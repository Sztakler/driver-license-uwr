import tw from "tailwind-styled-components";

const QuestionListWrapper = tw.div`
	flex 	
	self-center
	flex-col 
`;

const QuickActions = tw.div``;

const ListContainer = tw.div`
	bg-[#f1f1f1]
	border-t-[3px]
	border-[#e1e1e1]
`;	

const ListItem = tw.div`
	relative
	w-[55rem]
	p-5
	border-b-[3px]
	border-[#e1e1e1]
	cursor-pointer

	group
`;
	
const ActiveItem = tw.div`
	absolute
	left-0
	top-0
	w-2
	h-full
	group-hover:bg-[#FF5500]
`

const QuestionSection = tw.div`
	flex
	flex-row
	items-center
	gap-2
`;

const AnswerSection = tw.div`
	pl-8
	pr-5
`;

const Arrow = tw.span`
	material-symbols-outlined
`;

export {
	QuestionListWrapper,
	QuickActions,
	ListContainer,
	ListItem,
	QuestionSection,
	ActiveItem,
	AnswerSection,
	Arrow
};
