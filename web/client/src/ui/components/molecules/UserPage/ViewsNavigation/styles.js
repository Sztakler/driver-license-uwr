import tw from "tailwind-styled-components";

const ViewsNavigationContainer = tw.div`
	flex
	flex-row
	w-full
	px-56
	py-3
	gap-2
`;

const NavigationItem = tw.div`
	flex
	flex-row
	gap-2
	rounded-3xl
	px-2
	py-1
	${(props) => (props.active ? "bg-[#FFD363]" : "")}
	cursor-pointer
	hover:bg-[#ffd363a9]
	items-center
`;

export { ViewsNavigationContainer, NavigationItem };
