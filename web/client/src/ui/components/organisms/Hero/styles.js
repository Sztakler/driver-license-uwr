import tw from "tailwind-styled-components";

const HeroContainer = tw.div`
	flex
	flex-col
	items-center
	justify-center
	w-[100vw]
	pt-16
	overflow-x-hidden
`;

const PanelContainer = tw.div`
	relative
	w-full
`;

const ImageContainer = tw.div`
`;

export { HeroContainer, PanelContainer, ImageContainer };
