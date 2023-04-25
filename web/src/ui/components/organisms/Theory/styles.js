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
`

const PanelsContainer = tw.div`
	grid
	grid-cols-3	
	gap-6
	bg-[#fffcf5]
	my-11
`

const Panel = tw.div`
	flex
	flex-col
	justify-start
	gap-6
	text-sm
	mb-6
	border
	border-[#dcdcdc]
	rounded-[46px]
	p-6
`

export {Container, Content, Title, Subtitle, PanelsContainer, Panel}