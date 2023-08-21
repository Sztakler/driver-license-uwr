import React, { useState } from "react";
import Header from "../../organisms/Header";
import Image from "../../atoms/Image";
import MainContent from "../../organisms/MainContent";
import Button from "../../atoms/Button";
import znakiOstrzegawcze from "../../../../../assets/images/svg/TextbookPage/znaki-ostrzegawcze/znaki-ostrzegawcze";
import TextbookPageIllustrations from "../../../../../assets/images/svg/TextbookPage/TextbookPageIllustrations";
import Illustrations from "../../../../../assets/images/svg/icons/Illustrations";

import { Container } from "./styles";

export default function Theory({ navigation, content }) {
	const [isTextbookOpen, setIsTextbookOpen] = useState(false);

	const panelsContents = [
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: (
				<div>
					<p>
						<b>C-6) nakaz jazdy prosto lub w prawo</b>
					</p>
					<p>
						Wskazuje, że kierujący pojazdem jest zobowiązany jechać prosto przez
						skrzyżowanie lub skręcić w prawo.
					</p>
				</div>
			),
		},
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: (
				<div>
					<p>
						<b>(C-12) ruch okrężny</b>
					</p>
					<p>
						Wskazuje kierującemu pojazdem skrzyżowanie, na którym ruch odbywa
						się dookoła wysepki w kierunku wskazanym przez znak. Kierujący jest
						zobowiązany do poruszania się dookoła tej wysepki, w odpowiednim
						kierunku. Znak ten występujący łącznie ze znakiem (A-7) oznacza
						pierwszeństwo kierującego znajdującego się na skrzyżowaniu, przed
						kierującym wjeżdżającym (wchodzącym) na to skrzyżowanie.
					</p>
				</div>
			),
		},
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: (
				<div>
					<p>
						<b>C-6) nakaz jazdy prosto lub w prawo</b>
					</p>
					<p>
						Wskazuje, że kierujący pojazdem jest zobowiązany jechać prosto przez
						skrzyżowanie lub skręcić w prawo.
					</p>
				</div>
			),
		},
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: (
				<div>
					<p>
						<b>C-6) nakaz jazdy prosto lub w prawo</b>
					</p>
					<p>
						Wskazuje, że kierujący pojazdem jest zobowiązany jechać prosto przez
						skrzyżowanie lub skręcić w prawo.
					</p>
				</div>
			),
		},
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: (
				<div>
					<p>
						<b>(C-12) ruch okrężny</b>
					</p>
					<p>
						Wskazuje kierującemu pojazdem skrzyżowanie, na którym ruch odbywa
						się dookoła wysepki w kierunku wskazanym przez znak. Kierujący jest
						zobowiązany do poruszania się dookoła tej wysepki, w odpowiednim
						kierunku. Znak ten występujący łącznie ze znakiem (A-7) oznacza
						pierwszeństwo kierującego znajdującego się na skrzyżowaniu, przed
						kierującym wjeżdżającym (wchodzącym) na to skrzyżowanie.
					</p>
				</div>
			),
		},
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: (
				<div>
					<p>
						<b>C-6) nakaz jazdy prosto lub w prawo</b>
					</p>
					<p>
						Wskazuje, że kierujący pojazdem jest zobowiązany jechać prosto przez
						skrzyżowanie lub skręcić w prawo.
					</p>
				</div>
			),
		},
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: (
				<div>
					<p>
						<b>C-6) nakaz jazdy prosto lub w prawo</b>
					</p>
					<p>
						Wskazuje, że kierujący pojazdem jest zobowiązany jechać prosto przez
						skrzyżowanie lub skręcić w prawo.
					</p>
				</div>
			),
		},
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: (
				<div>
					<p>
						<b>(C-12) ruch okrężny</b>
					</p>
					<p>
						Wskazuje kierującemu pojazdem skrzyżowanie, na którym ruch odbywa
						się dookoła wysepki w kierunku wskazanym przez znak. Kierujący jest
						zobowiązany do poruszania się dookoła tej wysepki, w odpowiednim
						kierunku. Znak ten występujący łącznie ze znakiem (A-7) oznacza
						pierwszeństwo kierującego znajdującego się na skrzyżowaniu, przed
						kierującym wjeżdżającym (wchodzącym) na to skrzyżowanie.
					</p>
				</div>
			),
		},
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: (
				<div>
					<p>
						<b>C-6) nakaz jazdy prosto lub w prawo</b>
					</p>
					<p>
						Wskazuje, że kierujący pojazdem jest zobowiązany jechać prosto przez
						skrzyżowanie lub skręcić w prawo.
					</p>
				</div>
			),
		},
	];

	if (isTextbookOpen) {
		return (
			<Container>
				<MainContent navigation={navigation} panelsContents={panelsContents} />
			</Container>
		);
	} else {
		return (
			<Container>
				<Header
					title={"Podręcznik"}
					subtitle={
						"Ten darmowy podręcznik pozwoli ci szybko nauczyć się podstaw teorii zasad ruchu drogowego."
					}
					illustration={TextbookPageIllustrations.Image1}
				>
					<div className="flex flex-row flex-wrap w-full justify-center mt-2 mb-6">
						<Button
							primary
							hover
							onClick={() => {
								setIsTextbookOpen(true);
							}}
							size="l"
							className="max-md:max-w-[256px] max-md:h-[48px] max-md:text-[20px]"
						>
							Zacznij czytać
						</Button>
					</div>
				</Header>
			</Container>
		);
	}
}
