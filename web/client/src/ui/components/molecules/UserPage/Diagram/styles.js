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
	max-md:border-0
	bg-[#FFFAED]
	w-[600px]
	h-[500px]
	break-words
	whitespace-normal

	p-4
	pt-16
	max-md:pt-4
`;

const DateRange = tw.div`
	flex
	flex-row
	w-full
	justify-center
	gap-4
	mt-4
	`;

export { DiagramContainer, DateRange };
