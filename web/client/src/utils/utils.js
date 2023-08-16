export function lowerCaseAll(text, isDesktop) {
	let res = text.toLowerCase();

	return isDesktop ? res.slice(0, 5) : res.slice(0, 5) + ".";
}
