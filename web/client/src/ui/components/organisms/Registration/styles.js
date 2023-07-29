import tw from "tailwind-styled-components";

const RegistrationContainer = tw.div`
	flex 
	flex-row
	justify-center
	align-center
	gap-36
	w-full
	rounded-[39px]
	h-max
	pt-6

`;

const LeftContainer = tw.div`
hidden lg:flex flex-col gap-y-20 py-11 min-w-[850px]
`;

const InfoContainer = tw.div`
flex flex-col gap-y-4
`;

const Title = tw.h2`
self-start
mt-24
mb-16
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
relative flex flex-col bg-gradient-to-b from-[#FFEDCAFF] from-[0%]  via-[#FFEDCAD9] via-[80%] to-[#FFEDCA00] rounded-[39px] mr-8 px-32 aspect-[652/805] w-[602px]
`;

const RegisterFormContainer = tw.div`
	w-full
`;

const RegisterForm = tw.form`
flex flex-col gap-y-10 mt-12
`;

const InputsContainer = tw.div`
flex flex-col gap-y-10
`;

const SubmitButtonContainer = tw.button`

`;

const LoginButtonContainer = tw.div`
absolute
top-6
right-8
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
text-[19px] font-semibold
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
	InputsContainer,
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
