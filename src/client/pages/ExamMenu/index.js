import React from "react";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";

import PageTemplate from "client/components/templates/PageTemplate";
import Navbar from "client/components/organisms/Navbar";
import Subtitle from "client/components/atoms/Subtitle";
import Button from "client/components/atoms/Button";

import {
	Container,
	HeaderContainer,
	IllustrationContainer,
	TitleContainer,
	Title,
} from "./styles";

export default function ExamMenuPage() {
	const navigate = useNavigate();
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
								<div className="block bg-exam-menu w-full h-[371px] bg-center bg-no-repeat bg-contain"></div>
							</IllustrationContainer>
							<div className="flex flex-row flex-wrap w-full gap-4 justify-center mt-2 mb-6">
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
