import React from "react";

import PageTemplate from "client/components/templates/PageTemplate";
import Navbar from "client/components/organisms/Navbar";
import Footer from "client/components/organisms/Footer";
import Sidebar from "client/components/molecules/Sidebar";
import Theory from "../client/components/organisms/Theory";
import { useLocation } from "react-router";

export default function TheoryPage() {
	return (
		<PageTemplate header={<Navbar />} footer={<Footer />}>
			<Theory navigation={}>content</Theory>
		</PageTemplate>
	);
}
