import React, { useEffect, useState } from "react";
import Routing from "./routing/routes";
import { RecoilRoot } from "recoil";

function App() {
	return (
		<RecoilRoot>
			<Routing />
		</RecoilRoot>
	);
}

export default App;
