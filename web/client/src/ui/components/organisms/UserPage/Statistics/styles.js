import tw from "tailwind-styled-components";

const StatisticsAlign = tw.div`
	px-48
	mb-24
	mt-6

	max-lg:px-8
	max-md:px-4
	max-md:mb-0
	max-md:mt-0
	`;

const InnerContainer = tw.div`
	flex
	flex-wrap
	self-center
	rounded-[39px]
	py-10
	justify-around
	gap-12
	px-12

	max-md:px-2
	max-md:w-full
	max-md:pt-0
	`;

export { StatisticsAlign, InnerContainer };
