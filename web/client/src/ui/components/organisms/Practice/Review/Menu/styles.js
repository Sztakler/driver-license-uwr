import tw from "tailwind-styled-components";

const MenuContainer = tw.div`
	flex
	flex-row
	flex-wrap
	flex-grow
	items-start
	justify-start
	gap-16
	${(props) => (props.inReviewMode ? "gap-4" : "gap-16")}
	text-center
	p-4
	mt-[36px]
	bg-[#FFF6E4]
	rounded-xl
	shadow-xl
	max-w-[528px]
	max-h-[558px]
	ml-[112px]

	max-2xl:flex-none
	max-2xl:w-full
	max-2xl:max-w-full
	max-2xl:gap-4
	max-2xl:m-0
	overflow-hidden
`;

const NextPrevious = tw.div`
	flex
	flex-col-reverse
	items-start
	gap-4
	w-full

	max-2xl:flex-row
	max-2xl:[&>*]:w-[50%]
`;

export { MenuContainer, NextPrevious };
