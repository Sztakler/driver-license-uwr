import tw from "tailwind-styled-components";

const ImageContainer = tw.div`
	relative
	flex
	self-center
	items-center
	justify-center
	h-auto
	overflow-hidden
	rounded-[39px]
	xl:w-[975px]
	xl:h-[549px]
	lg:w-[832px]
	lg:h-[468px]
	md:w-[640px]
	md:h-[360px]
	max-md:min-w-screen
	max-md:min-h-[calc(100vw*0.5625)]

	max-md:rounded-none
	bg-[#FFE5A3]
`;

export { ImageContainer };
