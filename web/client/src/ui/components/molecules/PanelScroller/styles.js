import tw from "tailwind-styled-components";

const Container = tw.div`
	grid
	grid-flow-col
	auto-cols-[30%]
	gap-4
	pt-10
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
	max-w-[440px]
	max-h-[590px]
	aspect-[1/2]

	snap-normal
	snap-start
`;

export { Container, Panel };
