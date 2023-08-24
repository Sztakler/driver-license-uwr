import tw from "tailwind-styled-components";

const ViewsNavigationContainer = tw.div`
	flex
	flex-row
	flex-wrap
	w-full
	px-56
	py-3
	gap-2

	max-lg:px-8
	max-lg:my-4
	max-md:px-4
	max-lg:bg-gradient-to-b
	max-lg:from-[#FEDDAC]
	max-lg:via-[#FFE9C8]
	max-lg:to-[#FFF1DB]
	max-lg:rounded-[18px]
	`;

const NavigationItem = tw.div`
	flex
	flex-row
	gap-2
	rounded-[39px]
	px-2
	py-1
	${(props) => (props.active ? "bg-[#FFD363]" : "")}
	cursor-pointer
	hover:bg-[#ffd363a9]
	items-center
`;

export { ViewsNavigationContainer, NavigationItem };
