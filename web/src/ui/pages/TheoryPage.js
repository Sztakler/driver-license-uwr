import React from "react";

import PageTemplate from "../components/templates/PageTemplate";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

export default function TheoryPage() {
	return (
		<PageTemplate header={<Navbar />} footer={<Footer />}>
			<>Teoria</>
		</PageTemplate>
	);
}
