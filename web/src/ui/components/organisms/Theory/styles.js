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
`

const Subtitle = tw.div`
	text-sm
	mb-6
	text-overflow
`

const PanelsScroller = tw.div`
	grid
	grid-flow-col
	auto-cols-[27%]
	gap-6
	bg-[#fffcf5]
	my-11
	overflow-x-auto
	overscroll-contain
	min-w-[65vw]
	max-w-[30rem]

	snap-mandatory
	snap-x
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

	snap-normal
	snap-start
`

export {Container, Content, Title, Subtitle, PanelsScroller, Panel}