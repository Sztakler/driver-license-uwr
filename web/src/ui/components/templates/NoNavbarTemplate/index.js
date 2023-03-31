import React from "react";

import { PageWrapper, MainContent } from "./styles";

export default function NoNavbarTemplate({
	hero,
	children,
	footer,
	...props
}) {
	return (
		<PageWrapper {...props}>
			{children && <MainContent>{children}</MainContent>}
			{footer}
		</PageWrapper>
	);
}
