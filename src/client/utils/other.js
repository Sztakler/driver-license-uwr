export function lowerCaseAll(text, isDesktop) {
	let res = text.toLowerCase();

	return isDesktop ? res : res.slice(0, 5) + ".";
}

export class UnauthorizedAccessError extends Error {
	constructor(message) {
		super(message);
		this.name = 'UnauthorizedAccessError';
	}
}

export async function fetchData(path, credentials, body, method = "GET") {
	console.log(credentials, `http://localhost:5000${path}`);
	return await fetch(`http://localhost:5000${path}`, {
		method: method,
		credentials: credentials,
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => {
			if (response.status === 401) {
				window.location.href = "/driver-license-uwr";
				throw new UnauthorizedAccessError('User was not authorized to access data');
			  }
			  return response.json();
		})
		.then((data) => {
			return data;
		});
}
