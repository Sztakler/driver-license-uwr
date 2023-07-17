import tw from "tailwind-styled-components";

const ListAlign = tw.div`
flex
flex-col
px-48
h-[calc(100vh-360px)]
mb-24
mt-6
`

const InnerContainer = tw.div`
flex
flex-col
self-center
bg-[#FCF1DB]
border
border-[#CECECE]
rounded-xl
h-full
w-full
`

const Questions = tw.div`

`


const ListItem = tw.button`
flex
flex-col
w-full
border-b
border-[#CECECE]
px-14
`

const ItemHeader = tw.div`
flex
flex-row
w-full
py-6
justify-between
`

const ItemBody = tw.div`

`

const StatusIcon = tw.image`

`

const Header = tw.div`
flex
flex-row
gap-8
py-8
px-16
border-b
border-[#CECECE]
`

const FiltersList = tw.div`
flex
flex-row
gap-2
items-center
`

const Filter = tw.div`
flex
flex-row
flex-wrap
items-center
`

const Name = tw.text`
    font-medium
`



export { ListAlign, InnerContainer, ListItem, Header, FiltersList, Filter, Name, StatusIcon, ItemBody, ItemHeader, Questions};
