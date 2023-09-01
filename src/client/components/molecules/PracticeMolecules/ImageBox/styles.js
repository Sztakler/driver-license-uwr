import tw from "tailwind-styled-components";

const ImageContainer = tw.div`
	relative
	flex
	self-center
	items-center
	justify-center
	overflow-hidden
	rounded-[39px]

	${(props) =>
		props.savedQuestionsView
			? "xl:w-[672px] xl:h-[378px] lg:w-[608px] lg:h-[342px] md:w-[512px] md:h-[288px] max-md:w-[320px] max-md:h-[180px] max-md:rounded-[39px] mx-auto"
			: "xl:w-[975px] xl:h-[549px] lg:w-[832px] lg:h-[468px] md:w-[640px] md:h-[360px] max-md:rounded-none"}
	max-md:min-w-screen
	max-md:min-h-[calc(100vw*0.5625)]

	bg-[#FFE5A3]
`;

export { ImageContainer };
