import React from "react";

import PageTemplate from "../components/templates/PageTemplate";
import Hero from "../components/organisms/Hero";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

export default function HomePage() {
	return (
		<PageTemplate header={<Navbar />} hero={<Hero />} footer={<Footer />} />
	);
}
