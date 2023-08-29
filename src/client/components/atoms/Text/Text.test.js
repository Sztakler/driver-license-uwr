import React from "react";
import { render, screen } from "@testing-library/react";
import Text from ".";

test("renders Text component with correct text and styles", () => {
	const text = "some text";
	render(<Text className="font-medium">{text}</Text>);

	const textElement = screen.getByText(text);

	expect(textElement).toBeInTheDocument();
	expect(textElement).toHaveClass("font-medium");
});
