import React from "react";
import { useMediaQuery } from "react-responsive";

import BrandAbsoluted from "client/components/molecules/BrandAbsoluted";

import { PageWrapper, MainContent, Wrapper } from "./styles";

export default function NoNavbarOnMobileTemplate({
	hero,
	children,
	header,
	footer,
	count,
	...props
}) {
	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

	return (
		<PageWrapper {...props}>
			{isDesktop ? <BrandAbsoluted /> : header}
			{children && (
				<MainContent>
					{count > 1 ? (
						<div className="flex max-w-[1600px] border-double rounded-2xl w-full h-full flex-[1_1_auto] pt-4 max-2xl:p-20 max-md:px-0 max-md:py-0">
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
