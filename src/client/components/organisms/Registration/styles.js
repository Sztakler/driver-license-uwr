import tw from "tailwind-styled-components";

const RegistrationContainer = tw.div`
	flex 
	justify-center
	align-center
	w-full
	h-[776px]
	bg-auto
	bg-no-repeat
	bg-register
	bg-top
	relative
	pl-[650px]
	pt-20
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
	absolute top-10 flex flex-col bg-gradient-to-b from-[#FFEDCAFF] from-[0%]  via-[#FFEDCAD9] via-[80%] to-[#FFEDCA00] rounded-[39px] px-32 self-center h-[705px]
`;

const RegisterFormContainer = tw.div`
	flex
	flex-col
	w-full
	max-w-[450px]
	self-center
`;

const RegisterForm = tw.form`
flex flex-col gap-y-6 max-md:pt-[4vh] pt-12
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
