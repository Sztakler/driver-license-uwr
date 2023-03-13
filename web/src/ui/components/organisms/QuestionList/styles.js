import tw from "tailwind-styled-components";

const QuestionListWrapper = tw.div`
	flex 	
	self-center
	flex-col 
	gap-10
`;

const ListItem = tw.div`
	w-[45rem]
	border-4
	rounded-xl
	border-black
	bg-gray-100
	px-10
	py-5
`;

const Question = tw.h4`

`;

const Answer = tw.p`
`;

export { QuestionListWrapper, ListItem, Question, Answer };
