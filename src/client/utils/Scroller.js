/*
Function used in userPage
*/

function getRelativePos(element) {
	var parentPosition = element.parentNode.getBoundingClientRect(), // position of the parent
		targetPosition = element.getBoundingClientRect(), // position of the target
		position = { top: 0, right: 0, bottom: 0, left: 0 };

	position.top =
		targetPosition.top - parentPosition.top + element.parentNode.scrollTop;
	position.right = targetPosition.right - parentPosition.right;
	position.bottom = targetPosition.bottom - parentPosition.bottom;
	position.left = targetPosition.left - parentPosition.left;

	return position;
}

export function scrollToElement(container, element, duration) {
	var pos = getRelativePos(element);
	scrollTo(container, pos.top, duration);
}

// function doing all the magic
function scrollTo(element, to, duration, onDone) {
	var start = element.scrollTop,
		change = to - start,
		startTime = performance.now(),
		val,
		now,
		elapsed,
		t;

	// animator
	function animateScroll() {
		now = performance.now();
		elapsed = (now - startTime) / 1000;
		t = elapsed / duration;

		element.scrollTop = start + change * easeInOutQuad(t);

		if (t < 1) window.requestAnimationFrame(animateScroll);
		else onDone && onDone();
	}

	animateScroll();
}
function easeInOutQuad(t) {
	return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
