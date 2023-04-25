import tw from "tailwind-styled-components"

const Container = tw.div`
	flex
	flex-row
	max-md:flex-col
	h-full
	bg-[#FFFAED]
`

const Content = tw.div`
	flex
	flex-col
	py-16
	px-24
`

const Title = tw.div`
	text-5xl
	text-[#0d0d0d]
`

const Subtitle = tw.div`
	text-sm
	mb-6
	text-overflow
	text-[#0d0d0d]
`

const PanelsScroller = tw.div`
	grid
	grid-flow-col
	auto-cols-[27%]
	gap-6
	my-11
	p-10
	overflow-x-auto
	overscroll-contain
	min-w-[65vw]
	max-w-[30rem]

	snap-mandatory
	snap-x
	scroll-pl-10 // add padding to scroll
	scrollbar
`

const Panel = tw.div`
	grid
	auto-rows-min	
	gap-6
	text-sm
	mb-6
	border
	border-[#dcdcdc]
	rounded-[46px]
	p-6
	bg-[#fffcf5]

	snap-normal
	snap-start
`

export {Container, Content, Title, Subtitle, PanelsScroller, Panel}