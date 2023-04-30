import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';

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
} from "./styles";

import znakiOstrzegawcze from "../../../../../../src/assets/images/svg/textbook/znaki-ostrzegawcze/znaki-ostrzegawcze";
import textbookImage from "../../../../../../src/assets/images/svg/icons/TextbookImages";
import Arrows from "../../../../../../src/assets/images/svg/icons/Arrows";

import Paragraph from "../../atoms/Paragraph";
import Image from "../../atoms/Image";
import TextbookImages from "../../../../../../src/assets/images/svg/icons/TextbookImages";

export default function Theory({ navigation, content }) {
	const [isSidebarVisible, setIsSidebarVisible] = useState(true);

	const panelsContents = [
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: <div>
				<p><b>C-6) nakaz jazdy prosto lub w prawo</b></p>
				<p>Wskazuje, że kierujący pojazdem jest zobowiązany jechać prosto przez skrzyżowanie lub skręcić w prawo.</p>
			</div>
		},
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: <div>
				<p><b>(C-12) ruch okrężny</b></p>
				<p>Wskazuje kierującemu pojazdem skrzyżowanie, na którym ruch odbywa się dookoła wysepki w kierunku wskazanym przez znak. Kierujący jest zobowiązany do poruszania się dookoła tej wysepki, w odpowiednim kierunku. Znak ten występujący łącznie ze znakiem (A-7) oznacza pierwszeństwo kierującego znajdującego się na skrzyżowaniu, przed kierującym wjeżdżającym (wchodzącym) na to skrzyżowanie.</p>
			</div>
		},
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: <div>
				<p><b>C-6) nakaz jazdy prosto lub w prawo</b></p>
				<p>Wskazuje, że kierujący pojazdem jest zobowiązany jechać prosto przez skrzyżowanie lub skręcić w prawo.</p>
			</div>
		},
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: <div>
				<p><b>C-6) nakaz jazdy prosto lub w prawo</b></p>
				<p>Wskazuje, że kierujący pojazdem jest zobowiązany jechać prosto przez skrzyżowanie lub skręcić w prawo.</p>
			</div>
		},
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: <div>
				<p><b>(C-12) ruch okrężny</b></p>
				<p>Wskazuje kierującemu pojazdem skrzyżowanie, na którym ruch odbywa się dookoła wysepki w kierunku wskazanym przez znak. Kierujący jest zobowiązany do poruszania się dookoła tej wysepki, w odpowiednim kierunku. Znak ten występujący łącznie ze znakiem (A-7) oznacza pierwszeństwo kierującego znajdującego się na skrzyżowaniu, przed kierującym wjeżdżającym (wchodzącym) na to skrzyżowanie.</p>
			</div>
		},
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: <div>
				<p><b>C-6) nakaz jazdy prosto lub w prawo</b></p>
				<p>Wskazuje, że kierujący pojazdem jest zobowiązany jechać prosto przez skrzyżowanie lub skręcić w prawo.</p>
			</div>
		},
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: <div>
				<p><b>C-6) nakaz jazdy prosto lub w prawo</b></p>
				<p>Wskazuje, że kierujący pojazdem jest zobowiązany jechać prosto przez skrzyżowanie lub skręcić w prawo.</p>
			</div>
		},
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: <div>
				<p><b>(C-12) ruch okrężny</b></p>
				<p>Wskazuje kierującemu pojazdem skrzyżowanie, na którym ruch odbywa się dookoła wysepki w kierunku wskazanym przez znak. Kierujący jest zobowiązany do poruszania się dookoła tej wysepki, w odpowiednim kierunku. Znak ten występujący łącznie ze znakiem (A-7) oznacza pierwszeństwo kierującego znajdującego się na skrzyżowaniu, przed kierującym wjeżdżającym (wchodzącym) na to skrzyżowanie.</p>
			</div>
		},
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: <div>
				<p><b>C-6) nakaz jazdy prosto lub w prawo</b></p>
				<p>Wskazuje, że kierujący pojazdem jest zobowiązany jechać prosto przez skrzyżowanie lub skręcić w prawo.</p>
			</div>
		},

	]

	let handleSidebarClick = () => {
		setIsSidebarVisible(!isSidebarVisible);
	}

	let scrollDown = () => {
		document.getElementById("MainContainer").scrollIntoView({behavior: "smooth"});
	}

	return (
		<Container>
			<HeaderContainer>
				<TitleContainer>
					<Title className="text-8xl">Podręcznik</Title>
					<Subtitle className="text-2xl pt-5 max-w-prose">Ten darmowy podręcznik pozwoli ci szybko nauczyć się podstaw teorii zasad ruchu drogowego.</Subtitle>
				</TitleContainer>
				<IllustrationContainer>
					<Image src={TextbookImages.MainIllustration}></Image>
					<button className="self-center mt-10" onClick={scrollDown}>
						<Image src={Arrows.Down}></Image>
					</button>
				</IllustrationContainer>
			</HeaderContainer>
			<MainContainer id="MainContainer" className="relative w-full">
				{isSidebarVisible ?
					<SidebarContainer>
						<button className="absolute top-[16px] left-[330px] flex flex-col cursor-pointer" onClick={handleSidebarClick}>
							<svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10.5141 1L1 10.5141L10.5141 20.0282" stroke="#292D32" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M27.6454 10.5144H1.26611" stroke="#292D32" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
							<p className="rotate-90 translate-y-16 -translate-x-10">Zwiń spis treści</p>
							<input type="checkbox" className="appearance-none w-[60px] checked:bg-blue-500">
							</input>
						</button>
						<Sidebar navigation={navigation}></Sidebar>
					</SidebarContainer>
					:
					<button className="absolute top-[16px] left-[8px] flex flex-col cursor-pointer" onClick={handleSidebarClick}>
						<svg className="rotate-180" width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.5141 1L1 10.5141L10.5141 20.0282" stroke="#292D32" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M27.6454 10.5144H1.26611" stroke="#292D32" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<p className="rotate-90 translate-y-16 -translate-x-14">Rozwiń spis treści</p>
						<input type="checkbox" className="appearance-none w-[60px] checked:bg-blue-500">
						</input>
					</button>}
				<Content>
					<Title>Znaki ostrzegawcze</Title>
					<Subtitle>rozdział: Znaki pionowe</Subtitle>
					<Paragraph style="text-[#0d0d0d] max-w-prose text-lg text-left" content="Znaki te wskazują kierującemu jak powinien się zachować w miejscu, do którego się zbliża. Znaki nakazujące kierunek jazdy mogą być umieszczone na przedłużeniu osi jezdni (drogi) lub na samej jezdni (drodze)."></Paragraph>
					<PanelsScroller>
						{panelsContents.map(panel =>
							<Panel>
								<Image src={panel.image} className="h-[14rem] text-elipsis"></Image>
								<Paragraph style="text-[#0d0d0d]" content={panel.description}></Paragraph>
							</Panel>
						)}
					</PanelsScroller>
				</Content>
			</MainContainer>
		</Container>
	);
}
