import React from "react";

import PageTemplate from "../components/templates/PageTemplate";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import TiledMenu from "../components/organisms/TiledMenu";

const options = [
	{
		type: "training_type",
		title: "Teoria",
		alt: "theory",
		description: "Teoria itd. opis",
		children: null,
	},
	{
		type: "training_type",
		title: "Praktyka",
		alt: "practice",
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
	return (
		<PageTemplate header={<Navbar />} footer={<Footer />}>
			<TiledMenu data={options} headings={headings}  />
		</PageTemplate>
	);
}
