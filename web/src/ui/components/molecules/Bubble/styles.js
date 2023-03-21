import tw from "tailwind-styled-components";

function assignBubbleSize(size) {
	let bubbleSize = "h-6 w-6"

	if (size === "s") {
		bubbleSize = "h-8 w-8";
	}
	if (size === "m") {
		bubbleSize = "h-10 w-10";
	}
	if (size === "l") {
		bubbleSize = "h-12 w-12";
	}
	if (size === "xl") {
		bubbleSize = "h-14 w-14";
	}
	if (size === "2xl") {
		bubbleSize = "h-16 w-16";
	}

	return bubbleSize;
}
const BubbleContainer = tw.div`
	flex
	items-center
	justify-center
	rounded-full
	border-2
	border-white
	hover:bg-gray-800
	cursor-pointer
	${(props) => assignBubbleSize(props.size)}
`;

export {
	BubbleContainer,
};
