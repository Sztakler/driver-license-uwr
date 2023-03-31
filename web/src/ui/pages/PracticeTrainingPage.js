import React from "react";

import NoNavbarTemplate from "../components/templates/NoNavbarTemplate";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import Practice from "../components/organisms/Practice";

export default function PracticePage() {
	return (
		<NoNavbarTemplate header={<Navbar />} footer={<Footer />}>
			<Practice />
		</NoNavbarTemplate>
	);
}
