import React from "react";

import PageTemplate from "client/components/templates/PageTemplate";
import Navbar from "client/components/organisms/Navbar";

export default function LoadingPage() {
	return (
		<PageTemplate header={<Navbar />}>
			<div className="min-h-screen"></div>
		</PageTemplate>
	);
}
