import React from "react";
import Image from "../../atoms/Image";

import {
	HeroContainer,
	UpperSection,
	LowerSection,
	Title,
	SubTitle,
} from "./styles";

import InfoPanel from "../../molecules/InfoPanel";

import coolDriver from "../../../../../../src/assets/images/info-panels/cool-driver.png"
import examScreenshots from "../../../../../../src/assets/images/info-panels/exam-screenshots.png"
import usersFaces from "../../../../../../src/assets/images/info-panels/users-faces.png"

export default function Hero() {

	const uuidv4 = require("uuid/v4");

	let infoContent = [
		{
			id: uuidv4(),
			layout: 'normal',
			image: coolDriver,
			header: 'Testy na prawko',
			description: [
				'Testy na prawko',
				'to strona edukacyjna z darmowym dostępem do bazy <span className="font-bold">wszystkich pytań egzaminacyjnych na kategorię B</span>.',
				'Z nami z łatwością przygotujesz się do egzaminu!',
			],
			points: [
			]
		},
		{
			id: uuidv4(),
			layout: 'reverse',
			image: examScreenshots,
			header: 'Trenuj z nami',
			description: [
				'udostępniamy całą bazę 2125 pytań i odpowiedzi',
			],
			points: [
				'W pełni za darmo -- teraz i zawsze',
				'Tryb testów i nauki',
				'Podręcznik, egzaminy, infografiki',
			]
		},
		{
			id: uuidv4(),
			layout: 'normal',
			image: usersFaces,
			header: 'Załóż darmowe konto',
			description: [
				'dostaniesz możliwość',
			],
			points: [
				'zapamiętywanie problematycznych pytań',
				'analizę i statystyki postępów w nauce',
				'planowanie nauki do egzaminu',
				'motywujące powiadomienia na telefon',
			]
		},
	];

	return (
		<div className="container flex flex-col p-10 h-full items-center justify-center gap-32">

			{infoContent.map((data) => {
				return <InfoPanel key={data.id} data={data} />;
			})}
			
		</div>
	);
}