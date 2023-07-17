import tw from "tailwind-styled-components";

const StatisticsAlign = tw.div`
	px-48
	h-[calc(100vh-360px)]
	mb-24
	mt-6
`;

const InnerContainer = tw.div`
	flex
	self-center
	bg-[#FCF1DB]
	border
	border-[#CECECE]
	rounded-xl
	h-full
	w-full
	pt-16
	pb-32
	px-24
	justify-evenly
	`;

export { StatisticsAlign, InnerContainer };
