import tw from "tailwind-styled-components";

const ExamContainer = tw.div`
	h-[calc(100vh-91px)]
  h-full
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

const UpperSection = tw.section`
	flex 
	flex-row 
	items-center 
	justify-center 
	w-full
	gap-12
	h-2/3
`;

const LowerSection = tw.section`
flex 
flex-row 
container
items-center 
justify-center 
w-full
gap-48
h-1/3
`;


const HeaderContainer = tw.div`
	flex
	flex-col
	h-full
`;

const TitleContainer = tw.div`
	flex 
	flex-col
	pl-44
`;

const IllustrationContainer = tw.div`
	flex
	flex-col
	mb-20
`;


const Title = tw.div`
	text-5xl
	text-[#0d0d0d]
	font-display
`;

const Subtitle = tw.div`
	text-sm
	text-overflow
	text-[#0d0d0d]
`;

const ExamStartPanel = tw.div`

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


const AnswersList = tw.ul`
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

const AnswerListElement = tw.button`
  flex
  flex-row
  gap-4
  align-center
  leading-loose
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

const ExamTimer = tw.progress`

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

const AnswerText = tw.p`
  flex
  items-center
  text-base
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
	UpperSection,
	LowerSection,
	ExamStartPanel,
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
  AnswersList,
  AnswerListElement,
  QuestionHeader,
  InfoText,
  AnswerText,
  NavigationButton,
  NextQuestionButton,
  ExamTimer,
  ExamTimerContainer,
  SelectButton,
  AnswerMarker,
  Title,
  Subtitle,
  HeaderContainer,
  TitleContainer,
  IllustrationContainer,
};
