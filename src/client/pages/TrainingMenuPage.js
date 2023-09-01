import React from "react";
import PageTemplate from "client/components/templates/PageTemplate";
import Navbar from "client/components/organisms/Navbar";
import Menu from "client/components/organisms/Menu";

export default function TrainingMenuPage() {
	return (
		<PageTemplate header={<Navbar />}>
			<Menu
				title={"TRENING"}
				subtitle={
					"Zapraszamy Cię na sesję treningową! TRENING to pytania egzaminacyjne bez końca. Możesz użyć filtrów, aby wybrać pytania, których chcesz się dziś uczyć."
				}
				navigateTo={"/trening/filtry"}
				buttonText={"Wybór pytań"}
				mobileBgImage={"max-md:bg-training-menu-mobile"}
				desktopBgImage={"md:bg-training-menu"}
			/>
		</PageTemplate>
	);
}
