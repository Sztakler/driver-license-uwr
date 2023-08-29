import React from "react";
import { render, screen } from "@testing-library/react";
import Button from ".";

test("renders Button component with correct text", () => {
	const buttonText = "Test value";
	render(<Button>{buttonText}</Button>);
	const buttonElement = screen.getByText(buttonText);
	expect(buttonElement).toBeInTheDocument();
});
