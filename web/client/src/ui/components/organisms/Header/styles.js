import tw from "tailwind-styled-components";

const HeaderContainer = tw.div`
	flex
	flex-col
  min-h-[calc(100vh-300px)]
	bg-[#FFFAED]
	mb-48
`;

const TitleContainer = tw.div`
	flex 
	flex-col
	pl-44
`;

const IllustrationContainer = tw.div`
	flex
	flex-col
	relative
`;

const Title = tw.div`
	text-8xl
	text-[#0d0d0d]
	font-display
`;

const Subtitle = tw.div`
	text-2xl
	mb-6
	pt-5
	text-overflow
	text-[#0d0d0d]
	max-w-prose
`;

const Buttons = tw.div`
self-center mt-10
`;

export {
  HeaderContainer,
  TitleContainer,
  IllustrationContainer,
  Title,
  Subtitle,
  Buttons,
};
