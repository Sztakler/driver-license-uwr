import tw from "tailwind-styled-components";

const TaskBottomSection = tw.div`
	flex
	flex-col
	w-[928px]
	mt-2
	self-center
	
	xl:w-[975px]
	lg:w-[832px]
	md:w-[640px]
	max-2xl:w-full
	max-2xl:max-w-[912px]
	max-md:overflow-y-auto
`;

const Answers = tw.div`
	flex
	flex-wrap
	gap-y-4
	${(props) =>
		props.row ? "flex-row justify-around" : "flex-col justify-around gap-4"}
	mt-6
`;

const Answer = tw.div`
	flex
	flex-row
	items-center
	gap-2
`;
export { Answers, Answer, TaskBottomSection };
