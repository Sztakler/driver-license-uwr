import React, { useEffect, useState } from "react";

import PageTemplate from "../../components/templates/PageTemplate";
import Navbar from "../../components/organisms/Navbar";

import {
	Container,
	HeaderContainer,
	IllustrationContainer,
	TitleContainer,
	Title,
	Subtitle,
} from "./styles";

import ExamPageIllustrations from "../../../assets/images/svg/ExamPage/ExamPageIllustrations";
import { useNavigate } from "react-router";
import Paragraph from "../../components/atoms/Paragraph";
import BulletList from "../../components/molecules/BulletList";
import Button from "../../components/atoms/Button";

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

	return (
		<PageTemplate header={<Navbar />}>
			<Container>
				<HeaderContainer>
					<TitleContainer>
						<Title>Egzamin</Title>
						<Subtitle className="mb-8 text-[18px] max-w-prose">
							Symulacja egzaminu to tryb, w którym możesz przetestować nabyte
							przez siebie umiejętności. Odwzorowaliśmy dla Ciebie formę
							egzaminu, tak żeby na państwowym egzaminie nic Cię nie zaskoczyło.
							Pamiętaj, że w tym trybie nie możesz cofać pytań.
						</Subtitle>
					</TitleContainer>

					<IllustrationContainer>
						<div className="block bg-exam-menu w-full h-[500px] bg-center bg-no-repeat bg-contain"></div>
					</IllustrationContainer>
					<div className="flex flex-row flex-wrap w-full  gap-4 justify-center p-[43px]">
						<Button primary hover size="l">
							Poczytaj o egzaminie
						</Button>
						<Button
							primary
							hover
							onClick={() => navigate("/egzamin/test")}
							size="l"
						>
							Rozpocznij egzamin
						</Button>
					</div>
				</HeaderContainer>

				{/* TODO: This is only placeholder. Consult with Karolina how to navigate to section below (scrolldown, new path, replace current path content). */}
				<div className="p-32 grid grid-cols-2">
					<div>
						<Paragraph>Egzamin teoretyczny składa się z 32 pytań:</Paragraph>
						<BulletList points={points[0]} bullet="•"></BulletList>
					</div>
					<div className="max-w-prose">
						<Paragraph>Czas na udzielenie odpowiedzi:</Paragraph>
						<BulletList points={points[1]} bullet="•"></BulletList>
					</div>
				</div>
			</Container>
		</PageTemplate>
	);
}
