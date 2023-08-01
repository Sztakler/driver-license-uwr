import tw from "tailwind-styled-components";

const DiagramContainer = tw.div`
	flex
	flex-col
	relative
	justify-center
	items-center
	border
	border-[#0D0D0D]
	rounded-[39px]
	bg-[#FFFAED]
	w-[600px]
	h-[500px]
	break-words
	whitespace-normal


	p-4
	pt-16
	max-md:pt-4
`;

export { DiagramContainer };
