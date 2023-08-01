import tw from "tailwind-styled-components";

const SettingsAlign = tw.div`
	px-48
	mb-24
	mt-6
	max-lg:px-8
	max-md:px-4
`;

const InnerContainer = tw.div`
	flex
	flex-col
	items-center
	py-16
	px-4
	self-center
	rounded-[39px]
	w-full
	bg-gradient-to-b from-[#fff4d6] to-[#fff8e5]
`;

const Form = tw.form`
	flex
	flex-col
	min-h-[700px]
	justify-evenly
	h-full

	max-lg:gap-8
	max-lg:items-center
`;

const HorizontalContainer = tw.div`
	flex
	flex-row
	flex-wrap
	gap-24

	max-lg:justify-center
	max-lg:gap-8
	`;

const VerticalContainer = tw.div`
	flex
	flex-col
	gap-4
	max-lg:gap-3
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
