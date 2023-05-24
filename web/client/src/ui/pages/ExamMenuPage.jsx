import React from "react";

import PageTemplate from "../components/templates/PageTemplate";
import ExamMenu from "../components/organisms/ExamMenu";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

export default function ExamMenuPage() {
	return (
		<PageTemplate header={<Navbar />} footer={<Footer />}>
			<ExamMenu />
		</PageTemplate>
	);
}
