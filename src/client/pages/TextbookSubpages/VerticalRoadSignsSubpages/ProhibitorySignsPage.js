import React from "react";

import MainContent from "client/components/organisms/MainContent";
import TextbookTemplate from "client/components/templates/TextbookTemplate";
import Navbar from "client/components/organisms/Navbar";
import PanelsScroller from "client/components/molecules/PanelScroller";

const panelsContents = [
	{
		image: require("assets/images/textbook/znaki-zakazu/B1.png"),
		description: (
			<div>
				<p>
					<b>B-1) niebezpieczny zakręt w prawo</b>
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
		image: require("assets/images/textbook/znaki-zakazu/B2.png"),
		description: (
			<div>
				<p>
					<b>(B-2) niebezpieczny zakręt w lewo</b>
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
		image: require("assets/images/textbook/znaki-zakazu/B5.png"),
		description: (
			<div>
				<p>
					<b>B-5) niebezpieczne zakręty, pierwszy w prawo</b>
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
		image: require("assets/images/textbook/znaki-zakazu/B20.png"),
		description: (
			<div>
				<p>
					<b>B-20) niebezpiecze zakręty pierwszy w lewo</b>
				</p>
				<p>
					Oznacza, że na skrzyżowaniu ruch odbywa się dookoła wyspy lub placu w
					kierunku wskazanym na znaku.
				</p>
			</div>
		),
	},
	{
		image: require("assets/images/textbook/znaki-zakazu/B21.png"),
		description: (
			<div>
				<p>
					<b>B-21) niebezpiecze zakręty pierwszy w lewo</b>
				</p>
				<p>
					Oznacza, że na skrzyżowaniu ruch odbywa się dookoła wyspy lub placu w
					kierunku wskazanym na znaku.
				</p>
			</div>
		),
	},
	{
		image: require("assets/images/textbook/znaki-zakazu/B23.png"),
		description: (
			<div>
				<p>
					<b>B-23) niebezpiecze zakręty pierwszy w lewo</b>
				</p>
				<p>
					Oznacza, że na skrzyżowaniu ruch odbywa się dookoła wyspy lub placu w
					kierunku wskazanym na znaku.
				</p>
			</div>
		),
	},
	{
		image: require("assets/images/textbook/znaki-zakazu/B33.png"),
		description: (
			<div>
				<p>
					<b>B-33) niebezpiecze zakręty pierwszy w lewo</b>
				</p>
				<p>
					Oznacza, że na skrzyżowaniu ruch odbywa się dookoła wyspy lub placu w
					kierunku wskazanym na znaku.
				</p>
			</div>
		),
	},
	{
		image: require("assets/images/textbook/znaki-zakazu/B36.png"),
		description: (
			<div>
				<p>
					<b>B-36) niebezpiecze zakręty pierwszy w lewo</b>
				</p>
				<p>
					Oznacza, że na skrzyżowaniu ruch odbywa się dookoła wyspy lub placu w
					kierunku wskazanym na znaku.
				</p>
			</div>
		),
	},
	{
		image: require("assets/images/textbook/znaki-zakazu/B41.png"),
		description: (
			<div>
				<p>
					<b>B-41) niebezpiecze zakręty pierwszy w lewo</b>
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
			<h3>Czym są znaki zakazu?</h3>
			<p>
				Znaki zakazu są jak sama nazwa wskazuje odwrotnością znaków nakazu.
				Informują one wszystkich uczestników ruchu drogowego o działaniach,
				których nie mogą oni wykonać.
			</p>
			<br />
			<h3>Najczęściej spotykane znaki zakazu</h3>
			<p>
				Znaki zakazu to znaki, które zakazują kierowcom wykonanie konkretnych
				działań na drodze. Poniżej znajdują się niektóre z najważniejszych
				znaków zakazu:
			</p>
			<br />
			<PanelsScroller panelsContents={panelsContents} />
			<br />
		</>
	</>
);

const pageContent = {
	title: "Znaki pionowe",
	subtitle: "Znaki zakazu",
	body: body,
};

export default function ProhibitorySignsPage() {
	return (
		<TextbookTemplate header={<Navbar />}>
			<MainContent pageContent={pageContent} />
		</TextbookTemplate>
	);
}
