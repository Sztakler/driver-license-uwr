import React from "react";
import Routing from "./routing/routes";
import { RecoilRoot } from "recoil";

const App = () => {
	return (
		<RecoilRoot>
			<Routing />
		</RecoilRoot>
	);
};

export default App;
