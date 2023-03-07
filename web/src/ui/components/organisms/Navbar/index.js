import React from "react";

import userLogo from "../../../../../../src/assets/images/user-logo.png";
import Button from "../../atoms/Button";

import { NavbarContainer, LogoArea, NavigationArea } from "./styles";

export default function Navbar() {
	return (
		<NavbarContainer>
			<LogoArea>
				<Button navbar navigationTarget="/">
					Superlogo
				</Button>
			</LogoArea>
			<NavigationArea>
				<Button navbar navigationTarget="/exam">
					Egzamin
				</Button>
				<Button navbar navigationTarget="/learning">
					Nauka
				</Button>
				<Button navbar navigationTarget="/contact">
					Kontakt
				</Button>
				<Button navbar image={userLogo} navigationTarget="/login"></Button>
			</NavigationArea>
		</NavbarContainer>
	);
}
