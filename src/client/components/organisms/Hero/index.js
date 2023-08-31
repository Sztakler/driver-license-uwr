import React from "react";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";

import Image from "client/components/atoms/Image";
import Text from "client/components/atoms/Text";
import Button from "client/components/atoms/Button";
import BulletList from "client/components/molecules/BulletList";
import Slide from "client/components/molecules/Slide";
import HomePageIllustrations from "assets/images/svg/HomePage/HomePageIllustrations";
import Illustrations from "assets/images/svg/icons/Illustrations";

import {
	HeroContainer,
	MobileHeroContainer,
	MobileBottomContainer,
	MobileTopContainer,
} from "./styles";

export default function Hero() {
	const navigate = useNavigate();

	let scrollDown = (panelIndex) => {
		document
			.getElementById("panel-" + panelIndex)
			.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
	};

	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

	if (isDesktop) {
		return (
			<HeroContainer id="HeroContainer">
				<Slide
					id={0}
					bgImage={HomePageIllustrations.HeroImage1_Desktop}
					scrollDown={scrollDown}
				>
					<div className="flex flex-col absolute top-[53%] left-[55%] w-[26%] gap-4 max-md:gap-2 max-sm:gap-0">
						<Button
							primary
							hover
							className="flex flex-row self-start px-[2.525vw] py-[1.8vh]"
							onClick={() => navigate("/trening")}
						>
							<Text className="text-[0.85vw] font-medium leading-none">
								Trenuj z nami
							</Text>
							<Image className="w-[0.85vw]" src={Illustrations.ArrowRight} />
						</Button>
					</div>
				</Slide>
				<Slide
					id={1}
					bgImage={HomePageIllustrations.HeroImage2_Desktop}
					scrollDown={scrollDown}
				>
					<div className="flex flex-col absolute top-[60%] left-[67.3%] translate-x-1/2 -translate-y-1/2 w-[26%] gap-4 max-md:gap-2 max-sm:gap-0">
						<Button
							primary
							hover
							className="flex flex-row self-start px-[2.525vw] py-[1.8vh]"
							onClick={() => navigate("/trening")}
						>
							<Text className="text-[0.85vw] font-medium leading-none">
								Trenuj z nami
							</Text>
							<Image src={Illustrations.ArrowRight} />
						</Button>
					</div>
				</Slide>
				<Slide
					id={2}
					bgImage={HomePageIllustrations.HeroImage4_Desktop}
					scrollDown={scrollDown}
				>
					<div className="flex flex-col absolute top-[45%] left-[61%] -translate-x-1/2 -translate-y-1/2 w-[26%] gap-4 max-md:gap-2 max-sm:gap-0">
						<Text className="text-[#141414] font-display text-[3vw] leading-none">
							Zacznij teraz
						</Text>
						<Text className="text-[1vw] leading-normal font-medium ">
							Z darmowym kontem zyskasz możliwość:
						</Text>
						<BulletList
							points={[
								"dostępu do trybu Trening, gdzie możesz wybierać z bazy wszystkich pytań na podstawie ich znajomości",
								"wglądu w Twoje statystyki i analizy",
								"zapisywania wybranych pytań",
							]}
							bullet="•"
						></BulletList>
						<Button
							primary
							hover
							className="flex flex-row self-start px-[2.525vw] py-[1.8vh]"
							onClick={() => navigate("/register")}
						>
							<Text className="text-[0.85vw] font-medium leading-none">
								Zarejestruj się
							</Text>
							<Image src={Illustrations.ArrowRight} />
						</Button>
					</div>
				</Slide>
				<Slide
					id={3}
					bgImage={HomePageIllustrations.HeroImage3_Desktop}
					scrollDown={scrollDown}
					isLastSlide={true}
				>
					<div className="flex flex-col absolute top-[40%] right-[61%] translate-x-1/2 -translate-y-1/2 w-[26%] gap-4 max-md:gap-2 max-sm:gap-0">
						<Text className="text-[#141414] font-display text-[3vw] leading-none">
							Trenuj z nami
						</Text>
						<Text className="text-[1vw] leading-normal ">
							Stale aktualizujemy naszą bazę pytań egzaminacyjnych. Przygotuj
							się z nami do egzaminu w 2023!
						</Text>
						<Button
							primary
							hover
							className="flex flex-row self-start px-[2.525vw] py-[1.8vh]"
							onClick={() => navigate("/register")}
						>
							<Text className="text-[0.85vw] font-medium leading-none">
								Załóż darmowe konto
							</Text>
							<Image src={Illustrations.ArrowRight} />
						</Button>
					</div>
				</Slide>
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
						<Text className="font-semibold text-[6.66vw]">Przygotuj się</Text>
						<br /> do egzaminu na prawo jazdy w{" "}
						<Text className="italic text-[6.66vw]">ekspresowym</Text> tempie.
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
