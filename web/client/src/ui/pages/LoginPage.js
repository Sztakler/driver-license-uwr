import React from "react";

import LoginTemplate from "../components/templates/LoginTemplate";
import Navbar from "../components/organisms/Navbar";
import Authentication from "../components/organisms/Authentication";

export default function HomePage() {
	return (
		<LoginTemplate header={<Navbar />}>
			<Authentication />
		</LoginTemplate>
	);
}
