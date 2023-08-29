import React from "react";
import { render, screen } from "@testing-library/react";
import Heading from ".";

test("renders Heading component with correct text and styles", () => {
	const headingLevel = 2;
	const headingText = "Hello world";
	const headingStyles = "mb-4";

	render(
		<Heading level={headingLevel} styles={headingStyles}>
			{headingText}
		</Heading>
	);

	const headingElement = screen.getByText(headingText);

	expect(headingElement).toBeInTheDocument();
	expect(headingElement.tagName).toBe(`H${headingLevel}`);
	expect(headingElement).toHaveClass(headingStyles);
});
