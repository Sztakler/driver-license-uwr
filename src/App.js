import React from "react";
import Routing from "./routing/routes";
import { RecoilRoot } from "recoil";

import { HamburgerProvider } from "./context/HamburgerViewContext";

function App() {
	return (
		<RecoilRoot>
			<HamburgerProvider>
				<Routing />
			</HamburgerProvider>
		</RecoilRoot>
	);
}

export default App;
