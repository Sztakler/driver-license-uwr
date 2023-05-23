import React from "react";

import ContentFillTemplate from "../components/templates/ContentFillTemplate";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import Authentication from "../components/organisms/Authentication";

export default function HomePage() {
	return (
		<ContentFillTemplate header={<Navbar />} footer={<Footer />}>
			<Authentication />
		</ContentFillTemplate>
	);
}
