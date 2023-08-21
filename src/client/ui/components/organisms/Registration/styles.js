import tw from "tailwind-styled-components";

const RegistrationContainer = tw.div`
	flex 
	justify-center
	align-center
	w-full
	pt-6
	h-[calc(100vh-115px)]
	bg-auto
	bg-no-repeat
	bg-center
	xl:pl-[35vw]
	relative
`;

const InfoContainer = tw.div`
flex flex-col gap-y-4
`;

const Title = tw.h2`
self-start
pt-24
m-0
`;

const Subtitle = tw.p`
text-xl
`;

const ListContainer = tw.div`

`;

const ImageContainer = tw.div`
	h-full
`;

const FormContainer = tw.div`
	relative flex flex-col bg-gradient-to-b from-[#FFEDCAFF] from-[0%]  via-[#FFEDCAD9] via-[80%] to-[#FFEDCA00] rounded-[39px] px-32 aspect-[652/805] self-center h-[805px]
`;

const RegisterFormContainer = tw.div`
	flex
	flex-col
	w-full
	max-w-[450px]
	self-center
`;

const RegisterForm = tw.form`
flex flex-col gap-y-6 pt-12
`;

const InputsContainer = tw.div`
flex flex-col gap-y-6
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
text-[16px] font-semibold
`;

const Disclaimer = tw.p`
text-xs text-[#808080] text-left max-w-prose pb-4 mr-auto
`;

export {
	RegistrationContainer,
	InfoContainer,
	Title,
	ImageContainer,
	ListContainer,
	FormContainer,
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
