import React, { useEffect, useState } from "react";

const ProtectedComponent = (comp) => {
	const [isAuthenticated, setAuthenticated] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const isAuthenticated = await checkAuthentication();
			setAuthenticated(isAuthenticated);
		};

		fetchData();
	}, []);

	return (
		<div>
			{isAuthenticated ? (
				<h1>Welcome to the protected component!</h1>
			) : (
				<h1>You are not authenticated.</h1>
			)}
		</div>
	);
};

export default ProtectedComponent;
