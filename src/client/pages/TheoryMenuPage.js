import React from "react";

import Navbar from "client/components/organisms/Navbar";
import TextbookTemplate from "client/components/templates/TextbookTemplate";
import Menu from "client/components/organisms/Menu";

export default function TheoryPage() {
	return (
		<TextbookTemplate header={<Navbar />}>
			<Menu
				title={"Podręcznik"}
				subtitle={
					"Ten darmowy podręcznik pozwoli ci szybko nauczyć się podstaw teorii zasad ruchu drogowego."
				}
				navigateTo={"/podrecznik/wstep"}
				buttonText={"Rozpocznij czytanie"}
				mobileBgImage={"max-md:bg-theory-menu-mobile"}
				desktopBgImage={"md:bg-theory-menu"}
			/>
		</TextbookTemplate>
	);
}
