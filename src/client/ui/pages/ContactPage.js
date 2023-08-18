import React from "react";

import PageTemplate from "../components/templates/PageTemplate";
import Contact from "../components/organisms/Contact";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

export default function ContactPage() {
	return (
		<PageTemplate header={<Navbar />} footer={<Footer />}>
			<Contact />
		</PageTemplate>
	);
}
