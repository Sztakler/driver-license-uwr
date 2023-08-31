import React from "react";

import MainContent from "client/components/organisms/MainContent";
import TextbookTemplate from "client/components/templates/TextbookTemplate";
import PanelsScroller from "client/components/molecules/PanelScroller";
import Navbar from "client/components/organisms/Navbar";

const panelsContents = [
	{
		image: require("assets/images/textbook/znaki-linie/P1.png"),
		description: (
			<div>
				<p>
					<b>P-1) linia pojedyncza przerywana</b>
				</p>
				<p>
					Znak P-1, w którym kreski są krótsze od przerw lub równe przerwom,
					wyznacza pasy ruchu. Znak P-1 podwójnej szerokości, w którym kreski i
					przerwy są równe, informuje ponadto, że wyznaczony pas ruchu jest
					pasem: ruchu powolnego, zanikającym, przeznaczonym wyłącznie dla
					pojazdów wyjeżdżających na inną drogę lub jezdnię.
				</p>
			</div>
		),
	},
	{
		image: require("assets/images/textbook/znaki-linie/P2.png"),
		description: (
			<div>
				<p>
					<b>(P-2) linia pojedyncza ciągła</b>
				</p>
				<p>
					Linia ta oddziela pasy ruchu o tym samym kierunku i oznacza ponadto
					zakaz przejeżdżania (najeżdżania) przez linię.
				</p>
			</div>
		),
	},
	{
		image: require("assets/images/textbook/znaki-linie/P3.png"),
		description: (
			<div>
				<p>
					<b>P-3) linia jednostronnie przekraczalna</b>
				</p>
				<p>
					Znak ten oznacza zakaz przejeżdżania (najeżdżania) przez tę linię z
					pasa ruchu położonego przy linii ciągłej, z wyjątkiem powrotu po
					wyprzedzaniu na pas ruchu zajmowany przed wyprzedzaniem.
				</p>
			</div>
		),
	},
	{
		image: require("assets/images/textbook/znaki-linie/P4.png"),
		description: (
			<div>
				<p>
					<b>P-4) linia podwójna ciągła</b>
				</p>
				<p>
					Znak ten rozdziela pasy ruchu o kierunkach przeciwnych i oznacza zakaz
					najeżdżania (przejeżdżania) przez tę linię.
				</p>
			</div>
		),
	},
];

const body = (
	<>
		<h3>Czym są znaki poziome pod postacią linii?</h3>
		<p>
			Znaki poziome na drodze to ważny element systemu znaków drogowych, które
			dostarczają kierowcom informacje o tym, jak się zachowywać i jakie są
			warunki na danym odcinku drogi. W tym rozdziale omówimy różne rodzaje
			znaków poziomych występujących na drogach w Polsce oraz ich znaczenie.
		</p>
		<br />
		<h3>Przykładowe rodzaje linii na drogach</h3>
		<ul className="flex flex-col flex-[1_1_50%] gap-4 pr-8 pt-2 list-disc">
			<li>
				<div>
					<span className="font-medium">Linie podwójne ciągłe: </span>
					<span>
						Linie podwójne ciągłe na drodze wskazują na zakaz wyprzedzania oraz
						zakaz zmiany pasa ruchu. Kierowcy nie mogą przekraczać tych linii,
						nawet jeśli chcą wyprzedzić inny pojazd. Linie te są stosowane na
						odcinkach dróg, gdzie wyprzedzanie jest niebezpieczne lub
						zabronione.
					</span>
				</div>
			</li>
			<li>
				<div>
					<span className="font-medium">Linie przerywane: </span>
					<span>
						Linie przerywane na drodze pozwalają na wyprzedzanie i zmianę pasa
						ruchu, o ile jest to bezpieczne i zgodne z przepisami. Kierowcy mogą
						przekraczać linie przerywane w celu wyprzedzania lub zmiany pasa
						ruchu, ale muszą to robić ostrożnie i z zachowaniem pierwszeństwa
						innych uczestników ruchu.
					</span>
				</div>
			</li>
			<li>
				<div>
					<span className="font-medium">Pas ruchu dla rowerów: </span>
					<span>
						Na niektórych drogach w Polsce występują oznaczone pasy ruchu dla
						rowerów. To miejsca, gdzie rowerzyści mają pierwszeństwo i kierowcy
						pojazdów mechanicznych nie mogą wjeżdżać na te pasy, chyba że jest
						to konieczne do skrętu.
					</span>
				</div>
			</li>
			<li>
				<div>
					<span className="font-medium">
						Znaki na przejściach dla pieszych:{" "}
					</span>
					<span>
						Na przejściach dla pieszych znajdują się specjalne znaki poziome,
						które informują kierowców o obowiązku ustąpienia pierwszeństwa
						pieszym, gdy ci przechodzą przez jezdnię.
					</span>
				</div>
			</li>
		</ul>
		<br />
		<h3>Jak takie znaki wyglądają</h3>
		<p>
			W panelu poniżej możesz przejrzeć kilka przykładowych znaków poziomych,
			niektóre omówiliśmy powyżej.
		</p>
		<br />
		<PanelsScroller panelsContents={panelsContents} />
		<br />
	</>
);

const pageContent = {
	title: "Znaki poziome",
	subtitle: "Linie",
	body: body,
};

export default function LineSignsPage() {
	return (
		<TextbookTemplate header={<Navbar />}>
			<MainContent pageContent={pageContent} />
		</TextbookTemplate>
	);
}
