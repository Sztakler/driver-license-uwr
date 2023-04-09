import tw from "tailwind-styled-components"

const Container = tw.div`
	flex
	min-w-[25rem]
	max-w-[25rem]
	bg-[#ececec]
	max-md:min-w-full
	p-8
	select-none
`

const Navigation = tw.nav`
	w-full
`

const ChapterTitle = tw.div`
	flex
	${(props)=>props.active ? "text-black" : "text-[#6b6b6b]"}
	text-xl
	cursor-pointer
	hover:text-black
	items-center
`

const ChapterList = tw.ul`
	flex
	flex-col
	gap-4
`

const Chapter = tw.li`
	flex
	flex-col
	items-center
	text-center
`

const TopicList = tw.ul`
	text-lg
`

const Item = tw.li`
	hover:text-[#555555]
	cursor-pointer
`

export {Container, ChapterTitle, ChapterList, Navigation, Chapter, TopicList, Item}