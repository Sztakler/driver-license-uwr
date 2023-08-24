import React, { useContext } from "react";

import HamburgerContext from "context/HamburgerViewContext";

import { PageWrapper, HeroSection, MainContent } from "./styles";

export default function PageTemplate({
	header,
	hero,
	children,
	footer,
	...props
}) {
	const { hamburgerView } = useContext(HamburgerContext);

	return (
		<PageWrapper hamburgerView={hamburgerView} {...props}>
			{header}
			{hero && <HeroSection>{hero}</HeroSection>}
			{children && <MainContent>{children}</MainContent>}
			{footer}
		</PageWrapper>
	);
}
