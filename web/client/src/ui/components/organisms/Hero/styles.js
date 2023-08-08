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
h-[calc(100vh-145px)]
w-full
bg-cover
bg-center
flex
flex-col
gap-[36vh]
p-[4vw]
`;

const MobileBottomContainer = tw.div`
flex
flex-col
gap-[3vh]
`;

const MobileTopContainer = tw.div`
max-w-prose
`;

export { HeroContainer, PanelContainer, ImageContainer, MobileHeroContainer, MobileBottomContainer, MobileTopContainer, };
