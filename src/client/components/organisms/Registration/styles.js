import tw from "tailwind-styled-components";

const RegistrationContainer = tw.div`
	flex 
	xl:justify-center
	xl:align-center
	xl:w-full
	xl:h-[776px]
	xl:bg-auto
	xl:bg-no-repeat
	xl:bg-register
	xl:bg-top
	xl:relative
	xl:pl-[650px]
	xl:pt-20
	max-xl:px-[2vw]

	max-xl:h-[calc(100vh-78px)]
	max-xl:flex-col
	max-md:pt-[2vh]
	max-md:overflow-y-auto
`;

const InfoContainer = tw.div`
	flex
	flex-col
	gap-y-4
`;

const Title = tw.h2`
	self-start
	pt-24
	max-xl:pt-0
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
	xl:absolute
	xl:top-10
	flex
	flex-col
	xl:bg-gradient-to-b
	xl:from-[#FFEDCAFF]
	xl:from-[0%]
	xl:via-[#FFEDCAD9]
	xl:via-[80%]
	to-[#FFEDCA00]
	xl:rounded-[39px]
	xl:px-32
	max-xl:px-[4vw]
	xl:self-center
	h-[705px]
`;

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

const SubmitButtonContainer = tw.button`

`;

const LoginButtonContainer = tw.div`
	max-xl:flex
	xl:absolute
	xl:top-6
	xl:right-8
	max-xl:mt-4
	max-xl:items-center
	max-xl:justify-center
	max-xl:w-full
`;

const TextGrayedSpan = tw.span`
	text-[#808080]
`;

const TextUnderlineSpan = tw.span`
	underline
`;

const LoginButton = tw.button`
	font-semibold
	underline
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

const Disclaimer = tw.p`
	text-xs
	text-[#808080]
	text-left
	max-w-prose
	pb-4
	mr-auto
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
