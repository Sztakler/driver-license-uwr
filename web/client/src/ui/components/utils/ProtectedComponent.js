import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

import LoadingPage from "../../pages/LoadingPage";

export default function ProtectedComponent() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isAuthStatusChecked, setIsAuthStatusChecked] = useState(false);

	useEffect(() => {
		const checkAuthenticationStatus = async () => {
			setIsAuthStatusChecked(false);
			setIsLoggedIn(false);
			try {
				const response = await fetch("http://localhost:5000/check-auth", {
					credentials: "include",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				});
				const data = await response.json();
				setIsLoggedIn(data.isAuthenticated);
				setIsAuthStatusChecked(true);
				let userData = JSON.stringify(data.user);
				window.sessionStorage.setItem("User", userData);
			} catch (error) {
				console.error("Error checking authentication status:", error);
			}
		};
		checkAuthenticationStatus();
	}, []);

	if (!isAuthStatusChecked) {
		return <LoadingPage />;
	}

	return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}