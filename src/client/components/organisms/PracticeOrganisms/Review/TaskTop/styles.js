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

const ImageBox = tw.div`
relative
flex
self-center
items-center
justify-center
h-auto
overflow-hidden
rounded-[39px]
xl:w-[975px]
lg:w-[832px]
md:w-[640px]
max-md:min-w-screen
max-md:min-h-[calc(100vw*0.5625)]

max-md:rounded-none
bg-[#FFE5A3]
`;

export { TaskTopSection, TaskInfo, ImageBox };
