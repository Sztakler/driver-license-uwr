import tw from "tailwind-styled-components";

const HeroContainer = tw.div`
	flex
	flex-col
	items-center
	justify-center
	w-[100vw]
	pt-16
	overflow-x-hidden
	gap-5
`;

const PanelContainer = tw.div`
	relative
	w-full
`;

const ImageContainer = tw.div`
`;

const MobileHeroContainer = tw.div`
min-h-[690px]
max-h-[690px]
w-full
bg-auto
bg-no-repeat
bg-top
flex
flex-col
gap-[36vh]
p-[4vw]
relative
`;

const MobileBottomContainer = tw.div`
flex
flex-col
absolute
gap-[3vh]
bottom-[22.5%]
`;

const MobileTopContainer = tw.div`
absolute
max-w-prose
top-[2.5%]
`;

export {
	HeroContainer,
	PanelContainer,
	ImageContainer,
	MobileHeroContainer,
	MobileBottomContainer,
	MobileTopContainer,
};
