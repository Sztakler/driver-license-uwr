import tw from "tailwind-styled-components";

const TiledMenuWrapper = tw.div`
	flex
	flex-col
	flex-wrap
	gap-12
	justify-center
	w-full
	h-full
`;

const InfoSection = tw.div`
	flex
	flex-col
`

const Options = tw.div`
	flex
	flex-row
	flex-wrap
	max-2xl:justify-evenly
	gap-8
	transition-opacity
	duration-[2000ms]
	${(props)=>props.show ? "opacity-1": "opacity-0"}
`

const OptionsContainer = tw.div`
	flex
	flex-col
	self-center
	items-center
	rounded-2xl
	h-96
	p-12
`

export { TiledMenuWrapper,InfoSection, Options, OptionsContainer};
