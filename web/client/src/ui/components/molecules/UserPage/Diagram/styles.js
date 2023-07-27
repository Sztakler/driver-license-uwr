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
	max-lg:w-[450px]
	max-lg:h-[450px]
	max-md:w-[300px]
	max-md:h-[200px]
	max-sm:w-[200px]
	max-sm:h-[100px]

	p-4
	py-8
`;

export { DiagramContainer };
