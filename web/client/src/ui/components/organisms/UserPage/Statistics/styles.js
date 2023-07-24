import tw from "tailwind-styled-components";

const StatisticsAlign = tw.div`
	px-48
	h-[calc(100vh-360px)]
	mb-24
	mt-6
`;

const InnerContainer = tw.div`
	flex
	flex-wrap
	self-center
	bg-[#FCF1DB]
	border
	border-[#CECECE]
	rounded-xl
	h-full
	w-full
	pt-12
	pb-24
	justify-evenly
	max-w-[1600px]
	max-h-[800px]
	`;

export { StatisticsAlign, InnerContainer };
