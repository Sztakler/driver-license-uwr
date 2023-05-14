import tw from "tailwind-styled-components";

function assignBubbleSize(size) {
	let bubbleSize = "min-h-[24px] min-w-[24px]";

	if (size === "s") {
		bubbleSize = "min-w-[32px] max-w-[32px] min-h-[32px] max-h-[32px]";
	}
	if (size === "m") {
		bubbleSize = "min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px]";
	}
	if (size === "l") {
		bubbleSize = "min-w-[48px] max-w-[48px] min-h-[48px] max-h-[48px]";
	}

	return bubbleSize;
}

const bubblePrimaryClasses = `
	relative
	border-2
	border-white
	hover:bg-gray-800
`;

const bubbleSecondaryClasses = `
	group
	border-2
	border-black
`;

const BubbleContainer = tw.div`
	flex
	items-center
	justify-center
	rounded-full
	cursor-pointer
	${(props) => props.primary && bubblePrimaryClasses}
  ${(props) => props.secondary && bubbleSecondaryClasses}
	${(props) => (props.picked ? "bg-[#FFD363]" : "bg-white")}
	${(props) => (props.active ? "border-[3px] font-semibold" : "")}
	${(props) => (props.hover ? "hover:bg-[#FFD363]" : "")}
	${(props) => assignBubbleSize(props.size)}
	${(props) => (props.correct ? "bg-[#91CE6B]" : "")}
	${(props) => (props.incorrect ? "bg-[#FF6130]" : "")}
`;

export { BubbleContainer };
