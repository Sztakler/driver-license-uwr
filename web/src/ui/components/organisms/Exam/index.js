import React from "react";
import Image from "../../atoms/Image";

import {
	ExamContainer,
	UpperSection,
	LowerSection,
	Title,
	SubTitle,
} from "./styles";
import Button from "../../atoms/Button";

import TestImage from "../../../../../../src/assets/images/test.jpg"

export default function Exam() {
	return (
		<ExamContainer>
			<UpperSection>
				<div className="w-full">
					<img src={TestImage} className="h-full w-full"></img>
				</div>

				<div className="p-10 w-full h-full flex flex-col items-center justify-center gap-12">
					<Button className="bg-orange-500 text-white text-xl w-fit">Zakończ test</Button>

					<div className="flex flex-row gap-12 mb-5">
						<div className="flex flex-col">
							<div className="text-base">Pytania podstawowe</div>
							<div className="bg-blue-500 text-white text-center p-2">1 z 5</div>
						</div>
						<div className="flex flex-col">
							<div className="text-base">Pytania specjalistyczne</div>
							<div className="bg-blue-500 text-white text-center p-2">0 z 10</div>
						</div>
					</div>


					<div className="flex flex-col items-center justify-center mb-25">
						<div>Czas na zapoznanie się z pytaniem</div>
						<div className="bg-gray-400 w-full p-2 text-xl text-center text-yellow-50">20s</div>
					</div>

					<Button className="bg-orange-500 text-white text-base w-fit">Następne pytanie</Button>
				</div>
			</UpperSection>

			<LowerSection>
				<Button className="bg-blue-500 text-white text-base">Tak</Button>
				<Button className="bg-blue-500 text-white text-base">Nie</Button>
			</LowerSection>
		</ExamContainer >
	);
}
