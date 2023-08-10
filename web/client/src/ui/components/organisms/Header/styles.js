import tw from "tailwind-styled-components";

const HeaderContainer = tw.div`
	flex
	flex-col
	mb-48
	max-md:mb-10
	lg:min-h-[calc(100vh-145px)]
	w-full
	items-center
	max-w-[2648px]
`;

const TitleContainer = tw.div`
	flex 
	flex-col
	max-md:p-4
	lg:px-[10vw]
	w-full
`;

const IllustrationContainer = tw.div`
	flex
	flex-col
	relative
	items-center
	w-full 
	h-[386px]
	bg-theory-menu
	bg-center
	bg-no-repeat
	bg-contain
	my-8
`;

const Title = tw.div`
	text-8xl
	max-md:text-7xl
	text-[#0d0d0d]
	font-display
	break-all
`;

const Subtitle = tw.div`
	text-[18px]
	mb-8
	text-[#0d0d0d]
	max-w-prose
`;

const Buttons = tw.div`
	self-center
	mt-4
`;

export {
	HeaderContainer,
	TitleContainer,
	IllustrationContainer,
	Title,
	Subtitle,
	Buttons,
};
