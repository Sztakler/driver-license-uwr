import tw from "tailwind-styled-components";

const QuestionListContainer = tw.div`
	flex 	
	self-center
	flex-col
	mt-8
	p-12
`;

const QuickActions = tw.div``;

const ListContainer = tw.div`
	bg-[#f1f1f1]
	border-t-[3px]
	border-[#e1e1e2]
`;

const ListItem = tw.div`
	relative
	w-[55rem]
	p-5
	border-b-[3px]
	border-[#e1e1e2]
	cursor-pointer

	group
`;

const ActiveItem = tw.div`
	absolute
	left-0
	top-0
	w-2
	h-full

	group-hover:bg-[#FFD363]
`;

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
	QuestionListContainer,
	QuickActions,
	ListContainer,
	ListItem,
	QuestionSection,
	ActiveItem,
	AnswerSection,
	Arrow,
};
