import tw from "tailwind-styled-components";

const UserContainer = tw.div`
	flex
	flex-row
	w-full
	px-56
	mt-12
`;

const Info = tw.div`
	flex
	flex-col
	mt-2
`;

const ImageBox = tw.div`
	w-20
	h-20
	mr-4
`;

export { UserContainer, Info, ImageBox };
