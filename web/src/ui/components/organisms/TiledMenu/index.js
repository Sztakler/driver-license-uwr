import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Heading from "../../atoms/Heading";
import Tile from "../../molecules/Tile";

import {
	Container,
	MainContainer,
	HeaderContainer,
	TitleContainer,
	IllustrationContainer,
	SidebarContainer,
	Content,
	Title,
	Subtitle,
	PanelsScroller,
	Panel,
} from "./styles";

import Arrows from "../../../../../../src/assets/images/svg/icons/Arrows";

import Paragraph from "../../atoms/Paragraph";
import Image from "../../atoms/Image";
import Illustrations from "../../../../../../src/assets/images/svg/icons/Illustrations";
import Input from "../../atoms/Input";

export default function TiledMenu({ data, headings, ...props }) {
	const navigate = useNavigate();

	const [isTrainingSelected, setIsTraningSelected] = useState(true);
	const [tiles, setTiles] = useState(null);
	const [level, setLevel] = useState(0);
	const [appear, setAppear] = useState(false);
	const [pickedOption, setPickedOption] = useState({
		type: { name: "", displayable: "" },
		mode: { name: "", displayable: "" },
		question_set: { name: "", displayable: "" },
	});

	let scrollDown = () => {
		// document
		// 	.getElementById("MainContainer")
		// 	.scrollIntoView({ behavior: "smooth" });
		setIsTraningSelected(true);
	};

	return (
		<Container>
			<HeaderContainer className="m-0">
				<TitleContainer>
					<Title className="text-8xl">Trening</Title>

					{isTrainingSelected ?
						<Subtitle className="text-2xl pt-5 max-w-prose">Wybierz pytania, które chcesz przećwiczyć:</Subtitle>
						:
						<Subtitle className="text-2xl pt-5 max-w-prose">Zapraszamy Cię na sesję treningową! TRENING to pytania egzaminacyjne bez końca. Możesz użyć filtrów, aby wybrać pytania, których chcesz się dziś uczyć.</Subtitle>
					}
				</TitleContainer>

				{isTrainingSelected ?
					<div></div>
					:
					<IllustrationContainer>
						<img src={Illustrations.TrainingIllustration} className="self-center w-[70%]"></img>
						<button className="self-center bg-[#fffcf5] hover:bg-[#ffd363] mt-10 w-[70%] border rounded-[100px] border-[#0d0d0d]" onClick={scrollDown}>
							<Subtitle className="text-4xl font-semibold text-center m-0 py-6">PRZEJDŹ DALEJ</Subtitle>
						</button>
					</IllustrationContainer>
				}

			</HeaderContainer>
			<MainContainer id="MainContainer" className="relative w-full h-full">
			
				{isTrainingSelected ?
					<form className="flex flex-row align-center justify-center w-full h-full gap-48">
						<div className="flex flex-col justify-start">
							<label for="all" className="flex flex-row pb-2">
								<Input checkbox id="all" type="checkbox" value="all"></Input>
								<Paragraph style="text-2xl"><span className="font-semibold">Wszystkie </span>(2125)</Paragraph>
							</label>

							<label for="saved" className="flex flex-row pb-2">
								<Input checkbox id="saved" type="checkbox" value="saved"></Input>
								<Paragraph style="text-2xl"><span className="font-semibold">Zapisane </span>(25)</Paragraph>
							</label>
						</div>

						<div className="flex flex-col justify-start align-center">
							<Subtitle className="text-2xl font-semibold">Poziom znajomości:</Subtitle>

							<label for="low" className="flex flex-row pb-2">
								<Input checkbox id="low" type="checkbox" value="low"></Input>
								<Paragraph style="text-xl">niski (1000)</Paragraph>
							</label>

							<label for="medium" className="flex flex-row pb-2">
								<Input checkbox id="medium" type="checkbox" value="medium"></Input>
								<Paragraph style="text-xl">średni (1000)</Paragraph>
							</label>

							<label for="high" className="flex flex-row pb-2">
								<Input checkbox id="high" type="checkbox" value="high"></Input>
								<Paragraph style="text-xl">wysoki (1000)</Paragraph>
							</label>
						</div>
					</form>
					:
					<div></div>
				}
			</MainContainer>
		</Container >
	);
}
