import React from "react";
import { render, screen } from "@testing-library/react";
import Label from ".";

test("renders Label component with correct htmlFor and text", () => {
	const labelText = "some label text";
	const labelHtmlFor = "test id of elm";

	render(
		<>
			<Label htmlFor={labelHtmlFor}>{labelText}</Label>
			<input id={labelHtmlFor} />
		</>
	);
	const labelElement = screen.getByText(labelText);

	expect(labelElement).toBeInTheDocument();
	expect(labelElement).toHaveAttribute("for", labelHtmlFor);
});
