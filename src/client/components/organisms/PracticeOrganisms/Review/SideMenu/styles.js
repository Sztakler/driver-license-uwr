import tw from "tailwind-styled-components";

const MenuContainer = tw.div`
	flex
	flex-row
	flex-wrap
	flex-grow
	items-start
	justify-start
	content-start
	gap-8
	md:bg-gradient-to-b md:from-[0px] md:from-[#FFDFA3] md:to-[#FFE8BC00] md:to-100%
	text-center
	p-4
	mt-[36px]
	rounded-[39px]
	max-md:rounded-none
	max-w-[458px]
	max-h-[558px]
	ml-[112px]
	md:relative
	
	xl:w-[975px]
	lg:w-[832px]
	md:w-[640px]
	max-2xl:flex-none
	max-2xl:w-full
	max-2xl:max-w-full
	max-2xl:gap-4
	max-2xl:m-0
	max-md:px-2
	max-md:py-0
	overflow-y-auto
`;

const NextPrevious = tw.div`
	flex
	flex-col-reverse
	items-start
	self-start
	md:gap-4
	w-full
	max-md:order-4

	max-2xl:flex-row
	max-2xl:[&>*]:w-[50%]
	max-md:[&>*]:w-auto
	${(props) => props.isExam && "max-md:[&>*]:w-full px-2"}
	max-md:absolute
	max-md:bottom-2
	max-md:left-0
	max-md:w-full
	max-md:justify-around
	max-md:px-2

`;

export { MenuContainer, NextPrevious };
