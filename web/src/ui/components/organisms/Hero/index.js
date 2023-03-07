import React from "react";

import InfoPanel from "../../molecules/InfoPanel";

import car from "../../../../../../src/assets/images/car.png"

export default function Hero() {

	const uuidv4 = require("uuid/v4");

	let infoContent = [
		{
			id: uuidv4(),
			layout: 'normal',
			image: car,
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
			image: car,
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
			image: car,
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
		<div className="container flex p-10 h-full items-center justify-center flex-col gap-32">

			{infoContent.map((data) => {
				return <InfoPanel key={data.id} data={data} />;
			})}

			{/* <InfoPanel layout="normal" /> */}
			{/* <InfoPanel layout="normal" />
			<InfoPanel layout="normal" />
			<InfoPanel layout="normal" /> */}
			{/* <section className="flex flex-col w-full items-center justify-center gap-12 min-h-[100vh]">
				<img
				  src={require('../../../../../../src/assets/images/car.png')}
				  className="h-56 w-auto"
				/>
			  </section>
		
			  <section className="flex-row justify-between min-h-[100vh]">
				<div className="float-left">
				  <img
					src={require('../../../../../../src/assets/images/car.png')}
					className="h-56 w-auto "
				  />
				</div>
		
				<div>
				  <div>
					<h2 className="text-6xl font-bold">Testy na prawko</h2>
					<p className="text-base">to strona edukacyjna z darmowym dostępem do bazy <span className="font-bold">wszystkich pytań egzaminacyjnych na kategorię B</span>.</p>
					<p className="text-base">Z nami z łatwością przygotujesz się do egzaminu!</p>
				  </div>
				</div>
			  </section>
		
			  <section className="flex flex-row justify-between min-h-[100vh]">
				<div className="flex flex-col">
				  <div>
					<h2 className="text-6xl font-bold">Trenuj z nami</h2>
					<p className="text-base">udostępniamy całą bazę 2125 pytań i odpowiedzi.</p>
				  </div>
		
				  <div className="flex flex-col">
					<p>W pełni za darmo -- teraz i zawsze</p>
					<p>Tryb testów i nauki</p>
					<p>Podręcznik, egzaminy, infografiki</p>
				  </div>
				</div>
		
				<div>
				  <img
					src={require('../../../../../../src/assets/images/car.png')}
					className="h-56 w-auto"
				  />
				</div>
			  </section>
		
			  <section className="flex flex-row justify-between min-h-[100vh]">
				<div>
				  <img
					src={require('../../../../../../src/assets/images/car.png')}
					className="h-56 w-auto"
				  />
				</div>
		
				<div className="flex flex-col">
				  <div>
					<h2 className="text-6xl font-bold">Załóż darmowe konto</h2>
					<p className="text-base">oferujemy:</p>
				  </div>
		
				  <div className="flex flex-col">
					<p>zapamiętywanie problematycznych pytań</p>
					<p>analizę i statystyki postępów w nauce</p>
					<p>planowanie nauki do egzaminu</p>
					<p>motywujące powiadomienia na telefon</p>
				  </div>
				</div>
			  </section> */}
		</div>
	);
}
