import React, { Children, useEffect, useMemo } from "react";

import { PageWrapper, MainContent, Wrapper } from "./styles";

import BrandAbsoluted from "../../molecules/BrandAbsoluted";

export default function NoNavbarTemplate({
	hero,
	children,
	footer,
	count,
	...props
}) {
	return (
		<PageWrapper {...props}>
			<BrandAbsoluted />
			{children && (
				<MainContent>
					{count > 1 ? (
						<div className="max-w-[1600px] border-double rounded-2xl w-full h-full pt-16 max-2xl:p-20">
							<Wrapper>{children}</Wrapper>
						</div>
					) : (
						children
					)}
				</MainContent>
			)}
			{footer}
		</PageWrapper>
	);
}
