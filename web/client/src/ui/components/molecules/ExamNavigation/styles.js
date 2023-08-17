import tw from "tailwind-styled-components";

const NavigationContainer = tw.div`
p-10 w-full h-full flex flex-col items-center justify-center gap-12
`;

const QuestionCountersContainer = tw.div`
flex flex-row gap-12 mb-5
`;

const QuestionCounter = tw.div`
flex flex-col
`;

const Counter = tw.div`
bg-blue-500 text-white text-center p-2
`;

const TimerContainer = tw.div`
flex flex-col items-center justify-center mb-25
`;


export {
    NavigationContainer,
    QuestionCountersContainer,
    QuestionCounter,
    Counter,
    TimerContainer
};