import tw from "tailwind-styled-components";

const LoginFormContainer = tw.form`
	flex
	flex-col
	items-center
	justify-start
	h-full
	w-full
	rounded-[39px]
`;

const NoAccount = tw.div`
	absolute	
	text-[#757575]
	top-6
	right-8
`;

const InnerWrapper = tw.div`
	flex
	flex-col
	w-full
	mb-12
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
`;

const Heading = tw.h2`
	self-start
	mt-24
	mb-16
`;

export {
	LoginFormContainer,
	NoAccount,
	InnerWrapper,
	LabelSection,
	InputSection,
	Heading,
};
