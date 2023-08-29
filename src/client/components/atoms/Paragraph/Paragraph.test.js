import React from "react";
import { render, screen } from "@testing-library/react";
import Paragraph from ".";

test("renders Paragraph component with correct text", () => {
	const paragraphText = "some paragraph text";

	render(<Paragraph>{paragraphText}</Paragraph>);
	const paragraphElement = screen.getByText(paragraphText);

	expect(paragraphElement).toBeInTheDocument();
});
