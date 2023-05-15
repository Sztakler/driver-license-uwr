import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

import Sidebar from "../../molecules/Sidebar";

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
	SidebarArrowButton,
	SidebarArrowButtonParagraph,
	SidebarButtonInvisibleCheckbox,
	ScrolldownButton,
} from "./styles";

import znakiOstrzegawcze from "../../../../../../src/assets/images/svg/textbook/znaki-ostrzegawcze/znaki-ostrzegawcze";
import textbookImage from "../../../../../../src/assets/images/svg/icons/Illustrations";
import Arrows from "../../../../../../src/assets/images/svg/icons/Arrows";
import ArrowLeft from "../../../../icons/ArrowLeft";
import ArrowRight from "../../../../icons/ArrowLeft";

import Paragraph from "../../atoms/Paragraph";
import Image from "../../atoms/Image";
import Illustrations from "../../../../../../src/assets/images/svg/icons/Illustrations";

export default function Theory({ navigation, content }) {
	const [isSidebarVisible, setIsSidebarVisible] = useState(true);

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

	let handleSidebarClick = () => {
		setIsSidebarVisible(!isSidebarVisible);
	};

	let scrollDown = () => {
		document
			.getElementById("MainContainer")
			.scrollIntoView({ behavior: "smooth" });
	};

	function Arrow(props) {
		return (
			<svg className={props.sidebarHidden ? "rotate-180" : ""} width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M10.5141 1L1 10.5141L10.5141 20.0282" stroke="#292D32" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
				<path d="M27.6454 10.5144H1.26611" stroke="#292D32" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		)
	}

	function ToggleSidebarButton(props) {
		return (
			<SidebarArrowButton onClick={handleSidebarClick} className={props.sidebarHidden? "top-[16px] left-[8px]" : ""}>
				{props.sidebarHidden ?
					<Arrow sidebarHidden /> :
					<Arrow />
				}
				<SidebarArrowButtonParagraph className={props.sidebarHidden? "translate-y-16 -translate-x-14" : ""}>Zwiń spis treści</SidebarArrowButtonParagraph>
				<SidebarButtonInvisibleCheckbox type="checkbox">
				</SidebarButtonInvisibleCheckbox>
			</SidebarArrowButton>
		)
	}

	return (
		<Container>
			<HeaderContainer>
				<TitleContainer>
					<Title>Podręcznik</Title>
					<Subtitle>Ten darmowy podręcznik pozwoli ci szybko nauczyć się podstaw teorii zasad ruchu drogowego.</Subtitle>
				</TitleContainer>
				<IllustrationContainer>
					<Image src={Illustrations.TextbookIllustration}></Image>
					<ScrolldownButton onClick={scrollDown}>
						<Image src={Arrows.Down}></Image>
					</ScrolldownButton>
				</IllustrationContainer>
			</HeaderContainer>
			<MainContainer id="MainContainer">
				{isSidebarVisible ?
					<SidebarContainer>
						<ToggleSidebarButton />
						<Sidebar navigation={navigation}></Sidebar>
					</SidebarContainer>
					:
					<ToggleSidebarButton sidebarHidden/>
				}
				<Content>
					<Title>Znaki ostrzegawcze</Title>
					<Subtitle>rozdział: Znaki pionowe</Subtitle>
					<Paragraph style="text-[#0d0d0d] max-w-prose text-lg text-left" content="">Znaki te wskazują kierującemu jak powinien się zachować w miejscu, do którego się zbliża. Znaki nakazujące kierunek jazdy mogą być umieszczone na przedłużeniu osi jezdni (drogi) lub na samej jezdni (drodze).</Paragraph>
					<PanelsScroller>
						{panelsContents.map(panel =>
							<Panel>
								<Image src={panel.image} className="h-[14rem] text-elipsis"></Image>
								<Paragraph style="text-[#0d0d0d]">{panel.description}</Paragraph>
							</Panel>
						)}
					</PanelsScroller>
				</Content>
			</MainContainer>
		</Container>
	);
}
