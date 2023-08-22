import tw from "tailwind-styled-components";

const ReviewTasksContainer = tw.div`
	flex
	flex-col
	items-start
	gap-2
	w-full
	max-md:max-h-[12vh]
	overflow-y-auto
	max-md:order-1
`;

const BubblesWrapper = tw.div`
	w-full
	flex
	flex-wrap
	gap-2
`;

export { ReviewTasksContainer, BubblesWrapper };
