import tw from "tailwind-styled-components";

const TaskTopSection = tw.div`
	flex
	flex-col
	relative
	max-h-[611px]
	max-2xl:w-full
	max-md:pt-12
`;

const TaskInfo = tw.div`
	flex
	flex-row
	flex-wrap
	items-end
	self-center
 	justify-around
	w-full
	pb-1
	mt-2
`;

const InfoWrapper = tw.div`
	flex
	flex-row
	flex-wrap
	items-end
	self-center
 	justify-around
	w-full
	pb-1
	mt-2
`;

export { TaskTopSection, TaskInfo, InfoWrapper };
