import tw from "tailwind-styled-components";

const HeaderContainer = tw.div`
	flex
	flex-col
	mb-48
	max-md:mb-10
	lg:min-h-[calc(100vh-145px)]

`;

const TitleContainer = tw.div`
	flex 
	flex-col
	pt-12
	max-md:p-4
	
`;

const IllustrationContainer = tw.div`
	flex
	flex-col
	w-full
	relative
	items-center
	lg:px-44
`;

const Title = tw.div`
	text-[90px]
	max-md:text-[70px]
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
