import React from "react";

import PageTemplate from "../components/templates/PageTemplate";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import TiledMenu from "../components/organisms/TiledMenu";

import rocket from "../../../../src/assets/images/rocket.png";

const options = [
	{
		title: "Teoria",
		description: "Teoria itd. opis",
		children: []
	},
	{
		title: "Praktyka",
		description: "Praktyka itd. opis",
		children: [
			{
				title: "Tryb serii",
				description: "Nieskończone pytania, trenuj tak długo jak chcesz i zmierz się z losowymi pytaniami z dowolnej kategorii (pytania podstawowe i specjalistyczne). Pula pytań jest niezmienna, pójdź na całość!",
				children: [
					{
						title: "Pełna pula pytań",
						description:"Wszystkie możliwe pytania.,",
					},
					{
						title: "Wybór kategorii",
						description:"Chcesz skupić się na zapoznaniu się ze znakami drogowymi, czy może interesują cię ograniczenia prędkości w wybranch sytuacjach? Tryb ten pozwala ci wybrać kategorię pytań z którymi się zmierzysz.",
					},
					{
						title: "Wybór znajomości",
						description:"Chcesz zapoznać się z pytaniami, które wcześniej oznaczyłeś jako kłopotliwe, czy może chcesz odpowiadać tylko na pytania, których jeszcze nie znasz? W tym trybie odpowiadasz na pytania, o wybranej przez ciebie znajomości.",
					},
				]
			},
			{
				title: "Tryb fiszek",
				description: "Podobnie jak w trybie serii, sprostasz tu dowolnym pytaniom z dowolnej kategorii, lecz pytania z którymi masz problem będą wyświetlane z większą częstotliwością, aby ułatwić ci oswojenie się z nimi.",
				children: [
					{
						title: "Pełna pula pytań",
						description:"Wszystkie możliwe pytania.,",
					},
					{
						title: "Wybór kategorii",
						description:"Chcesz skupić się na zapoznaniu się ze znakami drogowymi, czy może interesują cię ograniczenia prędkości w wybranch sytuacjach? Tryb ten pozwala ci wybrać kategorię pytań z którymi się zmierzysz.",
					}
				]
			},
		]
	}
];

export default function HomePage() {
	return (
		<PageTemplate header={<Navbar />} footer={<Footer />}>
			<TiledMenu
				data={options}
			/>
		</PageTemplate>
	);
}
