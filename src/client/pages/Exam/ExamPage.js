import React, { useEffect, useState } from "react";
import Image from "client/components/atoms/Image";

import NoNavbarTemplate from "client/components/templates/NoNavbarTemplate";
import Navbar from "client/components/organisms/Navbar";
import Footer from "client/components/organisms/Footer";

const json = [
	{
		nazwa_pytania: "W5(4)",
		numer_pytania: "478",
		pytanie:
			"Czy w tej sytuacji nadawany sygna\u0142 \u015bwietlny oznacza, \u017ce podczas jazdy w prawo nie wyst\u0119puje kolizja z innymi uczestnikami ruchu?",
		odpowiedzi: ["Tak", "Nie"],
		poprawna_odpowiedz: 0,
		media: "066D16_a_org.jpg",
		zakres_struktury: "PODSTAWOWY",
		liczba_punktow: "3",
		kategorie: "A,B,C",
		nazwa_bloku: "W5",
		zrodlo_pytania:
			"\u00a7 97 ust. 3 rozporz\u0105dzenia Ministr\u00f3w Infrastruktury oraz Spraw Wewn\u0119trznych i Administracji z dnia 31 lipca 2002 r. w sprawie znak\u00f3w i sygna\u0142\u00f3w drogowych (Dz.U. Nr 170, poz. 1393, z p\u00f3\u017an. zm.)",
		o_co_chcemy_zapytac:
			"Znajomo\u015b\u0107 wiedzy w zakresie sygnalizacji \u015bwietlnej",
		jaki_ma_zwiazek_z_bezpieczenstwem:
			"Konfrontacja, kt\u00f3rej skutkiem jest bezpo\u015brednie zagro\u017cenie dla zdrowia lub \u017cycia",
		status: "Gotowe ostatecznie",
		podmiot: "PWPW",
	},
	{
		nazwa_pytania: "W5(5)",
		numer_pytania: "480",
		pytanie:
			"Czy w tej sytuacji nadawany sygna\u0142 \u015bwietlny zezwala Ci na wjazd za sygnalizator?",
		odpowiedzi: ["Tak", "Nie"],
		poprawna_odpowiedz: 1,
		media: "IMG_0325_9550d5_a_org.jpg",
		zakres_struktury: "PODSTAWOWY",
		liczba_punktow: "3",
		kategorie: "A,B,C",
		nazwa_bloku: "W5",
		zrodlo_pytania:
			"\u00a7 95 i \u00a7 97 ust. 1 i 2 rozporz\u0105dzenia Ministr\u00f3w Infrastruktury oraz Spraw Wewn\u0119trznych i Administracji z dnia 31 lipca 2002 r. w sprawie znak\u00f3w i sygna\u0142\u00f3w drogowych (Dz.U. Nr 170, poz. 1393, z p\u00f3\u017an. zm.)",
		o_co_chcemy_zapytac:
			"Znajomo\u015b\u0107 znaczenia sygna\u0142\u00f3w \u015bwietlnych",
		jaki_ma_zwiazek_z_bezpieczenstwem:
			"Nieznajomo\u015b\u0107 znaczenia znak\u00f3w i sygna\u0142\u00f3w drogowych prowadzi do ich nieprzestrzegania, co powoduje realne zagro\u017cenie bezpiecze\u0144stwa i wiele wypadk\u00f3w drogowych",
		status: "Gotowe ostatecznie",
		podmiot: "PWPW",
	},
	{
		nazwa_pytania: "W5(7)",
		numer_pytania: "486",
		pytanie:
			"Czy w tej sytuacji wolno Ci skr\u0119ci\u0107 w prawo, je\u015bli nie spowodujesz tym utrudnienia ruchu?",
		odpowiedzi: ["Tak", "Nie"],
		poprawna_odpowiedz: 1,
		media: "0084D18_a_org.jpg",
		zakres_struktury: "PODSTAWOWY",
		liczba_punktow: "3",
		kategorie: "A,B,C",
		nazwa_bloku: "W5",
		zrodlo_pytania:
			"\u00a7 97 rozporz\u0105dzenie Ministr\u00f3w Infrastruktury oraz Spraw Wewn\u0119trznych i Administracji z dnia 31 lipca 2002 r. w sprawie znak\u00f3w i sygna\u0142\u00f3w drogowych (Dz. U. Nr 170, poz. 1393, z p\u00f3\u017an. zm.).",
		o_co_chcemy_zapytac:
			"Znajomo\u015b\u0107 wiedzy w zakresie sygnalizacji \u015bwietlnej",
		jaki_ma_zwiazek_z_bezpieczenstwem:
			"Konfrontacja, kt\u00f3rej skutkiem jest bezpo\u015brednie zagro\u017cenie dla zdrowia lub \u017cycia",
		status: "Gotowe ostatecznie",
		podmiot: "PWPW",
	},
	{
		nazwa_pytania: "W4(1)",
		numer_pytania: "544",
		pytanie:
			"Czy w tej sytuacji wolno Ci zmieni\u0107 zajmowany pas ruchu, gdy zamierzasz jecha\u0107 na wprost?",
		odpowiedzi: ["Tak", "Nie"],
		poprawna_odpowiedz: 0,
		media: "IMG_9324_org.jpg",
		zakres_struktury: "PODSTAWOWY",
		liczba_punktow: "1",
		kategorie: "A,B,C",
		nazwa_bloku: "W4",
		zrodlo_pytania:
			"\u00a7 86 ust. 1 i 2 rozporz\u0105dzenia Ministr\u00f3w Infrastruktury oraz Spraw Wewn\u0119trznych i Administracji z dnia 31 lipca 2002 r. w sprawie znak\u00f3w i sygna\u0142\u00f3w drogowych (Dz.U. Nr 170, poz. 1393 ze. zm.)",
		o_co_chcemy_zapytac:
			"Znajomo\u015b\u0107  znaczenia znaku poziomego P-1 o podw\u00f3jnej szeroko\u015bci oraz ogranicze\u0144 z tym zwi\u0105zanych",
		jaki_ma_zwiazek_z_bezpieczenstwem:
			"Znajomo\u015b\u0107 i stosownie sie do znaku poziomego P-1 pozwala na podejmowanie odpowiednich decyzji i unikanie sytuacji zagra\u017cajacych bezpieczenstwu lub porz\u0105dkopwi ruchu",
		status: "Gotowe ostatecznie",
		podmiot: "PWPW",
	},
	{
		nazwa_pytania: "D2(36)",
		numer_pytania: "6856",
		pytanie:
			"Czy zanim rozpoczniesz jazd\u0119 autobusem wyposa\u017conym w wyj\u015bcia awaryjne, masz obowi\u0105zek upewni\u0107 si\u0119, \u017ce dost\u0119p do nich nie jest utrudniony?",
		odpowiedzi: [
			"Nie.",
			"Nie, je\u015bli liczba miejsc dla pasa\u017cer\u00f3w jest mniejsza ni\u017c 35.",
			"Tak.",
		],
		poprawna_odpowiedz: 2,
		media: "6A203.jpg",
		zakres_struktury: "SPECJALISTYCZNY",
		liczba_punktow: "2",
		kategorie: "D,D1",
		nazwa_bloku: "D2",
		zrodlo_pytania:
			"\u00a719 ust. 1 Rozporz\u0105dzenia w sprawie warunk\u00f3w technicznych pojazd\u00f3w oraz zakresu ich niezb\u0119dnego wyposa\u017cenia (Dz.U. Nr 58 z 2003 r. z p\u00f3\u017an. zm.)",
		o_co_chcemy_zapytac:
			"Zasady i przepisy s\u0142u\u017c\u0105ce bezpiecznemu poruszaniu si\u0119 pojazdem po drodze publicznej",
		jaki_ma_zwiazek_z_bezpieczenstwem:
			"Kszta\u0142cenie umiej\u0119tno\u015bci bezpiecznego uczestnictwa w ruchu drogowym",
		status: "Gotowe ostatecznie",
		podmiot: "ITS",
	},
	{
		nazwa_pytania: "D2(37)",
		numer_pytania: "6857",
		pytanie:
			"Jaka jest maksymalna dopuszczalna d\u0142ugo\u015b\u0107 zespo\u0142u pojazd\u00f3w z\u0142o\u017conego z autobusu i przyczepy?",
		odpowiedzi: ["22 m.", "18,75 m.", "16,5 m."],
		poprawna_odpowiedz: 1,
		media: "6A206.jpg",
		zakres_struktury: "SPECJALISTYCZNY",
		liczba_punktow: "2",
		kategorie: "D,D1",
		nazwa_bloku: "D2",
		zrodlo_pytania:
			"\u00a7 2 ust. 1 pkt 8 Rozporz\u0105dzenia w sprawie warunk\u00f3w technicznych pojazd\u00f3w oraz zakresu ich niezb\u0119dnego wyposa\u017cenia (Dz.U. Nr 58 z 2003 r. z p\u00f3\u017an. zm.).",
		o_co_chcemy_zapytac:
			"Zasady i przepisy s\u0142u\u017c\u0105ce bezpiecznemu poruszaniu si\u0119 pojazdem po drodze publicznej",
		jaki_ma_zwiazek_z_bezpieczenstwem:
			"Kszta\u0142cenie umiej\u0119tno\u015bci bezpiecznego uczestnictwa w ruchu drogowym",
		status: "Gotowe ostatecznie",
		podmiot: "ITS",
	},
	{
		nazwa_pytania: "D2(38)",
		numer_pytania: "6858",
		pytanie:
			"W jakim przypadku pasy bezpiecze\u0144stwa b\u0119d\u0105 mog\u0142y spe\u0142ni\u0107 swoj\u0105 funkcj\u0119?",
		odpowiedzi: [
			"Je\u017celi b\u0119d\u0105 w\u0142a\u015bciwie wyregulowane i zapi\u0119te.",
			"Je\u017celi b\u0119d\u0105 zapi\u0119te z du\u017cym luzem w odcinku biodrowym.",
			"Je\u017celi b\u0119d\u0105 przeprowadzone na wysoko\u015bci szyi.",
		],
		poprawna_odpowiedz: 0,
		media: "6A207.jpg",
		zakres_struktury: "SPECJALISTYCZNY",
		liczba_punktow: "2",
		kategorie: "D,D1",
		nazwa_bloku: "D2",
		zrodlo_pytania:
			"Zalecenia producenta pojazdu zawarte w Instrukcji Obs\u0142ugi AutobusuProgram szkolenia",
		o_co_chcemy_zapytac:
			"Zasady i przepisy s\u0142u\u017c\u0105ce bezpiecznemu poruszaniu si\u0119 pojazdem po drodze publicznej",
		jaki_ma_zwiazek_z_bezpieczenstwem:
			"Kszta\u0142cenie umiej\u0119tno\u015bci bezpiecznego uczestnictwa w ruchu drogowym",
		status: "Gotowe ostatecznie",
		podmiot: "ITS",
	},
];

import {
	ExamContainer,
	MainContent,
	Menu,
	MenuTop,
	MenuTopMid,
	MenuBotMid,
	MenuBottom,
	QuestionInfo,
	QuestionContent,
	MediaContainer,
	ExamInfo,
	NavigationButton,
	NextQuestionButton,
	ExamNavigation,
	InfoValue,
	InfoValueFullWidth,
	InfoElementRow,
	InfoElementColumn,
	AnswersForm,
	AnswerInput,
	AnswerText,
	QuestionHeader,
	InfoText,
	AnswerLabel,
	ExamTimer,
	TimerOuterBar,
	TimerInnerBar,
	ExamTimerContainer,
	SelectButton,
	AnswerMarker,
	TimerText,
} from "./styles";
import Button from "client/components/atoms/Button";
import Paragraph from "client/components/atoms/Paragraph";
import Modal from "client/components/molecules/Modal";
import TestImage from "/src/assets/images/test.jpg";
import { func } from "prop-types";
import { useNavigate } from "react-router";
import Illustrations from "/src/assets/images/svg/icons/Illustrations";
export default function ExamPage() {
	const [questionTime, setQuestionTime] = useState(0);
	const [examCountdown, setExamCountdown] = useState(25 * 60);
	const [totalExamTime, setTotalExamTime] = useState(25 * 60);
	const [maxQuestionTime, setMaxQuestionTime] = useState(5); // should be 25
	const [answer, setAnswer] = useState(undefined);
	const [selectedAnswers, setSelectedAnswers] = useState([]);
	const [examStarted, setExamStarted] = useState(false);
	const [exitModalShow, setExitModalShow] = useState(false);
	const [questionNumber, setQuestionNumber] = useState(1);
	const [questions, setQuestions] = useState([]);
	const [question, setQuestion] = useState({ odpowiedzi: ["", "", ""] });
	const [maxQuestionNumber, setMaxQuestionNumber] = useState(32);
	const [baseQuestionsNumber, setBaseQuestionsNumber] = useState(20);
	const [specialistQuestionsNumber, setSpecialistQuestionsNumber] =
		useState(12);

	useEffect(() => {
		/**
		 * Fetches `maxQuestionNumber' of questions from database and stores them in
		 * state variable.
		 */
		function fetchQuestions() {
			// TODO: load questions from database
			// below implementation is only a placeholder

			if (questions.length === 0) {
				const fetchedQuestions = json;
				setQuestion(fetchedQuestions[0]);
				setQuestions(fetchedQuestions);
			}
		}

		fetchQuestions();
	});

	useEffect(() => {
		const interval = setInterval(incrementTimers, 1000);
		return () => clearInterval(interval);
	}, [questionTime, examCountdown]);

	const navigate = useNavigate();
	return (
		<NoNavbarTemplate
			header={<Navbar />}
			footer={<Footer />}
			className="bg-white"
		>
			<ExamContainer>
				<MainContent>
					<QuestionInfo>
						<InfoElementRow>
							<InfoText>Wartość punktowa</InfoText>
							<InfoValue>{question.liczba_punktow}</InfoValue>
						</InfoElementRow>
						<InfoElementRow>
							<InfoText>Aktualna kategoria</InfoText>
							<InfoValue>{question.kategorie}</InfoValue>
						</InfoElementRow>
						<InfoElementRow>
							<InfoText>Czas do końca egzaminu</InfoText>
							<InfoValue>{toClockTime(examCountdown)}</InfoValue>
						</InfoElementRow>
					</QuestionInfo>
					<MediaContainer>
						<Image src={TestImage}></Image>
					</MediaContainer>
					<QuestionContent>
						<QuestionHeader>{question.pytanie}</QuestionHeader>
						{question.zakres_struktury === "PODSTAWOWY" ? (
							<AnswersForm>
								<AnswerLabel for="answer0">
									<AnswerInput
										type="radio"
										id="answer0"
										name="answer"
										value="0"
										onChange={handleAnswerChange}
									/>
									<AnswerMarker>{question.odpowiedzi[0]}</AnswerMarker>
								</AnswerLabel>
								<AnswerLabel for="answer1">
									<AnswerInput
										type="radio"
										id="answer1"
										name="answer"
										value="1"
										onChange={handleAnswerChange}
									/>
									<AnswerMarker>{question.odpowiedzi[1]}</AnswerMarker>
								</AnswerLabel>
							</AnswersForm>
						) : (
							<AnswersForm>
								<AnswerLabel for="answer0">
									<AnswerInput
										type="radio"
										id="answer0"
										name="answer"
										value="0"
										onChange={handleAnswerChange}
									/>
									<AnswerMarker>A</AnswerMarker>
									<AnswerText>{question.odpowiedzi[0]}</AnswerText>
								</AnswerLabel>
								<AnswerLabel for="answer1">
									<AnswerInput
										type="radio"
										id="answer1"
										name="answer"
										value="1"
										onChange={handleAnswerChange}
									/>
									<AnswerMarker>B</AnswerMarker>
									<AnswerText>{question.odpowiedzi[1]}</AnswerText>
								</AnswerLabel>
								<AnswerLabel for="answer2">
									<AnswerInput
										type="radio"
										id="answer2"
										name="answer"
										value="2"
										onChange={handleAnswerChange}
									/>
									<AnswerMarker>C</AnswerMarker>
									<AnswerText>{question.odpowiedzi[2]}</AnswerText>
								</AnswerLabel>
							</AnswersForm>
						)}
					</QuestionContent>
				</MainContent>

				<Menu>
					<MenuTop>
						<ExamNavigation>
							<NavigationButton
								onClick={() => {
									setExitModalShow(true);
								}}
							>
								Zakończ egzamin
							</NavigationButton>
							<Modal
								onClose={() => {
									setExitModalShow(false);
								}}
								show={exitModalShow}
							>
								<h4>Czy napewno chcesz zakończyć trening?</h4>
								<div>
									<Button
										primary
										onClick={() =>
											navigate("/trening/podsumowanie", {
												state: { positive: true, isTraining: false },
											})
										}
									>
										TAK
									</Button>
									<Button primary onClick={() => setExitModalShow(false)}>
										NIE
									</Button>
								</div>
							</Modal>
						</ExamNavigation>
					</MenuTop>

					<MenuTopMid>
						<ExamInfo>
							<InfoElementColumn>
								<InfoText>Pytania podstawowe</InfoText>
								<InfoValueFullWidth>
									{Math.min(questionNumber, baseQuestionsNumber)} z{" "}
									{baseQuestionsNumber}
								</InfoValueFullWidth>
							</InfoElementColumn>
							<InfoElementColumn>
								<InfoText>Pytania specjalistyczne</InfoText>
								<InfoValueFullWidth>
									{Math.max(questionNumber - baseQuestionsNumber, 0)} z{" "}
									{specialistQuestionsNumber}
								</InfoValueFullWidth>
							</InfoElementColumn>
						</ExamInfo>
					</MenuTopMid>

					<MenuBotMid>
						<ExamTimerContainer>
							<InfoText>Czas na zapoznanie się z pytaniem</InfoText>
							<ExamTimer>
								<SelectButton>Start</SelectButton>
								<TimerOuterBar>
									<TimerText>{questionTime}s</TimerText>
									<TimerInnerBar
										style={{
											width: `${(questionTime / maxQuestionTime) * 100}%`,
										}}
									></TimerInnerBar>
								</TimerOuterBar>
							</ExamTimer>
						</ExamTimerContainer>
					</MenuBotMid>

					<MenuBottom>
						<ExamNavigation>
							<NextQuestionButton onClick={nextQuestion}>
								Następne pytanie
							</NextQuestionButton>
						</ExamNavigation>
					</MenuBottom>
				</Menu>
			</ExamContainer>
		</NoNavbarTemplate>
	);

	function toClockTime(time) {
		let minutes = Math.floor(time / 60).toFixed(0);
		let seconds = Math.floor(time % 60).toFixed(0);

		let MM = minutes.toString();
		let SS = seconds.toString();

		if (minutes < 10) {
			MM = "0" + minutes;
		}
		if (seconds < 10) {
			SS = "0" + seconds;
		}

		return minutes === totalExamTime ? MM : MM + ":" + SS;
	}

	/**
	 * Loads next question, resets corresponding state variables.
	 */
	function nextQuestion() {
		setSelectedAnswers(() => [...selectedAnswers, answer]);

		setQuestionNumber(questionNumber + 1);
		fetchNextQuestion();
		resetQuestionTime();
	}

	/**
	 * Fetches next question
	 */
	function fetchNextQuestion() {
		setQuestion(questions[(questionNumber + 1) % questions.length]);
		console.log(question.odpowiedzi[0]);
	}

	/**
	 * Stores selected answer index in `answer` state variable.
	 */
	function handleAnswerChange(event) {
		setAnswer(event.target.value);
	}

	function incrementTimers() {
		if (questionTime + 1 >= maxQuestionTime) {
			resetQuestionTime();
		} else {
			setQuestionTime(questionTime + 1);
		}
	}

	function resetQuestionTime() {
		setQuestionTime(0);
	}
}
