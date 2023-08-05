import React from "react";
import Image from "../../atoms/Image";

import { HeroContainer, PanelContainer, ImageContainer } from "./styles";

import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router";
import HomePageIllustrations from "../../../../assets/images/svg/HomePage/HomePageIllustrations";

export default function Hero() {
	const navigate = useNavigate();

	let scrollDown = (panelIndex) => {
		console.log("panel-" + panelIndex);
		document
			.getElementById("panel-" + panelIndex)
			.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
	};

	return (
		<HeroContainer id="HeroContainer">
			<PanelContainer className="relative h-[calc(100vh-145px)]" id="panel-0">
				<ImageContainer className="w-full h-[80%]">
					<Image
						className="w-full h-full max-w-full block"
						src={HomePageIllustrations.HeroImage1}
					></Image>
				</ImageContainer>
				<div className="flex flex-col absolute top-[57%] left-[35%] translate-x-1/2 -translate-y-1/2 w-[26%] gap-4 max-md:gap-2 max-sm:gap-0">
					<Button
						primary
						className="flex self-start px-[6.435vw] py-[1.888vh]"
						onClick={() => navigate("/register")}
					>
						<Text className="text-[1.1vw] leading-none">Trenuj z nami</Text>
					</Button>
				</div>
				<ImageContainer className="flex justify-center h-[20%]">
					<Button
						onClick={() => {
							scrollDown(1);
						}}
					>
						<Image
							className="flex self-center py-8"
							src={HomePageIllustrations.ArrowDown}
						></Image>
					</Button>
				</ImageContainer>
			</PanelContainer>

			<PanelContainer className="relative h-[calc(100vh-145px)]" id="panel-1">
				<ImageContainer className="w-full h-[80%]">
					<Image
						className=" h-full max-w-full block object-contain"
						src={HomePageIllustrations.HeroImage2}
					></Image>
				</ImageContainer>
				<div className="flex flex-col absolute top-[55.5%] left-[60%] translate-x-1/2 -translate-y-1/2 w-[26%] gap-4 max-md:gap-2 max-sm:gap-0">
					<Button
						primary
						className="self-start"
						onClick={() => navigate("/register")}
					>
						<Text className="text-[1.1vw] leading-none">Trenuj z nami</Text>
					</Button>
				</div>
				<ImageContainer className="flex justify-center h-[20%]">
					<Button
						onClick={() => {
							scrollDown(2);
						}}
					>
						<Image
							className="flex self-center py-8"
							src={HomePageIllustrations.ArrowDown}
						></Image>
					</Button>
				</ImageContainer>
			</PanelContainer>

			<PanelContainer className="relative h-[calc(100vh-145px)]" id="panel-2">
				<ImageContainer className="w-full h-[80%]">
					<Image
						className="w-full h-full max-w-full block"
						src={HomePageIllustrations.HeroImage3}
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
					<Button
						primary
						className="self-start"
						onClick={() => navigate("/register")}
					>
						<Text className="text-[1.1vw] leading-none">
							Załóż darmowe konto
						</Text>
					</Button>
				</div>
				<ImageContainer className="flex justify-center h-[20%]">
					<Button
						onClick={() => {
							scrollDown(3);
						}}
					>
						<Image
							className="flex self-center py-8"
							src={HomePageIllustrations.ArrowDown}
						></Image>
					</Button>
				</ImageContainer>
			</PanelContainer>

			<PanelContainer className="relative h-[calc(100vh-145px)]" id="panel-3">
				<ImageContainer className="w-full h-full">
					<Image
						className="w-full h-full max-w-full block"
						src={HomePageIllustrations.HeroImage4}
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
					<Button
						primary
						className="self-start"
						onClick={() => navigate("/register")}
					>
						<Text className="text-[1.1vw] leading-none">Zarejestruj się</Text>
					</Button>
				</div>
			</PanelContainer>
		</HeroContainer>
	);
}
