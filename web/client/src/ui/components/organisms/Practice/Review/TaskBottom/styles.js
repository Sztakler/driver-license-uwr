import tw from "tailwind-styled-components";

const TaskBottomSection = tw.div`
	flex
	flex-col
	w-[928px]
	mt-2

	max-2xl:w-full
`;

const Answers = tw.div`
	flex
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
