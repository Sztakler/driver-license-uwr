import tw from "tailwind-styled-components";

const ResultsTableContainer = tw.table`
	my-8
	max-md:my-2
`;

const TableHeader = tw.th`
	text-base
	max-w-[145px]
	break-words
	max-md:text-left
	px-5
	max-md:max-w-[150px]
`;

const TableRow = tw.tr`
	h-[50px]

`;

const TableData = tw.td`
	max-md:items-center
	text-5xl
	max-md:text-right
	w-[60px]
	font-semibold
	py-3
	max-md:py-[1.2vh]
`;

export { ResultsTableContainer, TableHeader, TableRow, TableData };
