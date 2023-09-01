import tw from "tailwind-styled-components";

const RegisterFormContainer = tw.div`
	flex
	flex-col
	w-full
	max-w-[450px]
	self-center
`;

const RegisterForm = tw.form`
	flex
	flex-col
	gap-y-6
	max-md:pt-[4vh]
	pt-12
`;

const InputsContainer = tw.div`
	flex
	flex-col
	gap-y-6
`;

const InputWrapper = tw.label`
	flex
	flex-col
	pb-2
`;

const InputLabelText = tw.p`
	text-[16px]
	font-semibold
`;

const SubmitButtonContainer = tw.button`

`;

const LoginButtonContainer = tw.div`
	xl:absolute
	xl:top-6
	xl:right-8
`;

const TextGrayedSpan = tw.span`
	text-[#808080]
`;

const TextUnderlineSpan = tw.span`
	underline
`;

const Disclaimer = tw.p`
	text-xs
	text-[#808080]
	text-left
	max-w-prose
	mr-auto
`;

export {
	RegisterFormContainer,
	RegisterForm,
	InputsContainer,
	InputWrapper,
	InputLabelText,
	SubmitButtonContainer,
	LoginButtonContainer,
	TextGrayedSpan,
	TextUnderlineSpan,
	Disclaimer,
};
