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

import Illustrations from "../../../../../../src/assets/images/svg/icons/Illustrations";
import ArrowRight from "../../../../icons/ArrowRight";

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
				<div>to strona edukacyjna z darmowym dostępem do bazy <span className="font-bold">wszystkich pytań egzaminacyjnych na kategorię B</span>.</div>,
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
		<HeroContainer>
			<div>
				<img src={Illustrations.HeroIllustration}></img>
			</div>

			<div className="relative w-full">
				<img src={Illustrations.HeroCar} className=""></img>
				<div className="">
					<button className="absolute right-[12%] top-[62%] font-bold text-[1.4vw] xl:text-3xl flex justify-center items-center gap-2">
						Trenuj z nami
						<ArrowRight className=""></ArrowRight>
					</button>
				</div>
			</div>

			{infoContent.map((data) => {
				return <InfoPanel key={data.id} data={data} />;
			})}
		</HeroContainer>
	);
}
