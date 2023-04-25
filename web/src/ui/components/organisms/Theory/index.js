import React from "react";
import parse from 'html-react-parser';

import Sidebar from "../../molecules/Sidebar";

import { 
	Container,
	Content,
	Title,
	Subtitle,
	PanelsContainer,
	Panel,
} from "./styles";

import znakiOstrzegawcze from "../../../../../../src/assets/images/svg/textbook/znaki-ostrzegawcze/znaki-ostrzegawcze";
import Paragraph from "../../atoms/Paragraph";
import Image from "../../atoms/Image";

export default function Theory({ navigation, content }) {
	
	const panelsContents = [
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: "C-6) nakaz jazdy prosto lub w prawo Wskazuje, że kierujący pojazdem jest zobowiązany jechać prosto przez skrzyżowanie lub skręcić w prawo."
		},	
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: "(C-12) ruch okrężny Wskazuje kierującemu pojazdem skrzyżowanie, na którym ruch odbywa się dookoła wysepki w kierunku wskazanym przez znak. Kierujący jest zobowiązany do poruszania się dookoła tej wysepki, w odpowiednim kierunku. Znak ten występujący łącznie ze znakiem (A-7) oznacza pierwszeństwo kierującego znajdującego się na skrzyżowaniu, przed kierującym wjeżdżającym (wchodzącym) na to skrzyżowanie."
		},	
		{
			image: znakiOstrzegawcze.ExampleSVG,
			description: "C-6) nakaz jazdy prosto lub w prawo Wskazuje, że kierujący pojazdem jest zobowiązany jechać prosto przez skrzyżowanie lub skręcić w prawo."
		},	
	]

	return (
		<Container>
			<Sidebar navigation={navigation}></Sidebar>
			<Content>
				<Title>Znaki ostrzegawcze</Title>
				<Subtitle>rozdział: Znaki pionowe</Subtitle>
				<Paragraph style="text-[#0d0d0d] max-w-prose text-lg text-left" content="Znaki te wskazują kierującemu jak powinien się zachować w miejscu, do którego się zbliża. Znaki nakazujące kierunek jazdy mogą być umieszczone na przedłużeniu osi jezdni (drogi) lub na samej jezdni (drodze)."></Paragraph>
				<PanelsContainer>
					{panelsContents.map( panel => 
						<Panel>
							<Image src={panel.image} className="px-20"></Image>
							<Paragraph style="" content={panel.description}></Paragraph>	
						</Panel>
					)}
				</PanelsContainer>
			</Content>
		</Container>
	);
}
