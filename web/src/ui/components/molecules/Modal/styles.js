import tw from "tailwind-styled-components";

const ModalContainer = tw.div`
	flex
	justify-center
	items-center
	fixed
	top-0
	left-0
	w-full
	h-full
	bg-[#FDDB8A]
	bg-opacity-50
	overflow-x-hidden
	overflow-y-auto
	z-50
	p-4
	invisible
	transition-all ease-linear duration-700
	${(props) => (props.show ? "visible opacity-100" : "invisible opacity-0")}
`;

const ModalDialog = tw.div`
	relative
	w-auto
	my-auto
	max-w-[600px]
`;

const ModalContent = tw.div`
	relative
	flex
	flex-col

	bg-[#FFFAED]
	border-2
	border-[#101010]
	rounded-xl
	px-4
	pt-16
	pb-14
	text-lg
	text-start
`;

const ModalBody = tw.div`
	flex
	flex-col
	justify-center
	items-center
	px-8
	gap-4
`;

const ModalOptions = tw.div`
`;

export { ModalContainer, ModalDialog, ModalContent, ModalOptions, ModalBody };
