import React from "react";

export default function ContentFillTemplate({
	header,
	children,
	footer,
	...props
}) {
	return (
		<div
			className="flex flex-col relative min-h-screen bg-orange-100"
			{...props}
		>
			<div className="p-8">{header}</div>
			<main className="flex bg-road-texture bg-cover flex-auto items-center justify-center mb-16">
				{children}
			</main>
			<footer className="bg-white absolute bottom-0 w-full h-16">
				{footer}
			</footer>
		</div>
	);
}
