import React from "react";

import NoNavbarTemplate from "../components/templates/NoNavbarTemplate";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import Practice from "../components/organisms/Practice";

const exampleData = [
	{
		pytanie: "Pytanie 1, Poprawna odpowiedz tutaj to A",
		odpowiedzi: ["a", "b", "c"],
		poprawna_odpowiedz: 0,
		media: require("../../../../src/assets/images/test.jpg"),
		liczba_punktow: 2,
		zakres_struktury: "SPECJALISTYCZNY",
	},
	{
		pytanie: "Pytanie 1, Poprawna odpowiedz tutaj to B",
		odpowiedzi: ["TAK", "NIE"],
		poprawna_odpowiedz: 1,
		media: require("../../../../src/assets/images/test.jpg"),
		liczba_punktow: 3,
		zakres_struktury: "PODSTAWOWY",
	},
	{
		pytanie: "Pytanie 1, Poprawna odpowiedz tutaj to B",
		odpowiedzi: ["TAK", "NIE"],
		poprawna_odpowiedz: 1,
		media: require("../../../../src/assets/images/test.jpg"),
		liczba_punktow: 2,
		zakres_struktury: "PODSTAWOWY",
	},
	{
		pytanie: "Pytanie 1, Poprawna odpowiedz tutaj to C",
		odpowiedzi: ["a", "b", "c"],
		poprawna_odpowiedz: 2,
		media: require("../../../../src/assets/images/test.jpg"),
		liczba_punktow: 3,
		zakres_struktury: "SPECJALISTYCZNY",
	},
];

export default function PracticePage() {
	return (
		<NoNavbarTemplate header={<Navbar />} footer={<Footer />}>
			<Practice data={exampleData} />
		</NoNavbarTemplate>
	);
}
