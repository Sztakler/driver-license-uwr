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

export {Container, Content}