import React from "react";
import Image from "../../atoms/Image";

import {
	HeroContainer,
	PanelContainer,
	ImageContainer,
	MobileHeroContainer,
	MobileBottomContainer,
	MobileTopContainer,
} from "./styles";

import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import BulletList from "../../molecules/BulletList";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";
import HomePageIllustrations from "../../../../assets/images/svg/HomePage/HomePageIllustrations";
import Illustrations from "../../../../assets/images/svg/icons/Illustrations";

export default function Hero() {
	const navigate = useNavigate();

	let scrollDown = (panelIndex) => {
		console.log("panel-" + panelIndex);
		document
			.getElementById("panel-" + panelIndex)
			.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
	};

	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

	if (isDesktop) {
		return (
			<HeroContainer id="HeroContainer">
				<PanelContainer className="relative h-[calc(100vh-145px)]" id="panel-0">
					<ImageContainer className="w-full h-[100%]">
						<Image
							className="w-full h-full max-w-full block"
							src={HomePageIllustrations.HeroImage1}
						></Image>
					</ImageContainer>
					<div className="flex flex-col absolute top-[63%] left-[42%] translate-x-1/2 -translate-y-1/2 w-[26%] gap-4 max-md:gap-2 max-sm:gap-0">
						<Button
							primary
							className="flex flex-row self-start px-[2.525vw] py-[1.8vh]"
							onClick={() => navigate("/register")}
						>
							<Text className="text-[0.85vw] font-medium leading-none">
								Trenuj z nami
							</Text>
							<Image className="w-[0.85vw]" src={Illustrations.ArrowRight} />
						</Button>
					</div>
					<ImageContainer className="absolute bottom-10 flex justify-center w-full">
						<Button
							onClick={() => {
								scrollDown(1);
							}}
						>
							<Image
								className="flex self-center w-[2vw]"
								src={HomePageIllustrations.ArrowDown}
							></Image>
						</Button>
					</ImageContainer>
				</PanelContainer>

				<PanelContainer className="relative h-[calc(100vh-145px)]" id="panel-1">
					<ImageContainer className="w-full h-full">
						<Image
							className=" h-full max-w-full block object-contain"
							src={HomePageIllustrations.HeroImage2}
						></Image>
					</ImageContainer>
					<div className="flex flex-col absolute top-[66%] left-[67.3%] translate-x-1/2 -translate-y-1/2 w-[26%] gap-4 max-md:gap-2 max-sm:gap-0">
						<Button
							primary
							className="flex flex-row self-start px-[2.525vw] py-[1.8vh]"
							onClick={() => navigate("/register")}
						>
							<Text className="text-[0.85vw] font-medium leading-none">
								Trenuj z nami
							</Text>
							<Image src={Illustrations.ArrowRight} />
						</Button>
					</div>
					<ImageContainer className="absolute bottom-10 flex justify-center w-full">
						<Button
							onClick={() => {
								scrollDown(2);
							}}
						>
							<Image
								className="flex self-center w-[2vw]"
								src={HomePageIllustrations.ArrowDown}
							></Image>
						</Button>
					</ImageContainer>
				</PanelContainer>

				<PanelContainer className="relative h-[calc(100vh-145px)]" id="panel-2">
					<ImageContainer className="w-full h-[100%]">
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
							Stale aktualizujemy naszą bazę pytań egzaminacyjnych. Przygotuj
							się z nami do egzaminu w 2023!
						</Text>
						<Button
							primary
							className="flex flex-row self-start px-[2.525vw] py-[1.8vh]"
							onClick={() => navigate("/register")}
						>
							<Text className="text-[0.85vw] font-medium leading-none">
								Załóż darmowe konto
							</Text>
							<Image src={Illustrations.ArrowRight} />
						</Button>
					</div>
					<ImageContainer className="absolute bottom-10 flex justify-center w-full">
						<Button
							onClick={() => {
								scrollDown(3);
							}}
						>
							<Image
								className="flex self-center w-[2vw]"
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
							Z darmowym kontem zyskasz możliwość:
						</Text>
						<BulletList
							points={[
								"dostępu do trybu Trening, gdzie możesz wybierać z bazy wszystkich pytań",
								"wglądu w Twoje statystyki i analizy",
								"zapisywania wybranych pytań",
							]}
							bullet="•"
						></BulletList>
						<Button
							primary
							className="flex flex-row self-start px-[2.525vw] py-[1.8vh]"
							onClick={() => navigate("/register")}
						>
							<Text className="text-[0.85vw] font-medium leading-none">
								Zarejestruj się
							</Text>
							<Image src={Illustrations.ArrowRight} />
						</Button>
					</div>
				</PanelContainer>
			</HeroContainer>
		);
	} else {
		return (
			<MobileHeroContainer
				style={{
					backgroundImage: `url(${HomePageIllustrations.HeroImage_Mobile})`,
				}}
			>
				<MobileTopContainer>
					<Text className="font-medium text-[6.66vw] leading-tight">
						<span className="font-semibold">Przygotuj się</span>
						<br /> do egzaminu na prawo jazdy w{" "}
						<span className="italic">ekspresowym</span> tempie.
					</Text>
				</MobileTopContainer>
				<MobileBottomContainer>
					<Text className="font-semibold text-[5.38vw] leading-tight text-[#FFB800]">
						Założ darmowe konto i uzyskaj dostęp do pytań egzaminacyjnych.
					</Text>
					<Button
						primary
						className="flex flex-row self-end w-fit px-[13.84vw] py-[3.33vw] max-md:px-[13.84vw] max-md:py-[3.33vw] mr-4"
						onClick={() => navigate("/register")}
					>
						<Text className="text-[4.36vw] font-medium leading-none">
							Trenuj z nami
						</Text>
						<Image className="w-[4.36vw]" src={Illustrations.ArrowRight} />
					</Button>
				</MobileBottomContainer>
			</MobileHeroContainer>
		);
	}
}
