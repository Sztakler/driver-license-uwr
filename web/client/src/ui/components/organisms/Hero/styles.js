import tw from "tailwind-styled-components";

const HeroContainer = tw.div`
	flex
	flex-col
	gap-64
	items-center
	justify-center
	w-[100vw]
	py-16
	overflow-x-hidden
`;

const PanelContainer = tw.div`
	relative
	w-full
	snap-center
`;

const ImageContainer = tw.div`
`;

export { HeroContainer, PanelContainer, ImageContainer };
