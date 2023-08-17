import React, { useContext, useState } from "react";

import { PageWrapper, HeroSection, MainContent } from "./styles";
import HamburgerContext from "../../../../context/HamburgerViewContext";

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
