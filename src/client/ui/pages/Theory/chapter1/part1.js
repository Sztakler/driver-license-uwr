import React from "react";

import PageTemplate from "../components/templates/PageTemplate";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import Sidebar from "../components/molecules/Sidebar";
import Theory from "../../../components/organisms/Theory";
import { useLocation } from "react-router";

export default function TheoryPage() {
	return (
		<PageTemplate header={<Navbar />} footer={<Footer />}>
			<Theory navigation={}>content</Theory>
		</PageTemplate>
	);
}
