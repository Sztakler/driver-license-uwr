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
import Arrows from "../../../../../../src/assets/images/svg/icons/Arrows";
import { useNavigate } from "react-router";

export default function Hero() {

	const uuidv4 = require("uuid/v4");
	const navigate = useNavigate();

	let infoContent = [
		{
			id: uuidv4(),
			layout: 'reverse',
			image: examScreenshots,
			header: 'Trenuj z nami',
			description: [
				'Stale aktualizujemy naszą bazę pytań egzaminacyjnych. Przygotuj się z nami do egzaminu w 2023!',
			],
			points: []
		},
		{
			id: uuidv4(),
			layout: 'normal',
			image: usersFaces,
			header: 'Załóż darmowe konto',
			description: [
				'zyskasz możliwość',
			],
			points: [
				'wglądu w Twoje statystyki i analizy',
				'zapisywania wybranych pytań',
				'dodatkowe funkcje w trybie <span classname="font-semibold">Trening</span>',
			]
		},
	];

	function scrollDown() {
	};

	function handleRegister() {
		navigate("/register/");
	}

	return (
		<HeroContainer id="HeroContainer">
			<div className="snap-start">
				<img src={Illustrations.HeroIllustration}></img>
			</div>

			<div className="relative w-full snap-center">
				<img src={Illustrations.HeroCar} className=""></img>
				<div className="">
					<button className="absolute right-[12%] top-[56%] font-bold text-[1.4vw] xl:text-[26px] flex justify-center items-center gap-2" onClick={handleRegister}>
						Trenuj z nami
						<ArrowRight className=""></ArrowRight>
					</button>
				</div>

				<button className="flex justify-center w-full mt-10" onClick={scrollDown}>
					<Image src={Arrows.Down}></Image>
				</button>
			</div>


			<div>
				<div className="grid grid-cols-2 snap-center">
					<div className="flex flex-col gap-[30px]">
						<h1 className="text-[#141414] font-display text-[70px]">
							Trenuj z nami
						</h1>
						<h2 className="text-[#1c1c1c] text-[26px] font-normal">Stale aktualizujemy naszą bazę pytań egzaminacyjnych. Przygotuj się z nami do egzaminu w 2023!</h2>
						<button className="font-semibold text-[26px] flex flex-row justify-start items-center gap-2 hover:underline" onClick={handleRegister}>
							Załóż konto
							<ArrowRight className=""></ArrowRight>
						</button>
					</div>
					<div>
						<img src={Illustrations.HeroInfo1}></img>
					</div>
				</div>

				<button className="flex justify-center w-full mt-10" onClick={scrollDown}>
					<Image src={Arrows.Down}></Image>
				</button>
			</div>

			<div>
				<div className="grid grid-cols-2 snap-center pb-20">
					<div>
						<img src={Illustrations.RegistrationIllustration}></img>
					</div>
					<div className="flex flex-col gap-[30px]">
						<h1 className="text-[#141414] font-display text-[70px]">
							Załóż darmowe konto
						</h1>
						<h2 className="text-[#1c1c1c] text-[26px] font-normal">Stale aktualizujemy naszą bazę pytań egzaminacyjnych. Przygotuj się z nami do egzaminu w 2023!</h2>
						<button className="font-semibold text-[26px] flex flex-row justify-start items-center gap-2 hover:underline" onClick={handleRegister}>
							Zarejestruj się
							<ArrowRight className=""></ArrowRight>
						</button>
					</div>
				</div>
			</div>

		</HeroContainer>
	);
}
