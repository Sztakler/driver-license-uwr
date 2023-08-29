import React from "react";
import { render, screen } from "@testing-library/react";
import Image from ".";

test("renders Image component with correct src, alt and styles", () => {
	const altText = "test";
	const imageSrc =
		"https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_1280.png";
	render(<Image alt={altText} src={imageSrc} />);

	const imageElement = screen.getByAltText(altText);

	expect(imageElement).toBeInTheDocument();
	expect(imageElement).toHaveAttribute("src", imageSrc);
	expect(imageElement).toHaveAttribute("alt", altText);
	expect(imageElement).toHaveClass("object-contain");
});
