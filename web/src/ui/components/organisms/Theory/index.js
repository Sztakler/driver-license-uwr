import React from "react";
import parse from 'html-react-parser';

import Sidebar from "../../molecules/Sidebar";

import {
	Container,
	Content,
	Title,
	Subtitle,
	PanelsScroller,
	Panel,
} from "./styles";

import znakiOstrzegawcze from "../../../../../../src/assets/images/svg/textbook/znaki-ostrzegawcze/znaki-ostrzegawcze";
import Paragraph from "../../atoms/Paragraph";
import Image from "../../atoms/Image";

export default function Theory({ navigation, content }) {

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

	return (
		<Container>
			<Sidebar navigation={navigation}></Sidebar>
			<Content>
				<Title>Znaki ostrzegawcze</Title>
				<Subtitle>rozdział: Znaki pionowe</Subtitle>
				<Paragraph style="text-[#0d0d0d] max-w-prose text-lg text-left" content="Znaki te wskazują kierującemu jak powinien się zachować w miejscu, do którego się zbliża. Znaki nakazujące kierunek jazdy mogą być umieszczone na przedłużeniu osi jezdni (drogi) lub na samej jezdni (drodze)."></Paragraph>
				<PanelsScroller>
					{panelsContents.map(panel =>
						<Panel>
							<Image src={panel.image} className="px-20e h-[10rem] text-elipsis"></Image>
							<Paragraph style="text-[#0d0d0d]" content={panel.description}></Paragraph>
						</Panel>
					)}
				</PanelsScroller>
			</Content>
		</Container>
	);
}
