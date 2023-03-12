import tw from "tailwind-styled-components";

const FooterContainer = tw.div`
	flex
	justify-center
	items-center
	absolute
	bottom-0
	h-16                                                                                                                                                                                                               
	w-full
	bg-white
`;

const Text = tw.span`
 	text-[21px]
`;

export { FooterContainer, Text };
