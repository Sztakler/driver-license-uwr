import tw from "tailwind-styled-components";

const InnerWrapper = tw.div`
	container	
	flex
	flex-col
	self-center
	gap-16
	flex-auto
	py-20
`;

const Heading = tw.h1`
	mb-6
`;

const UpperSection = tw.div``;

const LowerSection = tw.div``;

export { InnerWrapper, Heading, UpperSection, LowerSection };
