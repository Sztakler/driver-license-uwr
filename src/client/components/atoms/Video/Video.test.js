import React from "react";
import { render, screen } from "@testing-library/react";
import Video from ".";

test("renders Video component with correct src and title", () => {
	const videoTitle = "test";
	const videoSrc = "https://example.com/video.mp4";
	render(<Video title={videoTitle} src={videoSrc} />);

	const videoElement = screen.getByTitle(videoTitle);

	expect(videoElement).toBeInTheDocument();
	expect(videoElement).toHaveAttribute("src", videoSrc);
	expect(videoElement).toHaveAttribute("title", videoTitle);
});
