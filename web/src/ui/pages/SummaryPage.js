import React from "react";

import PageTemplate from "../components/templates/PageTemplate";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import Summary from "../components/organisms/Summary";

export default function SummaryPage() {
	return (
		<PageTemplate header={<Navbar />} footer={<Footer />}>
			<Summary />
		</PageTemplate>
	);
}
