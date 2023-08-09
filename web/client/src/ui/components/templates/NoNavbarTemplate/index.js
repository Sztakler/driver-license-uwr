import React, { useContext } from "react";
import HamburgerContext from "../../../../context/HamburgerViewContext";

import BrandAbsoluted from "../../molecules/BrandAbsoluted";

import { PageWrapper, MainContent, Wrapper } from "./styles";

export default function NoNavbarTemplate({
	hero,
	children,
	footer,
	count,
	...props
}) {
	const { hamburgerView } = useContext(HamburgerContext);
	return (
		<PageWrapper hamburgerView={hamburgerView} {...props}>
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
