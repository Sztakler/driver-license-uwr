import tw from "tailwind-styled-components";

const Container = tw.div`
	grid
	grid-flow-col
	auto-cols-[20%]
	max-md:auto-cols-[70%]
	gap-4
	overflow-x-auto
	overscroll-contain
	snap-mandatory
	snap-x
	scroll-pl-10
	scrollbar
`;

const Panel = tw.div`
	flex
	flex-col
	gap-8
	text-sm
	mb-6
	border
	border-[#dcdcdc]
	rounded-[39px]
	p-6
	bg-[#fffcf5]
	max-h-[500px]
	overflow-y-auto

	snap-normal
	snap-start
`;

export { Container, Panel };
