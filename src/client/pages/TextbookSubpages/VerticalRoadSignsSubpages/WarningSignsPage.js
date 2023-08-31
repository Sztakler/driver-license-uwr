import React from "react";

import MainContent from "client/components/organisms/MainContent";
import TextbookTemplate from "client/components/templates/TextbookTemplate";
import PanelsScroller from "client/components/molecules/PanelScroller";
import Navbar from "client/components/organisms/Navbar";

const panelsContents = [
	{
		image: require("assets/images/textbook/znaki-ostrzegawcze/A1.png"),
		description: (
			<div>
				<p>
					<b>A-1) niebezpieczny zakręt w prawo</b>
				</p>
				<p>Ostrzega o niebezpiecznym zakręcie w kierunku wskazanym na znaku.</p>
			</div>
		),
	},
	{
		image: require("assets/images/textbook/znaki-ostrzegawcze/A2.png"),
		description: (
			<div>
				<p>
					<b>(A-2) niebezpieczny zakręt w lewo</b>
				</p>
				<p>Ostrzega o niebezpiecznym zakręcie w kierunku wskazanym na znaku.</p>
			</div>
		),
	},
	{
		image: require("assets/images/textbook/znaki-ostrzegawcze/A3.png"),
		description: (
			<div>
				<p>
					<b>A-3) niebezpieczne zakręty, pierwszy w prawo</b>
				</p>
				<p>
					Ostrzega o dwóch niebezpiecznych zakrętach, z których pierwszy jest w
					kierunku wskazanym na znaku, a drugi może być zarówno w lewo, jak i w
					prawo.
				</p>
			</div>
		),
	},
	{
		image: require("assets/images/textbook/znaki-ostrzegawcze/A4.png"),
		description: (
			<div>
				<p>
					<b>A-4) niebezpiecze zakręty pierwszy w lewo</b>
				</p>
				<p>
					Ostrzega o dwóch niebezpiecznych zakrętach, z których pierwszy jest w
					kierunku wskazanym na znaku, a drugi może być zarówno w lewo, jak i w
					prawo.
				</p>
			</div>
		),
	},
];

const body = (
	<>
		<h3>Czym są znaki ostrzegawcze?</h3>
		<p>
			Znaki ostrzegawcze są ważnym elementem systemu znaków drogowych, które
			mają na celu zwrócenie uwagi kierowców na potencjalne niebezpieczeństwa na
			drodze. Znaki te pomagają w zachowaniu ostrożności i przygotowaniu się na
			ewentualne trudności lub sytuacje, które mogą pojawić się przed kierowcą.
		</p>
		<br />
		<h3>Rodzaje znaków ostrzegawczych</h3>
		<p>
			W systemie znaków ostrzegawczych można wyróżnić kilka podstawowych
			kategorii, z których każda informuje o innym rodzaju zagrożenia na drodze:
		</p>
		<ul className="flex flex-col flex-[1_1_50%] gap-4 pr-8 pt-2 list-disc">
			<li>
				<div>
					<span className="font-medium">
						Ostrzegawcze znaki przed niebezpiecznym zakrętem:{" "}
					</span>
					<span>
						Te znaki informują kierowców o zbliżającym się odcinku drogi, na
						którym znajduje się ostry zakręt. Kierowcy powinni zwolnić i
						dostosować prędkość do warunków drogowych.
					</span>
				</div>
			</li>
			<li>
				<div>
					<span className="font-medium">
						Ostrzegawcze znaki przed spadkiem:{" "}
					</span>
					<span>
						Znaki te informują o zbliżającym się spadku na drodze. Kierowcy
						powinni zwolnić, aby utrzymać kontrolę nad pojazdem.
					</span>
				</div>
			</li>
			<li>
				<div>
					<span className="font-medium">
						Ostrzegawcze znaki przed zwężeniem drogi:{" "}
					</span>
					<span>
						Znaki te wskazują na to, że droga będzie się zwężać. Kierowcy
						powinni dostosować się do nowych warunków ruchu i ustąpić
						pierwszeństwa, jeśli jest to konieczne.
					</span>
				</div>
			</li>
			<li>
				<div>
					<span className="font-medium">
						Ostrzegawcze znaki przed przejściami dla pieszych:{" "}
					</span>
					<span>
						Te znaki informują kierowców o zbliżającym się przejściu dla
						pieszych. Kierowcy muszą zachować szczególną ostrożność i ustąpić
						pierwszeństwa pieszym na przejściu.
					</span>
				</div>
			</li>
			<li>
				<div>
					<span className="font-medium">
						Ostrzegawcze znaki przed skrzyżowaniami i rondami:{" "}
					</span>
					<span>
						Znaki te ostrzegają o zbliżającym się skrzyżowaniu lub rondzie.
						Kierowcy powinni zmniejszyć prędkość i zachować szczególną uwagę na
						inne pojazdy.
					</span>
				</div>
			</li>
		</ul>
		<br />
		<h3>Jakie mamy znaki ostrzegawcze?</h3>
		<PanelsScroller panelsContents={panelsContents} />
		<br />
	</>
);

const pageContent = {
	title: "Znaki pionowe",
	subtitle: "Znaki ostrzegawcze",
	body: body,
};

export default function WarningSignsPage() {
	return (
		<TextbookTemplate header={<Navbar />}>
			<MainContent pageContent={pageContent} panelsContents={panelsContents} />
		</TextbookTemplate>
	);
}
