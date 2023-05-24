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

export default function ExamMenu() {
  return (
			<HeaderContainer>
				<TitleContainer>
					<Title className="text-8xl">Trening</Title>
					<Subtitle className="pt-5 mb-8 text-2xl max-w-prose">
							Zapraszamy Cię na sesję treningową! TRENING to pytania egzaminacyjne bez końca. Możesz użyć filtrów, aby wybrać pytania, których chcesz się dziś uczyć.
					</Subtitle>
				</TitleContainer>

				<IllustrationContainer>
						<div className="flex flex-col">
							<img
								src={Illustrations.TrainingIllustration}
								className="self-center w-[70%]"
							></img>
							<div className="flex flex-row justify-center w-full gap-4">
								<button
									className=" bg-[#fffcf5] hover:bg-[#ffd363] mt-10 w-[500px] border rounded-[100px] border-[#0d0d0d]"
									onClick={() => navigate("/trening/praktyka")}
								>
									<Subtitle className="py-6 m-0 text-4xl font-semibold text-center">
										PODSUMOWANIE TRENINGU
									</Subtitle>
								</button>
								<button
									className=" bg-[#fffcf5] hover:bg-[#ffd363] mt-10 w-[500px] border rounded-[100px] border-[#0d0d0d]"
								>
									<Subtitle className="py-6 m-0 text-4xl font-semibold text-center">
										PRZEJDŹ DALEJ
									</Subtitle>
								</button>
							</div>
						</div>
				</IllustrationContainer>
			</HeaderContainer>
  );
}
