import React from "react";

import PageTemplate from "client/components/templates/PageTemplate";
import Hero from "client/components/organisms/Hero";
import Navbar from "client/components/organisms/Navbar";

export default function HomePage() {
	return <PageTemplate header={<Navbar />} hero={<Hero />} />;
}
