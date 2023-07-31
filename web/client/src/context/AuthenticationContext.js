import React, { createContext, useEffect, useState } from "react";

const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState({});

	useEffect(() => {
		const checkAuthenticationStatus = async () => {
			try {
				const response = await fetch("http://localhost:5000/check-auth", {
					credentials: "include",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				});
				const data = await response.json();
				console.log("EFFECT: ", data);
				setIsAuthenticated(data.isAuthenticated);
			} catch (error) {
				console.error("Error checking authentication status:", error);
			}
		};

		checkAuthenticationStatus();
	}, [window.location.pathname]);

	const login = (user) => {
		setIsAuthenticated(true);
		setUser(user);
		console.log("Context:", user, isAuthenticated);
	};

	const logout = () => {
		setIsAuthenticated(false);
		setUser({});
	};

	return (
		<AuthenticationContext.Provider
			value={{ isAuthenticated, user, login, logout }}
		>
			{children}
		</AuthenticationContext.Provider>
	);
};

export { AuthenticationContext, AuthenticationProvider };
