import tw from "tailwind-styled-components";

const ExamContainer = tw.div`
  h-[calc(100vh-91px)]
  h-full
  pt-0
  mt-0
  py-4
  px-10
  grid
  grid-cols-8
  grid-rows-1
  gap-8
  self-center
  justify-center
  text-base
`;

const MainContent = tw.div`
  col-span-6
  w-full
  h-full
`;

const Menu = tw.div`
  col-span-2
  justify-self-end
  h-full
  flex
  flex-col
`;


const MenuTop = tw.div`
  pb-10
`;

const MenuTopMid = tw.div`
  pb-20
`;
const MenuBotMid = tw.div`
  pb-60
`;
const MenuBottom = tw.div`
`;

const QuestionInfo = tw.div`
  flex
  flex-row
  gap-8
`;


const MediaContainer = tw.div`
flex
justify-center
p-4
`;

const QuestionContent = tw.div`
flex
flex-col
`;


const AnswerInput = tw.input`
hidden
peer 
`;

const AnswerText = tw.p`
peer-checked:opacity-50
`;

const AnswersForm = tw.form`
flex
flex-col
gap-4
`;

const AnswerMarker = tw.div`
font-mono
bg-blue-500
text-white
text-2xl
border
border-black
py-1
px-2
peer-checked:opacity-50
`;

const SelectButton = tw.button`
bg-blue-500
text-white
text-2xl
border
border-black
py-1
px-2
hover:opacity-70
`;

const NavigationButton = tw.button`
bg-yellow-500
text-white
text-2xl
border
border-black
w-full
py-1
px-2
hover:opacity-70
`;

const NextQuestionButton = tw.button`
bg-yellow-500
text-white
text-2xl
border
border-black
w-full
py-4
px-4
hover:opacity-70
`;

const ExamNavigation = tw.div`
w-full
flex
justify-between
items-center
`;

const ExamInfo = tw.div`
grid
grid-cols-2
justify-around
gap-24
`;

const ExamTimerContainer = tw.div`
flex
flex-col
items-center
gap-4
`;

const ExamTimer = tw.div`
  text-white
  w-full
  h-full
  flex
  flex-row
  gap-4
`;

const TimerOuterBar = tw.div`
relative flex-start flex h-full  w-full overflow-hidden bg-gray-400 text-2xl font-medium
`;

const TimerInnerBar = tw.div`
fleix h-full items-center justify-center overflow-hidden break-all bg-yellow-500
`;

const TimerText = tw.div`
  absolute
  left-1/2
  top-1/2
  -translate-x-1/2
  -translate-y-1/2
`;

const InfoValue = tw.div`
flex
justify-center
items-center
bg-sky-600
border
border-black
text-white
font-mono
py-1
px-2
`;

const InfoValueFullWidth = tw.div`
flex
justify-center
items-center
bg-sky-600
border
border-black
text-white
py-1
px-2
w-full
`;

const InfoText = tw.p`
text-xl
`;

const AnswerLabel = tw.label`
flex
items-center
gap-4
text-base
hover:opacity-70
`;

const QuestionHeader = tw.h1`
text-2xl
text-blue-600
`;

const InfoElementRow = tw.div`
flex
flex-row
items-center
gap-2
`;

const InfoElementColumn = tw.div`
flex
flex-col
items-start
gap-2
`;

export {
  ExamContainer,
  MainContent,
  Menu,
  MenuTop,
  MenuTopMid,
  MenuBotMid,
  MenuBottom,
  QuestionInfo,
  QuestionContent,
  ExamInfo,
  ExamNavigation,
  MediaContainer,
  InfoValue,
  InfoValueFullWidth,
  InfoElementRow,
  InfoElementColumn,
  AnswersForm,
  QuestionHeader,
  InfoText,
  AnswerLabel,
  AnswerText,
  NavigationButton,
  NextQuestionButton,
  ExamTimer,
  ExamTimerContainer,
  SelectButton,
  AnswerMarker,
  AnswerInput,
  TimerOuterBar,
  TimerInnerBar,
  TimerText,
};
