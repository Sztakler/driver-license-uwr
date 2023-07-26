import tw from "tailwind-styled-components";

const SettingsAlign = tw.div`
	px-48
	mb-24
	mt-6
`;

const InnerContainer = tw.div`
	flex
	flex-col
	items-center
	py-16
	self-center
	rounded-xl
	h-[700px]
	w-full
	bg-gradient-to-b from-[#fff4d6] to-[#fff8e5]
`;

const Form = tw.form`
	flex
	flex-col
	justify-evenly
	h-full
`;

const HorizontalContainer = tw.div`
	flex
	flex-row
	gap-24
`;

const VerticalContainer = tw.div`
	flex
	flex-col
	gap-4
`;

const InputContainer = tw.div`
	flex
	flex-col
`;

export {
	SettingsAlign,
	InnerContainer,
	Form,
	HorizontalContainer,
	VerticalContainer,
	InputContainer,
};
