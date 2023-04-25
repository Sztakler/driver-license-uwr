import React from "react";

import PageTemplate from "../components/templates/PageTemplate";
import QuestionList from "../components/organisms/QuestionList";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import Paragraph from "../components/atoms/Paragraph";
import Heading from "../components/atoms/Heading";

export default function FaqPage() {
	const paragraphText = `Sint pariatur qui exercitation irure sint. Incididunt consequat
	consectetur ex culpa eu dolor. Deserunt culpa Lorem adipisicing et
	cillum aliqua commodo commodo. Sunt mollit labore officia ut nisi enim
	est sunt. Enim consectetur nostrud amet proident commodo est ad tempor
	eu dolor officia. Tempor Lorem nulla veniam ad labore excepteur amet
	ad.`;

	const p = <Text>
		`Sint pariatur qui exercitation irure sint. Incididunt consequat
	consectetur ex culpa eu dolor. Deserunt culpa Lorem adipisicing et
	cillum aliqua commodo commodo. Sunt mollit labore officia ut nisi enim
	est sunt. Enim consectetur nostrud amet proident commodo est ad tempor
	eu dolor officia. Tempor Lorem nulla veniam ad labore excepteur amet
	ad.`;
	</Text>

	return (
		<PageTemplate header={<Navbar />} footer={<Footer />}>
			<Heading level={3}>Często zadawane pytania</Heading>
			<Paragraph style="text-xl" content={paragraphText}></Paragraph>
			<QuestionList />
		</PageTemplate>
	);
}
