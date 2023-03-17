import tw from "tailwind-styled-components";

const QuestionListWrapper = tw.div`
	flex 	
	self-center
	flex-col 
`;

const QuickActions = tw.div``;

const ListContainer = tw.div`
	border-4
	rounded-xl
	border-gray-300
	bg-gray-100

	[&>:not(:last-child)]:border-b-[0.2rem]
	[&>:not(:last-child)]:border-gray-400
`;

const ListItem = tw.div`
	w-[55rem]
	p-5
`;

const Question = tw.h4`
`;

const Answer = tw.p`
	
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
	cursor-pointer
`;

export {
	QuestionListWrapper,
	QuickActions,
	ListContainer,
	ListItem,
	Question,
	Answer,
	QuestionSection,
	AnswerSection,
	Arrow,
};
