import React from "react";
import Image from "../../atoms/Image";

import {
	HeroContainer,
	UpperSection,
	LowerSection,
	Title,
	SubTitle,
	IllustrationContainer,
	PanelContainer,
	PanelButton,
	Panel,
	InfoContainer,
	ImageContainer,
	PanelAbsolute,
	ButtonAbsoluteContainer,
	ButtonAbsolute,
} from "./styles";


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
			<IllustrationContainer>
				<Image src={Illustrations.HeroIllustration}></Image>
			</IllustrationContainer>

			<PanelContainer>
				<PanelAbsolute>
					<ImageContainer>
						<Image src={Illustrations.HeroCar}></Image>
					</ImageContainer>
					<ButtonAbsoluteContainer>
						<ButtonAbsolute onClick={handleRegister}>
							Trenuj z nami
							<ArrowRight className=""></ArrowRight>
						</ButtonAbsolute>
					</ButtonAbsoluteContainer>
				</PanelAbsolute>

				<PanelButton className="flex justify-center w-full mt-10" onClick={scrollDown}>
					<Image src={Arrows.Down}></Image>
				</PanelButton>
			</PanelContainer>


			<PanelContainer>
				<Panel>
					<InfoContainer>
						<Title>
							Trenuj z nami
						</Title>
						<SubTitle>Stale aktualizujemy naszą bazę pytań egzaminacyjnych. Przygotuj się z nami do egzaminu w 2023!</SubTitle>
						<PanelButton onClick={handleRegister}>
							Załóż konto
							<ArrowRight></ArrowRight>
						</PanelButton>
					</InfoContainer>
					<ImageContainer>
						<Image src={Illustrations.HeroInfo1}></Image>
					</ImageContainer>
				</Panel>

				<button className="flex justify-center w-full mt-10" onClick={scrollDown}>
					<Image src={Arrows.Down}></Image>
				</button>
			</PanelContainer>

			<PanelContainer>
				<Panel>
					<ImageContainer>
						<Image src={Illustrations.RegistrationIllustration}></Image>
					</ImageContainer>
					<InfoContainer>
						<Title>
							Załóż darmowe konto
						</Title>
						<SubTitle>Stale aktualizujemy naszą bazę pytań egzaminacyjnych. Przygotuj się z nami do egzaminu w 2023!</SubTitle>
						<PanelButton onClick={handleRegister}>
							Zarejestruj się
							<ArrowRight className=""></ArrowRight>
						</PanelButton>
					</InfoContainer>
				</Panel>
			</PanelContainer>

		</HeroContainer>
	);
}
