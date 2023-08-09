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
	md:absolute
	text-[#757575]
	md:top-6
	md:right-8
	max-md:mt-2
`;

const InnerWrapper = tw.div`
	flex
	flex-col
	w-full
	mb-10
	max-md:w-[80vw]
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
	md:mt-24
	md:mb-16
	max-md:mt-16
	max-md:mb-8
`;

export {
	LoginFormContainer,
	NoAccount,
	InnerWrapper,
	LabelSection,
	InputSection,
	Heading,
};
