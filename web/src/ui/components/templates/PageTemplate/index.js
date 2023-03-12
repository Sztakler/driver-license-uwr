import React from "react";

export default function PageTemplate({
	header,
	hero,
	children,
	footer,
	...props
}) {
	return (
		<div
			className="flex flex-col relative min-h-screen bg-orange-100"
			{...props}
		>
			{header}
			{hero && (
				<section className="flex align-middle justify-center">{hero}</section>
			)}
			<main className="flex flex-auto w-full h-full items-center justify-center pb-16 mb-16 mt-6">
				{children}
			</main>
			<footer className="bg-white absolute bottom-0 w-full h-16">
				{footer}
			</footer>
		</div>
	);
}
