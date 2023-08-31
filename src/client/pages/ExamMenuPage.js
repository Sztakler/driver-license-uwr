import React from "react";

import PageTemplate from "client/components/templates/PageTemplate";
import Navbar from "client/components/organisms/Navbar";
import Menu from "client/components/organisms/Menu";

export default function ExamMenuPage() {
	return (
		<PageTemplate header={<Navbar />}>
			<Menu
				title={"EGZAMIN"}
				subtitle={
					"Symulacja egzaminu to tryb, w którym możesz przetestować nabyte przez siebie umiejętności w formie wzorowanej na państwowym egzaminie. Pamiętaj, że w tym trybie nie możesz cofać pytań!"
				}
				navigateTo={"/egzamin/test"}
				buttonText={"Rozpocznij egzamin"}
				mobileBgImage={"max-md:bg-exam-menu-mobile"}
				desktopBgImage={"md:bg-exam-menu"}
			/>
		</PageTemplate>
	);
}
