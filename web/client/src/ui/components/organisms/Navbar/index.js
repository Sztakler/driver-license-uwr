import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

import PageLogo from "/src/assets/images/svg/icons/PageLogo";
import userLogo from "/src/assets/images/user-logo.png";
import hamburger from "/src/assets/images/menu.png";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";

import NavbarIcons from "/src/assets/images/svg/icons/NavbarIcons";

import {
	NavbarContainer,
	BrandTitle,
	NavbarItem,
	HamburgerOptionArea,
	NavbarLinks,
	NavigationArea,
	Logout,
} from "./styles";
import User from "../../../../icons/User";

export default function Navbar(props) {
	const location = useLocation();
	const navigate = useNavigate();
	const uuidv4 = require("uuid/v4");

	const [hamburgerView, setHamburgerView] = useState(false);
	const [isMenuHidden, setIsMenuHidden] = useState(true);
	const [activePage, setActivePage] = useState(
		`/${location.pathname.split("/")[1]}`
	);

	useEffect(() => {
		setActivePage(`/${location.pathname.split("/")[1]}`);
	}, [location.pathname]
	)

	const handleHamburgerClick = () => {
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
			name: "Podręcznik",
			navigationTarget: "/podrecznik",
			fontSize: "xl",
		},
	];

	async function Logout() {
		await fetch("http://localhost:5000/logout", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		});

		navigate("/");
	}

	function ToggleMenu(newIsMenuHidden) {
		setIsMenuHidden(newIsMenuHidden);
		console.log("toggluje menu!" + isMenuHidden);
	}

	return (
		<NavbarContainer lighter={props.lighter}>
			<BrandTitle hover size="2xl" onClick={() => navigate("/")}>
				<Image src={PageLogo.PageLogo}></Image>
			</BrandTitle>
			<NavigationArea active={hamburgerView}>
				<NavbarLinks>
					{navigationLinks.slice().map((link, index) => {
						return (
							<NavbarItem
								active={link.navigationTarget === activePage ? true : false}
								key={uuidv4 + index}
							>
								<Button
									active={link.navigationTarget === activePage ? true : false}
									navbar
									size={link.fontSize}
									onClick={() => {
										navigate(link.navigationTarget);
									}}
								>
									{link.name}
								</Button>
							</NavbarItem>
						);
					})}

					<NavbarItem className="flex-col" onMouseEnter={() => ToggleMenu(false)} onMouseLeave={() => ToggleMenu(true)}>
						<Button
							active={"/konto" === activePage ? true : false}
							navbar
							navbarIcon
							size={"xl"}
							onClick={() => {
								navigate("/konto");
							}}
						>
							
							<User className="h-10"></User>
						</Button>
						<Button hidden={isMenuHidden} navbar navbarIcon size={"xl"} onClick={() => Logout()}>
							Wyloguj
						</Button>
					</NavbarItem>
				</NavbarLinks>
			</NavigationArea>
			<HamburgerOptionArea>
				<Button navbar hover image={hamburger} onClick={handleHamburgerClick} />
			</HamburgerOptionArea>
		</NavbarContainer>
	);
}
