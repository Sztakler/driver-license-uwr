export function lowerCaseAll(text, isDesktop) {
	let res = text.toLowerCase();

	return isDesktop ? res : res.slice(0, 5) + ".";
}

export async function fetchData(path, credentials, body) {
	console.log(credentials, `http://localhost:5000${path}`);
	return await fetch(`http://localhost:5000${path}`, {
		credentials: credentials,
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		});
}
