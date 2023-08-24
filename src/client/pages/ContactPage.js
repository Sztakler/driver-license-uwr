import React from "react";

import PageTemplate from "client/components/templates/PageTemplate";
import Contact from "client/components/organisms/Contact";
import Navbar from "client/components/organisms/Navbar";
import Footer from "client/components/organisms/Footer";

export default function ContactPage() {
	return (
		<PageTemplate header={<Navbar />} footer={<Footer />}>
			<Contact />
		</PageTemplate>
	);
}
