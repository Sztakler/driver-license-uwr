import React from "react";

import PageTemplate from "../components/templates/PageTemplate";
import NoNavbarTemplate from "../components/templates/NoNavbarTemplate";
import Exam from "../components/organisms/Exam";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

export default function HomePage() {
	return (
		<NoNavbarTemplate header={<Navbar />} footer={<Footer />} className="bg-white">
			<Exam />
		</NoNavbarTemplate>
	);
}
