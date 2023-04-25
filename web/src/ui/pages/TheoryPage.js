import React from "react";

import PageTemplate from "../components/templates/PageTemplate";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import Theory from "../components/organisms/Theory";
import { useLocation } from "react-router";

const uuidv4 = require("uuid/v4");

const navigation = [
	{
		id: uuidv4(),
		name: "Wstęp",
		topics: [{}],
	},
	{
		id: uuidv4(),
		name: "Znaki drogowe",
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
			{
				id: uuidv4(),
				name: "Informacyjne",
				alt: "znaki-informacyjne",
			},
			{
				id: uuidv4(),
				name: "Kierunku i miejscowości",
				alt: "znaki-kierunku-i-miejscowosci",
			},
			{
				id: uuidv4(),
				name: "Uzupełniające",
				alt: "znaki-uzupelniajace",
			},
		],
	},
	{
		id: uuidv4(),
		name: "Sygnalizacja świetlna i kierowanie ruchem",
		topics: [{}],
	},
	{
		id: uuidv4(),
		name: "Manewry podstawowe",
		topics: [{}],
	},
];

let contents = {
	default: `<h4>Default content</h4>`,
	"znaki-ostrzegawcze": "ostrzegawcze",
	"znaki-nakazu": "nakaz",
	"znaki-zakazu": "zakaz",
	"znaki-informacyjne": "informacyjne",
	"znaki-kierunku-i-miejscowosci": "kierunku-i-miejscowosci",
	"znaki-uzupelniajace": "uzupelniajace"
}

export default function TheoryPage() {
	const location = useLocation();
	let output = location.pathname.split("/").pop();
	let content = contents[output] ?? contents.default;
	return (
		<PageTemplate header={<Navbar />} footer={<Footer />}>
			<Theory
				navigation={navigation}
				content={content}
			/>
		</PageTemplate>
	);
}
