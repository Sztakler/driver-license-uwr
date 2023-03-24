import tw from "tailwind-styled-components";

const ExamContainer = tw.div`
	container
	flex
	flex-auto 
	flex-col
	gap-32
	self-center
	items-center
	justify-center
	p-10
`;

const UpperSection = tw.section`
	flex 
	flex-row 
	items-center 
	justify-center 
	w-full
	gap-12
	h-2/3
`;

const LowerSection = tw.section`
flex 
flex-row 
items-center 
justify-center 
w-full
gap-48
h-1/3
`;

const Title = tw.span`
	text-8xl
`;

const SubTitle = tw.span`
	text-4xl
`;

export { ExamContainer, UpperSection, LowerSection, Title, SubTitle };
