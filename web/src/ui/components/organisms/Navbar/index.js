import React, { useState } from "react";
import { useNavigate } from "react-router";

import userLogo from "../../../../../../src/assets/images/user-logo.png";
import hamburger from "../../../../../../src/assets/images/menu.png";
import Button from "../../atoms/Button";

import {
	NavbarContainer,
	BrandTitle,
	NavbarItem,
	HamburgerOptionArea,
	NavbarLinks,
	NavigationArea,
} from "./styles";

export default function Navbar() {
	const navigate = useNavigate();

	const [hamburgerView, setHamburgerView] = useState(false);
	const handleClick = () => {
		console.log(hamburgerView);
		setHamburgerView((state) => !state);
	};

	return (
		<NavbarContainer>
			<BrandTitle hover size="2xl" onClick={() => navigate("/")}>
				Superlogo
			</BrandTitle>
			<NavigationArea active={hamburgerView}>
				<NavbarLinks>
					<NavbarItem>
						<Button navbar hover size="xl" onClick={() => navigate("/exam")}>
							Egzamin
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button
							navbar
							hover
							size="xl"
							onClick={() => navigate("/learning")}
						>
							Nauka
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button navbar hover size="xl" onClick={() => navigate("/contact")}>
							Kontakt
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button navbar hover size="xl" onClick={() => navigate("/login")}>
							Moje konto
						</Button>
					</NavbarItem>
				</NavbarLinks>
			</NavigationArea>
			<HamburgerOptionArea>
				<Button navbar hover image={hamburger} onClick={handleClick} />
			</HamburgerOptionArea>
		</NavbarContainer>
	);
}
