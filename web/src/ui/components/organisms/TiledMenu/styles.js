import tw from "tailwind-styled-components";

const TiledMenuWrapper = tw.div`
	flex
	flex-col
	flex-wrap
	justify-between
	gap-12
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
`

const OptionsContainer = tw.div`
	w-full
	flex
	flex-col
	max-2xl:items-center
	bg-[#fff0e0]
	rounded-2xl
	p-4
`

export { TiledMenuWrapper,InfoSection, Options, OptionsContainer};
