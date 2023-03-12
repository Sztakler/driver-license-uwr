import React from "react";

import { PageWrapper, MainContent, HeroSection } from "./styles";

export default function PageTemplate({
	header,
	hero,
	children,
	footer,
	...props
}) {
	return (
		<PageWrapper {...props}>
			{header}
			{hero && <HeroSection>{hero}</HeroSection>}
			<MainContent>{children}</MainContent>
			{footer}
		</PageWrapper>
	);
}
