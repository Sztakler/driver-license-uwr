import React from "react";
import PageTemplate from "../components/templates/PageTemplate";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import Training from "../components/organisms/Training";

export default function TrainingMenuPage() {
	return (
		<PageTemplate header={<Navbar />} footer={<Footer />}>
			<Training />
		</PageTemplate>
	);
}
