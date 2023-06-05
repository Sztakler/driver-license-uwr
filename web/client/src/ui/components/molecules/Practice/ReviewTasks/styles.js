import tw from "tailwind-styled-components";

const ReviewTasksContainer = tw.div`
	flex
	flex-col
	items-start
	gap-2
	h-full
	w-full
	overflow-y-scroll
`;

const BubblesWrapper = tw.div`
	w-full
	flex
	flex-wrap
	gap-2
`;

export { ReviewTasksContainer, BubblesWrapper };
