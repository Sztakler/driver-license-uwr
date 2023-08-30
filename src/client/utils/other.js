import { urlToServer } from "client/configure_build";

export function lowerCaseAll(text, isDesktop) {
	let res = text.toLowerCase();

	return isDesktop ? res : res.slice(0, 5) + ".";
}

export class UnauthorizedAccessError extends Error {
	constructor(message) {
		super(message);
		this.name = "UnauthorizedAccessError";
	}
}

export async function fetchData(path, credentials, body, method = "GET") {
	console.log(credentials, `${urlToServer}${path}`);
	return await fetch(`${urlToServer}${path}`, {
		method: method,
		credentials: credentials,
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => {
			if (response.status === 401) {
				window.location.href = "/driver-license-uwr";
				throw new UnauthorizedAccessError(
					"User was not authorized to access data"
				);
			}
			return response.json();
		})
		.then((data) => {
			return data;
		});
}

export function getMediaExtension(media) {
	return media.includes(".") ? media.split(".").pop() : "";
}
