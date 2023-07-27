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

import coolDriver from "/src/assets/images/info-panels/cool-driver.png";
import examScreenshots from "/src/assets/images/info-panels/exam-screenshots.png";
import usersFaces from "/src/assets/images/info-panels/users-faces.png";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import Illustrations from "/src/assets/images/svg/icons/Illustrations";
import ArrowRight from "/src/icons/ArrowRight";
import Arrows from "/src/assets/images/svg/icons/Arrows";
import { useNavigate } from "react-router";
import HomePageIllustrations from "../../../../assets/images/svg/HomePage/HomePageIllustrations";

export default function Hero() {
	const uuidv4 = require("uuid/v4");
	const navigate = useNavigate();

	let infoContent = [
		{
			id: uuidv4(),
			layout: "reverse",
			image: examScreenshots,
			header: "Trenuj z nami",
			description: [
				"Stale aktualizujemy naszą bazę pytań egzaminacyjnych. Przygotuj się z nami do egzaminu w 2023!",
			],
			points: [],
		},
		{
			id: uuidv4(),
			layout: "normal",
			image: usersFaces,
			header: "Załóż darmowe konto",
			description: ["zyskasz możliwość"],
			points: [
				"wglądu w Twoje statystyki i analizy",
				"zapisywania wybranych pytań",
				'dodatkowe funkcje w trybie <span classname="font-semibold">Trening</span>',
			],
		},
	];

	function scrollDown() {}

	function handleRegister() {
		navigate("/register");
	}

	return (
		<HeroContainer id="HeroContainer">
			<PanelContainer className="relative min-h-screen">
				<ImageContainer className="w-full h-full">
					<Image
						className="w-full h-full max-w-full block"
						src={HomePageIllustrations.HeroImage3}
					></Image>
				</ImageContainer>
				<div className="flex flex-col absolute top-[63.5%] left-[66%] translate-x-1/2 -translate-y-1/2 w-[26%] gap-4 max-md:gap-2 max-sm:gap-0">
					<Button primary className="flex self-start">
						<Text className="text-[1.1vw] 2xl:text-[16px] leading-none">
							Załóż darmowe konto
						</Text>
					</Button>
				</div>
			</PanelContainer>

			<PanelContainer className="relative min-h-screen">
				<ImageContainer className="w-full h-full">
					<Image
						className="w-full h-full max-w-full block"
						src={HomePageIllustrations.HeroImage3}
					></Image>
				</ImageContainer>
				<div className="flex flex-col absolute top-[63.5%] left-[66%] translate-x-1/2 -translate-y-1/2 w-[26%] gap-4 max-md:gap-2 max-sm:gap-0">
					<Button primary className="flex self-start">
						<Text className="text-[1.1vw] leading-none">
							Załóż darmowe konto
						</Text>
					</Button>
				</div>
			</PanelContainer>

			<PanelContainer className="relative min-h-screen">
				<ImageContainer className="w-full h-full">
					<Image
						className="w-full h-full max-w-full block"
						src={HomePageIllustrations.HeroImage2}
					></Image>
				</ImageContainer>
				<div className="flex flex-col absolute top-[35%] right-[61%] translate-x-1/2 -translate-y-1/2 w-[26%] gap-4 max-md:gap-2 max-sm:gap-0">
					<Text className="text-[#141414] font-display text-[3vw] leading-none">
						Trenuj z nami!
					</Text>
					<Text className="text-[1vw] leading-none ">
						Stale aktualizujemy naszą bazę pytań egzaminacyjnych. Przygotuj się
						z nami do egzaminu w 2023!
					</Text>
					<Button primary className="self-start ">
						<Text className="text-[1.1vw] 2xl:text-[16px] leading-none">
							Załóż darmowe konto
						</Text>
					</Button>
				</div>
			</PanelContainer>

			<PanelContainer className="relative min-h-[100vh-91px]">
				<ImageContainer className="w-full h-full">
					<Image
						className="w-full h-full max-w-full block"
						src={HomePageIllustrations.HeroImage1}
					></Image>
				</ImageContainer>
				<div className="flex flex-col absolute top-[40%] left-[61%] -translate-x-1/2 -translate-y-1/2 w-[26%] gap-4 max-md:gap-2 max-sm:gap-0">
					<Text className="text-[#141414] font-display text-[3vw] leading-none">
						Zacznij teraz!
					</Text>
					<Text className="text-[1vw] leading-none ">
						Z darmowym kontem zyskasz możliwość: dostępu do trybu Trening, gdzie
						możesz wybierać z bazy wszystkich pytań wglądu w Twoje statystki i
						analizy zapisywania wybranych pytań
					</Text>
					<Button primary className="self-start ">
						<Text className="text-[1.1vw] leading-none">Zarejestruj się</Text>
					</Button>
				</div>
			</PanelContainer>
		</HeroContainer>
	);
}
