import React, { createContext, useState } from "react";

const HamburgerContext = createContext();

export const HamburgerProvider = ({ children }) => {
	const [hamburgerView, setHamburgerView] = useState(false);

	const setNewHamburgerView = (newHamburgerView) => {
		setHamburgerView(newHamburgerView);
	};

	return (
		<HamburgerContext.Provider
			value={{
				hamburgerView,
				setNewHamburgerView,
			}}
		>
			{children}
		</HamburgerContext.Provider>
	);
};

export default HamburgerContext;
