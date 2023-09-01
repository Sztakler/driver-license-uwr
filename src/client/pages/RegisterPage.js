import React from "react";

import ContentFillTemplate from "client/components/templates/ContentFillTemplate";
import Navbar from "client/components/organisms/Navbar";
import Registration from "client/components/organisms/Registration";

export default function HomePage() {
	return (
		<ContentFillTemplate header={<Navbar />}>
			<Registration />
		</ContentFillTemplate>
	);
}
