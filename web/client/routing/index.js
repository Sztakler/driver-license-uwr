import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

export default function ProtectedComponent() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isAuthStatusChecked, setIsAuthStatusChecked] = useState(false);

	const sessionId = document.cookie.replace(
		/(?:(?:^|.*;\s*)sessionIDJs\s*\=\s*([^;]*).*$)|^.*$/,
		"$1"
	);

	useEffect(() => {
		const checkAuthenticationStatus = async () => {
			try {
				const response = await fetch("http://localhost:5000/check-auth", {
					credentials: "include",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: `Bearer ${sessionId}`,
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

		if (sessionId) {
			checkAuthenticationStatus();
		} else {
			setIsLoggedIn(false);
			setIsAuthStatusChecked(true);
		}
	}, [sessionId]);

	if (!isAuthStatusChecked) {
		return <div>Dupa</div>;
	}

	return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
