import React from "react";

import { PageWrapper, MainContent } from "./styles";

export default function ContentFillTemplate({
	header,
	children,
	footer,
	...props
}) {
	return (
		<PageWrapper {...props}>
			{header}
			<MainContent>{children}</MainContent>
			{footer}
		</PageWrapper>
	);
}
