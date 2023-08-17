import React, { useEffect, useState } from "react";
import Routing from "./routing/routes";
import { RecoilRoot } from "recoil";

import { HamburgerProvider } from "./src/context/HamburgerViewContext";

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
