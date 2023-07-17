import React, { useEffect, useState } from "react";
import Routing from "./routing/routes";
import { RecoilRoot } from "recoil";
import { AuthenticationProvider } from "./src/context/AuthenticationContext";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const checkUserToken = () => {
		const userToken = localStorage.getItem("user-token");
		if (!userToken || userToken === "undefined") {
			setIsLoggedIn(false);
		}
		setIsLoggedIn(true);
	};

	useEffect(() => {
		checkUserToken();
	}, [isLoggedIn]);

	return (
		<RecoilRoot>
			<Routing />
		</RecoilRoot>
	);
}

export default App;
