import tw from "tailwind-styled-components";

const SlideContainer = tw.div`
	relative
	w-full
	h-[calc(100vh-110px)]
`;

const ImageContainer = tw.div`
	w-full
	h-full
	absolute
	bottom-16
	flex
	justify-center
`;

const ArrowDown = tw.div`
	absolute
	bottom-16
	flex
	justify-center
	w-full
`;

export { SlideContainer, ImageContainer, ArrowDown };
