import tw from "tailwind-styled-components";

const Container = tw.div`
	flex
	min-w-[20rem]
	max-w-[20rem]
	bg-[#FFC120]
	max-md:min-w-full
	p-8
	select-none

	border-solid
	border
	border-[#8d8d8d]
	rounded-tr-[50px]
	border-l-0

	m-0
	`;

const Navigation = tw.aside`
	w-full
`;

const ChapterTitle = tw.div`
	flex
	${(props) => (props.active ? "text-[#8d8d8d]" : "text-[#0d0d0d]")}
	text-base
	cursor-pointer
	hover:text-[#8d8d8d]
	items-center
`;

const ChapterList = tw.ul`
	flex
	flex-col
	gap-4
`;

const Chapter = tw.li`
	flex
	flex-col
	text-left
`;

const TopicList = tw.ul`
	text-base
`;

const Item = tw.li`
	hover:text-[#8d8d8d]
	font-sans
	cursor-pointer
`;

export {
	Container,
	ChapterTitle,
	ChapterList,
	Navigation,
	Chapter,
	TopicList,
	Item,
};
