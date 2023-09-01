import React from "react";
import Routing from "./routing/routes";

import { HamburgerProvider } from "./context/HamburgerViewContext";

function App() {
	return (
		<HamburgerProvider>
			<Routing />
		</HamburgerProvider>
	);
}

export default App;
