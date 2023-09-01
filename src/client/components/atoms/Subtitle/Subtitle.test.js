import React from "react";
import { render, screen } from "@testing-library/react";
import Subtitle from ".";

test("renders Subtitle component with correct text, styles and attributes", () => {
	const subtitleText = "some subtitle text";
	render(<Subtitle>{subtitleText}</Subtitle>);

	const subtitleElement = screen.getByText(subtitleText);

	expect(subtitleElement).toBeInTheDocument();
	expect(subtitleElement).toHaveClass(
		"text-base text-overflow text-[#0d0d0d] h-[140px] max-w-subtitle"
	);
});
