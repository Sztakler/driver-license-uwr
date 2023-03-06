import React from "react";

import PageTemplate from "../components/templates/PageTemplate";
import Exam from "../components/organisms/Exam";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

export default function HomePage() {
	return (
		<PageTemplate header={<Navbar />} footer={<Footer />}>
			<Exam />
		</PageTemplate>
	);
}
