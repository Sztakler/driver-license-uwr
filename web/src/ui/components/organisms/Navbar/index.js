import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

import PageLogo from "../../../../../../src/assets/images/svg/icons/PageLogo";
import userLogo from "../../../../../../src/assets/images/user-logo.png";
import hamburger from "../../../../../../src/assets/images/menu.png";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";

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
	const uuidv4 = require("uuid/v4");

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
			id: uuidv4,
			name: "Egzamin",
			navigationTarget: "/egzamin",
			fontSize: "xl",
		},
		{
			id: uuidv4,
			name: "Trening",
			navigationTarget: "/trening",
			fontSize: "xl",
		},
		{
			id: uuidv4,
			name: "Kontakt",
			navigationTarget: "/kontakt",
			fontSize: "xl",
		},
		{
			id: uuidv4,
			name: "FAQ",
			navigationTarget: "/faq",
			fontSize: "xl",
		},
		{
			id: uuidv4,
			name: "Moje konto",
			navigationTarget: "/login",
			fontSize: "xl",
		},
	];

	return (
		<NavbarContainer>
			<BrandTitle hover size="2xl" onClick={() => navigate("/")}>
				<Image src={PageLogo.PageLogo}></Image>
			</BrandTitle>
			<NavigationArea active={hamburgerView}>
				<NavbarLinks>
					{navigationLinks.map((link, index) => {
						return (
							<NavbarItem
								active={link.navigationTarget === activePage ? true : false}
								key={uuidv4 + index}
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
