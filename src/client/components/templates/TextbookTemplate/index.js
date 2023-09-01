import React, { useContext } from "react";

import { PageWrapper, MainContent } from "./styles";

const uuidv4 = require("uuid/v4");

const navigation = [
	{
		name: "Wstęp",
		topics: [],
		alt: "wstep",
	},
	{
		id: uuidv4(),
		name: "Znaki drogowe pionowe",
		alt: "",
		topics: [
			{
				id: uuidv4(),
				name: "Ostrzegawcze",
				alt: "znaki-ostrzegawcze",
			},
			{
				id: uuidv4(),
				name: "Nakazu",
				alt: "znaki-nakazu",
			},
			{
				id: uuidv4(),
				name: "Zakazu",
				alt: "znaki-zakazu",
			},
		],
	},
	{
		id: uuidv4(),
		name: "Znaki drogowe poziome",
		alt: "",
		topics: [
			{
				id: uuidv4(),
				name: "Linie",
				alt: "znaki-linie",
			},
		],
	},
	{
		id: uuidv4(),
		name: "Sygnalizacja świetlna i kierowanie ruchem",
		alt: "sygnalizacja-swietlna-i-kierowanie-ruchem",
		topics: [],
	},
];

export default function TextbookTemplate({
	header,
	hero,
	children,
	footer,
	...props
}) {
	const childrenWithProps = React.Children.map(children, (child) => {
		return React.cloneElement(child, { navigation: navigation });
	});

	return (
		<PageWrapper {...props}>
			{header}
			{children && <MainContent>{childrenWithProps}</MainContent>}
		</PageWrapper>
	);
}
