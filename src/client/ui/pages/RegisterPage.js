import React from "react";

import ContentFillTemplate from "../components/templates/ContentFillTemplate";
import Navbar from "../components/organisms/Navbar";
import Registration from "../components/organisms/Registration/";

export default function HomePage() {
	return (
		<ContentFillTemplate header={<Navbar />}>
			<Registration />
		</ContentFillTemplate>
	);
}
