import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

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
	const location = useLocation();
	const navigate = useNavigate();

	const [hamburgerView, setHamburgerView] = useState(false);
	const [activePage, setActivePage] = useState(
		`/${location.pathname.split("/")[1]}`
	);
	console.log(activePage);
	const handleHamburgerClick = () => {
		console.log(hamburgerView);
		setHamburgerView((state) => !state);
	};

	let navigationLinks = [
		{
			id: 0,
			name: "Egzamin",
			navigationTarget: "/exam",
			fontSize: "xl",
		},
		{
			id: 0,
			name: "Nauka",
			navigationTarget: "/learning",
			fontSize: "xl",
		},
		{
			id: 0,
			name: "Kontakt",
			navigationTarget: "/contact",
			fontSize: "xl",
		},
		{
			id: 0,
			name: "FAQ",
			navigationTarget: "/faq",
			fontSize: "xl",
		},
		{
			id: 0,
			name: "Moje konto",
			navigationTarget: "/login",
			fontSize: "xl",
		},
	];

	return (
		<NavbarContainer>
			<BrandTitle hover size="2xl" onClick={() => navigate("/")}>
				Superlogo
			</BrandTitle>
			<NavigationArea active={hamburgerView}>
				<NavbarLinks>
					{navigationLinks.map((link) => {
						return (
							<NavbarItem
								active={link.navigationTarget === activePage ? true : false}
							>
								<Button
									navbar
									size={link.fontSize}
									onClick={() => {
										setActivePage(link.navigationTarget);
										navigate(link.navigationTarget);
									}}
								>
									{link.name}
								</Button>
							</NavbarItem>
						);
					})}
				</NavbarLinks>
			</NavigationArea>
			<HamburgerOptionArea>
				<Button navbar hover image={hamburger} onClick={handleHamburgerClick} />
			</HamburgerOptionArea>
		</NavbarContainer>
	);
}
