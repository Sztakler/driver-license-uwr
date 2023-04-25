import tw from "tailwind-styled-components"

const Container = tw.div`
	flex
	min-w-[20rem]
	max-w-[20rem]
	bg-[#FFFAED]
	max-md:min-w-full
	p-8
	select-none

	border-solid
	border-2
	border-[#606060]
	rounded-3xl
	`

const Navigation = tw.nav`
	w-full
`

const ChapterTitle = tw.div`
	flex
	${(props)=>props.active ? "text-[#666660]" : "text-[#6b6b6b]"}
	text-base
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
	text-base
`

const Item = tw.li`
	hover:text-[#555555]
	cursor-pointer
`

export {Container, ChapterTitle, ChapterList, Navigation, Chapter, TopicList, Item}