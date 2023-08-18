import tw from "tailwind-styled-components";

const DiagramContainer = tw.div`
	flex
	flex-col
	relative
	justify-center
	items-center
	max-md:justify-start
	border
	border-[#0D0D0D]
	rounded-[39px]
	max-md:border-0
	bg-[#FFFAED]
	w-[600px]
	h-[500px]
	max-md:h-[330px]
	break-words
	whitespace-normal

	p-4
	pt-16
	max-md:pt-0
	max-md:px-2
`;

const Header = tw.div`
	flex
	flex-row
	w-full
	justify-center
	gap-4
	mb-4
`;

const DateRange = tw.div`
	flex
	flex-row
	w-full
	justify-center
	gap-4
	mt-4
	`;

export { DiagramContainer, Header, DateRange };
