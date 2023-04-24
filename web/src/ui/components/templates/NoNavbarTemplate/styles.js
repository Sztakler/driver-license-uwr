import tw from "tailwind-styled-components";

const PageWrapper = tw.div`
	flex 
	flex-col
	relative 
	min-w-screen
	bg-[#FFEFD0]
	min-h-screen
`

const MainContent = tw.div`
	flex
	flex-col
	flex-[1_1_auto]
	self-center
	w-full
	justify-center
	items-center
	h-auto
	min-h-screen
	py-8
`

export { PageWrapper, MainContent };
