import React from "react";

import LoginTemplate from "client/components/templates/LoginTemplate";
import Navbar from "client/components/organisms/Navbar";
import Authentication from "client/components/organisms/Authentication";

export default function HomePage() {
	return (
		<LoginTemplate header={<Navbar />}>
			<Authentication />
		</LoginTemplate>
	);
}
