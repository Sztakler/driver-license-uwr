import tw from "tailwind-styled-components";

const StatisticsAlign = tw.div`
	px-48
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
	py-10
	justify-around
	gap-12
	px-12
	`;

export { StatisticsAlign, InnerContainer };
