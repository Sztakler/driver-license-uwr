import React, { useEffect, useState } from "react";

import {
	Container,
	HeaderContainer,
	IllustrationContainer,
	TitleContainer,
	Title,
	Subtitle,
} from "./styles.jsx";


import Illustrations from "/src/assets/images/svg/icons/Illustrations";
import { useNavigate } from "react-router";
import Paragraph from "../../atoms/Paragraph/index.js";
import BulletList from "../../molecules/BulletList/index.js";

export default function ExamMenu() {
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
    <Container>
			<HeaderContainer>
				<TitleContainer>
					<Title className="text-8xl">Symulacja egzaminu</Title>
					<Subtitle className="pt-5 mb-8 text-2xl max-w-prose">
            Symulacja egzaminu to tryb, w którym możesz przetestować nabyte przez siebie umiejętności. Odwzorowaliśmy dla Ciebie formę egzaminu, tak żeby na państwowym egzaminie nic Cię nie zaskoczyło. Pamiętaj, że w tym trybie nie możesz cofać pytań.
					</Subtitle>
				</TitleContainer>

				<IllustrationContainer>
						<div className="flex flex-col">
							<img
								src={Illustrations.PurpleCar}
								className="self-center w-[70%]"
							></img>
							<div className="flex flex-row justify-center w-full gap-4">
								<button
									className=" bg-[#fffcf5] hover:bg-[#ffd363] mt-10 w-[500px] border rounded-[100px] border-[#0d0d0d]"
								>
									<Subtitle className="py-6 m-0 text-4xl font-semibold text-center">
										Poczytaj o egzaminie
									</Subtitle>
								</button>
								<button
									className=" bg-[#fffcf5] hover:bg-[#ffd363] mt-10 w-[500px] border rounded-[100px] border-[#0d0d0d]"
									onClick={() => navigate("/egzamin/test")}
								>
									<Subtitle className="py-6 m-0 text-4xl font-semibold text-center">
                    Rozpocznij egzamin
									</Subtitle>
								</button>
							</div>
						</div>
				</IllustrationContainer>
			</HeaderContainer>

      {/* TODO: This is only placeholder. Consult with Karolina how to navigate to section below (scrolldown, new path, replace current path content). */}
      <div className="px-32 grid grid-cols-2">
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
  );
}
