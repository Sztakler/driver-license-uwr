import React from "react";
import { useNavigate } from "react-router";
import { useRecoilState, useResetRecoilState } from "recoil";
import { useState } from "react";
import {
	cachedAnswersState,
	inReviewModeState,
	resultsState,
} from "../../../recoil/atoms";
import PageTemplate from "../../components/templates/PageTemplate";
import Navbar from "../../components/organisms/Navbar";
import Footer from "../../components/organisms/Footer";
import Illustrations from "../../../assets/images/svg/icons/Illustrations";
import Input from "../../components/atoms/Input";
import QuestionsSelectionForm from "../../components/molecules/QuestionsSelectionForm";

import {
	Container,
	MainContainer,
	HeaderContainer,
	TitleContainer,
	IllustrationContainer,
	Title,
	Subtitle,
} from "./styles";

const options = [
	{
		type: "training_type",
		title: "Teoria",
		alt: "teoria",
		description: "Teoria itd. opis",
		children: null,
	},
	{
		type: "training_type",
		title: "Praktyka",
		alt: "praktyka",
		description: "Praktyka itd. opis",
		children: [
			{
				type: "mode",
				title: "Tryb serii",
				alt: "burst",
				description:
					"Nieskończone pytania, trenuj tak długo jak chcesz i zmierz się z losowymi pytaniami z dowolnej kategorii (pytania podstawowe i specjalistyczne). Pula pytań jest niezmienna, pójdź na całość!",
				children: [
					{
						type: "question_set",
						alt: "all_questions",
						title: "Pełna pula pytań",
						description: "Wszystkie możliwe pytania.,",
						children: null,
					},
					{
						type: "question_set",
						alt: "categories",
						title: "Wybór kategorii",
						description:
							"Chcesz skupić się na zapoznaniu się ze znakami drogowymi, czy może interesują cię ograniczenia prędkości w wybranch sytuacjach? Tryb ten pozwala ci wybrać kategorię pytań z którymi się zmierzysz.",
							children: null,
					},
					{
						type: "question_set",
						alt: "familiary-based",
						title: "Wybór znajomości",
						description:
							"Chcesz zapoznać się z pytaniami, które wcześniej oznaczyłeś jako kłopotliwe, czy może chcesz odpowiadać tylko na pytania, których jeszcze nie znasz? W tym trybie odpowiadasz na pytania, o wybranej przez ciebie znajomości.",
						children: null,
					},
				],
			},
			{
				type: "mode",
				title: "Tryb fiszek",
				alt: "flashcards",
				description:
					"Podobnie jak w trybie serii, sprostasz tu dowolnym pytaniom z dowolnej kategorii, lecz pytania z którymi masz problem będą wyświetlane z większą częstotliwością, aby ułatwić ci oswojenie się z nimi.",
				children: [
					{
						type: "question_set",
						alt: "all_questions",
						title: "Pełna pula pytań",
						description: "Wszystkie możliwe pytania.,",
						children: null,
					},
					{
						type: "question_set",
						alt: "categories",
						title: "Wybór kategorii",
						description:
							"Chcesz skupić się na zapoznaniu się ze znakami drogowymi, czy może interesują cię ograniczenia prędkości w wybranch sytuacjach? Tryb ten pozwala ci wybrać kategorię pytań z którymi się zmierzysz.",
						children: null,
					},
				],
			},
		],
	},
];

const headings = ["Czego się dzisiaj uczymy?", "W jakim trybie chcesz się uczyć?", "Jaką pulę pytań dajemy?"]

export default function HomePage() {
	const navigate = useNavigate();

	const [isTrainingSelected, setIsTraningSelected] = useState(false);
	const resetResult = useResetRecoilState(resultsState);
	const resetReviewMode = useResetRecoilState(inReviewModeState);
	const resetCachedAnswers = useResetRecoilState(cachedAnswersState);

	let scrollDown = () => {
		setIsTraningSelected(true);
	};

	return (
		<PageTemplate header={<Navbar />} footer={<Footer />}>
		<Container>
			<HeaderContainer>
				<TitleContainer>
					<Title className="text-8xl">Trening</Title>
					<Subtitle className="pt-5 mb-8 text-2xl max-w-prose">
						{isTrainingSelected
							? "Wybierz pytania, które chcesz przećwiczyć:"
							: "Zapraszamy Cię na sesję treningową! TRENING to pytania egzaminacyjne bez końca. Możesz użyć filtrów, aby wybrać pytania, których chcesz się dziś uczyć."}
					</Subtitle>
				</TitleContainer>

				<IllustrationContainer>
					{isTrainingSelected ? (
						<div></div>
					) : (
						<div className="flex flex-col">
							<img
								src={Illustrations.TrainingIllustration}
								className="self-center w-[70%]"
							></img>
							<div className="flex flex-row justify-center w-full gap-4">
								<button
									className=" bg-[#fffcf5] hover:bg-[#ffd363] mt-10 w-[500px] border rounded-[100px] border-[#0d0d0d]"
									onClick={() => navigate("/trening/praktyka")}
								>
									<Subtitle className="py-6 m-0 text-4xl font-semibold text-center">
										PODSUMOWANIE TRENINGU
									</Subtitle>
								</button>
								<button
									className=" bg-[#fffcf5] hover:bg-[#ffd363] mt-10 w-[500px] border rounded-[100px] border-[#0d0d0d]"
									onClick={scrollDown}
								>
									<Subtitle className="py-6 m-0 text-4xl font-semibold text-center">
										PRZEJDŹ DALEJ
									</Subtitle>
								</button>
							</div>
						</div>
					)}
				</IllustrationContainer>
			</HeaderContainer>

			<MainContainer id="MainContainer" className="relative">
				{isTrainingSelected ? (
          <QuestionsSelectionForm />
				) : (
					<div></div>
				)}
			</MainContainer>
		</Container>
		</PageTemplate>
	);
}
