import React from "react";

import PageTemplate from "../components/templates/PageTemplate";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import LearningOption from "../components/organisms/LearningOption";

export default function HomePage() {
	return (
		<PageTemplate header={<Navbar />} footer={<Footer />}>
			<LearningOption />
		</PageTemplate>
	);
}
