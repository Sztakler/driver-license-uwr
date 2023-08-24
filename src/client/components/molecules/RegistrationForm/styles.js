import tw from "tailwind-styled-components";

const LoginFormContainer = tw.form`
	flex
	flex-col
	items-center
	justify-center
	h-full
	w-1/3
	rounded-[39px]
	p-6
`;

const InnerWrapper = tw.div`
	flex
	flex-col
	w-full
	mb-10
`;

const LabelSection = tw.div`
	flex
	flex-row
	w-full
`;

const InputSection = tw.div`
	relative
	flex
	flex-row
	items-center
	w-full
	h-20
`;

const Heading = tw.h2`
	mb-10
`;

export {
	LoginFormContainer,
	InnerWrapper,
	LabelSection,
	InputSection,
	Heading,
};
