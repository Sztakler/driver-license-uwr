import React, { useEffect, useState } from "react";

import PageTemplate from "../../components/templates/PageTemplate";
import Navbar from "../../components/organisms/Navbar";
import Subtitle from "../../components/atoms/Subtitle";

import {
	Container,
	HeaderContainer,
	IllustrationContainer,
	TitleContainer,
	Title,
} from "./styles";

import ExamPageIllustrations from "../../../assets/images/svg/ExamPage/ExamPageIllustrations";
import { useNavigate } from "react-router";
import Paragraph from "../../components/atoms/Paragraph";
import BulletList from "../../components/molecules/BulletList";
import Button from "../../components/atoms/Button";
import { useMediaQuery } from "react-responsive";

export default function ExamMenuPage() {
	const navigate = useNavigate();
	const points = [
		[
			"20 pytań z wiedzy podstawowej, na które odpowiadasz tak lub nie",
			"12 pytań z wiedzy specjalistycznej dotyczącej zdawanej kategorii prawa jazdy, na które odpowiadasz wybierając odpowiedź A, B lub C",
		],
		[
			"20 sekund na zapoznanie się z treścią pytania i 15 sekund na udzielenie odpowiedzi",
			"część specjalistyczna: 50 sekund na zapoznanie się z pytaniem i udzielenie odpowiedzi",
		],
	];

	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

	return (
		//TODO WYPIERDOL STYLE I ZRÓB JAK W USERPAGE. DODAJ TAJLTLE I SUBTAJTLE DO ATOMÓW. POPRAW HEADER MOLEKUŁĘ
		<PageTemplate header={<Navbar />}>
			<Container>
				<HeaderContainer>
					<TitleContainer>
						<Title>Egzamin</Title>
						<Subtitle>
							Symulacja egzaminu to tryb, w którym możesz przetestować nabyte
							przez siebie umiejętności w formie wzorowanej na państwowym
							egzaminie. Pamiętaj, że w tym trybie nie możesz cofać pytań!
						</Subtitle>
						{!isDesktop && (
							<div className="flex flex-row flex-wrap w-full justify-center">
								<Button
									primary
									hover
									size="l"
									className="max-md:max-w-[256px] max-md:h-[48px] max-md:text-[20px]"
									onClick={() => navigate("/egzamin/test")}
								>
									Rozpocznij egzamin
								</Button>
							</div>
						)}
					</TitleContainer>

					{isDesktop ? (
						<>
							<IllustrationContainer>
								<div className="block bg-exam-menu w-full h-[371px] bg-top bg-no-repeat bg-contain"></div>
							</IllustrationContainer>
							<div className="flex flex-row flex-wrap w-full gap-4 justify-center">
								<Button
									primary
									hover
									onClick={() => navigate("/egzamin/test")}
									size="l"
								>
									Rozpocznij egzamin
								</Button>
							</div>
						</>
					) : (
						<></>
					)}
				</HeaderContainer>
			</Container>
		</PageTemplate>
	);
}
