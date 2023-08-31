import React from "react";

import MainContent from "client/components/organisms/MainContent";
import TextbookTemplate from "client/components/templates/TextbookTemplate";
import Paragraph from "client/components/atoms/Paragraph";
import Navbar from "client/components/organisms/Navbar";

const body = (
	<>
		<h3>Jaki cel jest naszego podręcznika?</h3>
		<Paragraph>
			Ta wirtualna książka została stworzona, aby pomóc Ci zrozumieć podstawowe
			zasady, przepisy i umiejętności, które są nieodzowne dla bezpiecznego i
			odpowiedzialnego uczestnictwa w ruchu drogowym. Bezpieczeństwo na drogach
			to sprawa najwyższej wagi, a zdobycie prawa jazdy jest ważnym krokiem w
			Twojej drodze do samodzielności za kierownicą.
		</Paragraph>
		<br />
		<Paragraph>
			Niezależnie od tego, czy dopiero zaczynasz swoją przygodę z jazdą, czy też
			aktualnie zdobywasz wiedzę, aby odświeżyć swoje umiejętności, nasz
			podręcznik ma na celu dostarczyć Ci niezbędnej wiedzy i informacji.
		</Paragraph>
		<br />
		<Paragraph>
			Przygotowując ten podręcznik, skupiliśmy się nie tylko na przygotowaniu
			Cię do zdania egzaminu na prawo jazdy, ale przede wszystkim na tym, abyś
			stał się bezpiecznym i odpowiedzialnym uczestnikiem ruchu drogowego.
			Pamiętaj, że prowadzenie pojazdu to nie tylko przywilej, ale przede
			wszystkim ogromna odpowiedzialność wobec siebie, innych użytkowników dróg
			i środowiska naturalnego.
		</Paragraph>
		<br />
		<h3>Jakie tematy poruszymy?</h3>
		<Paragraph>
			Nasza podręcznikowa podróż rozpocznie się od podstaw, takich jak zasady
			ruchu drogowego i znaki, a następnie będziemy stopniowo pogłębiać naszą
			wiedzę, omawiając bardziej zaawansowane tematy, takie jak jazda na
			autostradach, prowadzenie w trudnych warunkach pogodowych czy też zasady
			udzielania pierwszeństwa.
		</Paragraph>
		<br />

		<h3>Miłego doskonalenia wiedzy!</h3>
		<Paragraph>
			Pamiętaj, że prawo jazdy to tylko pierwszy krok w Twojej karierze
			kierowcy. Ruch drogowy jest dynamiczny i ciągle ewoluuje. Dlatego też
			zachęcamy Cię do ciągłego doskonalenia swoich umiejętności i śledzenia
			najnowszych przepisów drogowych.
		</Paragraph>
		<br />
		<Paragraph>
			Wierzymy, że zdobywając wiedzę zawartą w tym podręczniku oraz ćwicząc
			praktyczne umiejętności jazdy, będziesz gotów stanąć przed wyzwaniami
			drogowymi i przyczynić się do poprawy bezpieczeństwa na drogach.
		</Paragraph>
		<br />
		<Paragraph style="font-semibold">
			Zapraszamy do rozpoczęcia tej podróży edukacyjnej i życzymy Ci owocnej
			nauki teorii prawa jazdy oraz wielu bezpiecznych i udanych podróży na
			drogach!
		</Paragraph>
		<br />
	</>
);

const pageContent = {
	title: "Wstęp",
	subtitle: "",
	body: body,
};

export default function TheoryIntroductionPage() {
	return (
		<TextbookTemplate header={<Navbar />}>
			<MainContent pageContent={pageContent} />
		</TextbookTemplate>
	);
}
