import tw from "tailwind-styled-components";

const ExamContainer = tw.div`
	container
	flex
	flex-col
	gap-32
	items-center
	justify-center
	p-10
	h-full
`;

const UpperSection = tw.section`
	flex 
	flex-col 
	items-center 
	justify-center 
	w-full 
	gap-12
`;

const LowerSection = tw.section`

`;

const Title = tw.span`
	text-8xl
`;

const SubTitle = tw.span`
	text-4xl
`;

export { ExamContainer, UpperSection, LowerSection, Title, SubTitle };
