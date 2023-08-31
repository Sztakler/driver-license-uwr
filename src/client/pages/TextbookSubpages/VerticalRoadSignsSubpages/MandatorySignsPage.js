import React from "react";

import MainContent from "client/components/organisms/MainContent";
import TextbookTemplate from "client/components/templates/TextbookTemplate";
import Navbar from "client/components/organisms/Navbar";
import PanelsScroller from "client/components/molecules/PanelScroller";

const panelsContents = [
	{
		image: require("assets/images/textbook/znaki-nakazu/C1.png"),
		description: (
			<div>
				<p>
					<b>C-1) nakaz jazdy w prawo przed znakiem</b>
				</p>
				<p>
					Zobowiązuje kierującego do jazdy w prawo przed znakiem; znak ten może
					być umieszczony na przedłużeniu osi drogi (jezdni) lub na samej
					jezdni. Znak obowiązuje na najbliższym skrzyżowaniu lub w miejscu,
					gdzie występuje możliwość zmiany kierunku jazdy.
				</p>
			</div>
		),
	},
	{
		image: require("assets/images/textbook/znaki-nakazu/C5.png"),
		description: (
			<div>
				<p>
					<b>(C-5) nakaz jazdy prosto</b>
				</p>
				<p>
					Zobowiązuje kierującego do jazdy prosto; znak ten może być umieszczony
					na przedłużeniu osi drogi (jezdni) lub na samej jezdni. Znak
					obowiązuje na najbliższym skrzyżowaniu lub w miejscu, gdzie występuje
					możliwość zmiany kierunku jazdy .
				</p>
			</div>
		),
	},
	{
		image: require("assets/images/textbook/znaki-nakazu/C8.png"),
		description: (
			<div>
				<p>
					<b>C-8) nakaz jazdy w prawo lub w lewo</b>
				</p>
				<p>
					Zobowiązuje kierującego do jazdy w prawo lub w lewo; znak ten może być
					umieszczony na przedłużeniu osi drogi (jezdni) lub na samej jezdni.
					Znak obowiązuje na najbliższym skrzyżowaniu lub w miejscu, gdzie
					występuje możliwość zmiany kierunku jazdy.
				</p>
			</div>
		),
	},
	{
		image: require("assets/images/textbook/znaki-nakazu/C12.png"),
		description: (
			<div>
				<p>
					<b>C-12) ruch okrężny</b>
				</p>
				<p>
					Oznacza, że na skrzyżowaniu ruch odbywa się dookoła wyspy lub placu w
					kierunku wskazanym na znaku.
				</p>
			</div>
		),
	},
];

const body = (
	<>
		<>
			<h3>Czym są znaki nakazu?</h3>
			<p>
				Znaki nakazu są jednym z ważniejszych elementów systemu znaków
				drogowych. Informują kierowców o obowiązkowych działaniach, jakie muszą
				podjąć na drodze. Zrozumienie tych znaków jest kluczowe dla bezpiecznego
				i zgodnego z przepisami poruszania się po drogach. W tym rozdziale
				omówimy znaki nakazu, ich rodzaje oraz znaczenie.
			</p>
			<br />
			<h3>Najczęściej spotykane znaki nakazu</h3>
			<p>
				Istnieje wiele różnych znaków nakazu, z których każdy ma swoje unikalne
				znaczenie. Poniżej znajduje się lista najczęściej spotykanych znaków
				nakazu:
			</p>
			<br />
			<PanelsScroller panelsContents={panelsContents} />
			<h3>Główne zasady stosowania się do znaków zakazu</h3>
			<ul className="flex flex-col flex-[1_1_100%] gap-4 pr-8 pt-2 list-decimal">
				<li>
					<div>
						<span className="font-medium">
							Obowiązek podporządkowania się:{" "}
						</span>
						<span>
							Kierowcy są zobowiązani do natychmiastowego podporządkowania się
							znakom nakazu. Niezastosowanie się do tych znaków może skutkować
							mandatem lub wypadkiem drogowym.
						</span>
					</div>
				</li>
				<li>
					<div>
						<span className="font-medium">
							Znaki nakazu mają pierwszeństwo:{" "}
						</span>
						<span>
							Znaki nakazu mają pierwszeństwo przed innymi oznaczeniami na
							drodze, takimi jak znaki nakazu czy informacyjne.
						</span>
					</div>
				</li>
				<li>
					<div>
						<span className="font-medium">Uwaga na znaki dodatkowe: </span>
						<span>
							Czasami znaki nakazu są wspierane przez znaki dodatkowe, które
							mogą zawierać dodatkowe informacje, takie jak odległość do
							miejsca, gdzie obowiązuje nakaz. Kierowcy powinni zwracać uwagę na
							te znaki dodatkowe.
						</span>
					</div>
				</li>
			</ul>
			<br />
		</>
	</>
);

const pageContent = {
	title: "Znaki pionowe",
	subtitle: "Znaki nakazu",
	body: body,
};

export default function MandatorySignsPage() {
	return (
		<TextbookTemplate header={<Navbar />}>
			<MainContent pageContent={pageContent} />
		</TextbookTemplate>
	);
}
