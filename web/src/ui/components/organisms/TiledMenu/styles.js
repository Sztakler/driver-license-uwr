import tw from "tailwind-styled-components";

const TiledMenuWrapper = tw.div`
	container
	flex
	flex-auto
	flex-col
	self-center
	items-center
	justify-center
	p-10
	mb-16
`;

const Grid = tw.div`
	grid 
	grid-cols-2 
	auto-rows-fr 
	gap-6 
	max-w-screen-lg
`;

export { TiledMenuWrapper, Grid };
