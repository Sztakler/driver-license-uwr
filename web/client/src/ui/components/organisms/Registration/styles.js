import tw from "tailwind-styled-components";

const RegistrationContainer = tw.div`
	flex 
	flex-row
	justify-center
	align-center
	gap-36
	w-full
	rounded-3xl 
	h-max
	pt-6
	mt-[90px]
	max-lg:mt-[61px]

`;

const LeftContainer = tw.div`
hidden lg:flex flex-col gap-y-20 py-11 min-w-[850px]
`;

const InfoContainer = tw.div`
flex flex-col gap-y-4
`;

const Title = tw.h1`
font-display
`;

const Subtitle = tw.p`
text-xl
`;

const ListContainer = tw.div`

`;

const ImageContainer = tw.div`
	h-full
`;

const RightContainer = tw.div`
flex flex-col bg-[#fffaed] border border-[#0d0d0d] rounded-[46px] py-16 px-16 pt-8 mr-8
`;

const RegisterFormContainer = tw.div`

`;

const RegisterForm = tw.form`
flex flex-col gap-y-10 mt-12
`;

const TopInputsContainer = tw.div`
flex flex-row justify-between gap-x-6
`;

const BottomInputsContainer = tw.div`
flex flex-col gap-y-10
`;

const SubmitButtonContainer = tw.div`

`;

const LoginButtonContainer = tw.div`
self-end mb-16
`;

const TextGrayedSpan = tw.span`
text-[#808080]
`;

const TextUnderlineSpan = tw.span`
underline
`;

const LoginButton = tw.button`
font-semibold underline
`;

const InputWrapper = tw.label`
flex flex-col pb-2
`;

const InputLabelText = tw.p`
text-base font-bold
`;

const Disclaimer = tw.p`
text-xs text-[#808080] max-w-prose py-4
`;

export {
	RegistrationContainer,
	LeftContainer,
	InfoContainer,
	Title,
	ImageContainer,
	ListContainer,
	RightContainer,
	RegisterForm,
	RegisterFormContainer,
	TopInputsContainer,
	BottomInputsContainer,
	SubmitButtonContainer,
	LoginButtonContainer,
	TextGrayedSpan,
	LoginButton,
	TextUnderlineSpan,
	InputWrapper,
	Disclaimer,
	Subtitle,
	InputLabelText,
};
