import tw from "tailwind-styled-components";

const Subtitle = tw.div`
	text-sm
	text-overflow
	text-[#0d0d0d]
`;

const Container = tw.div`
flex flex-col w-full gap-[200px]
`;

const Form = tw.form`
flex flex-row justify-center w-full h-full align-center gap-48
`;

const LeftContainer = tw.div`
flex flex-col justify-start
`;

const RightContainer = tw.div`
flex flex-col justify-start align-center
`;

const FilterName = tw.span`
font-semibold
`;

export {
  Subtitle,
  Container,
  Form,
  LeftContainer,
  RightContainer,
  FilterName,
};
