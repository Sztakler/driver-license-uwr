import tw from "tailwind-styled-components";

const HeaderContainer = tw.div`
	flex
	flex-col
	max-md:mb-10
	lg:min-h-[calc(100vh-145px)]
	w-full
	items-center
	max-w-[2648px]
	max-md:min-h-[662px]
	max-md:max-h-[662px]
	max-md:bg-no-repeat
	max-md:bg-top
	max-md:bg-auto
	max-md:relative
	${(props) => `${props.mobileBgImage}`}
`;

const TitleContainer = tw.div`
	flex 
	flex-col
	max-md:p-4
	md:pl-[10vw]
	w-full
	min-w-full
	container
	max-md:h-[300px]
	max-md:absolute
	max-md:justify-center
	max-md:items-center
	max-md:text-center
	max-md:top-[164px]
	max-md:px-3
`;

const IllustrationContainer = tw.div`
	flex
	flex-col
	relative
	items-center
	w-full 
	md:bg-center
	md:bg-no-repeat
	md:bg-contain
	h-[371px]
	max-2xl:h-[271px]
	aspect-[2036/371]
	max-
	max-md:hidden
	mb-8
	${(props) => props.desktopBgImage && `${props.desktopBgImage}`}
`;

const Title = tw.div`
	text-8xl
	max-md:text-5xl
	text-[#0d0d0d]
	font-display
	whitespace-break-spaces
	mb-2
`;

const Subtitle = tw.div`
	text-[18px]
	mb-8
	text-[#0d0d0d]
	max-w-prose
`;

const Buttons = tw.div`
	w-full
	self-center
	max-md:absolute
	max-md:top-[440px]
`;

export {
	HeaderContainer,
	TitleContainer,
	IllustrationContainer,
	Title,
	Subtitle,
	Buttons,
};
