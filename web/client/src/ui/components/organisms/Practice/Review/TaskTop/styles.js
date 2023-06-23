import tw from "tailwind-styled-components";

const TaskTopSection = tw.div`
	flex
	flex-col
	relative
	max-h-[611px]
	max-2xl:w-full
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

const ImageBox = tw.div`
	relative
	flex
	self-center
	items-center
	justify-center
	w-[928px]
	h-[522px]
	overflow-hidden
	border-2
	border-[#424242]
	rounded-lg
	bg-[#FFE5A3]

	max-2xl:w-full
	max-2xl:h-auto
`;

export { TaskTopSection, TaskInfo, ImageBox };
