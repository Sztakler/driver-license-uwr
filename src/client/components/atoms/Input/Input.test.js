import React from "react";
import { render, screen } from "@testing-library/react";
import Input from ".";

test("renders Input component with correct type and text", () => {
	const inputType = "select";
	const inputValue = "test";

	render(<Input data-testid={inputValue} type={inputType} />);

	const inputElement = screen.getByTestId(inputValue);

	expect(inputElement).toBeInTheDocument();
	expect(inputElement).toHaveAttribute("type", inputType);
});
