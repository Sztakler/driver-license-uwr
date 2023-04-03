import tw from "tailwind-styled-components";

const Wrapper = tw.div`
	flex
	flex-col
	flex-wrap
	gap-12
	justify-center
	w-full
	h-full
`;

const Options = tw.div`
	flex
	flex-col
	flex-wrap
	max-2xl:justify-evenly
	gap-8
	transition-opacity
	duration-[2000ms]
	${(props)=>props.show ? "opacity-1": "opacity-0"}
`

const Tiles = tw.div`
	flex
	flex-row
	flex-wrap
	justify-center
	gap-8
`

const OptionsContainer = tw.div`
	flex
	flex-col
	items-center
	max-2xl:justify-evenly
	transition-opacity
	duration-[2000ms]
	${(props)=>props.show ? "opacity-1": "opacity-0"
}
`

export { Wrapper, Tiles, Options, OptionsContainer};
