import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

import Illustrations from "../../../../assets/images/svg/icons/Illustrations";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";
import Text from "../../atoms/Text";

import {
	NavbarContainer,
	BrandTitle,
	NavbarItem,
	HamburgerOptionArea,
	NavbarLinks,
	NavigationArea,
	Logout,
} from "./styles";

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
		console.log("change");
		const checkAuthenticationStatus = async () => {
			setIsAuthStatusChecked(false);
			setIsLoggedIn(false);
			try {
				const response = await fetch("http://localhost:5000/check-auth", {
					credentials: "include",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				});

				const data = await response.json();
				setIsLoggedIn(data.isAuthenticated);
				setIsAuthStatusChecked(true);
				let userData = JSON.stringify(data.user);
				window.sessionStorage.setItem("User", userData);
			} catch (error) {
				console.error("Error checking authentication status:", error);
			}
		};

		checkAuthenticationStatus();
	}, [location.pathname]);

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isAuthStatusChecked, setIsAuthStatusChecked] = useState(false);

	useEffect(() => {}, []);
	console.log("change");

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
				<Image src={Illustrations.PageLogo}></Image>
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

					<NavbarItem
						className={
							"relative rounded-t-[18px] hover:bg-[#FFBC0D] py-1 px-[18px]" +
							(isMenuHidden ? " rounded-b-[18px]" : " ") +
							("/konto" === activePage ? "bg-[#FFBC0D]" : "")
						}
						onMouseEnter={() => ToggleMenu(false)}
						onMouseLeave={() => ToggleMenu(true)}
					>
						<div className="group w-full rounded-[18px]">
							<Button
								active={"/konto" === activePage ? true : false}
								navbar
								navbarIcon
								size={"xl"}
								onClick={() => {
									navigate("/konto");
								}}
								className={"group-hover:bg-[#FFDD87] px-3 "}
							>
								<Image src={Illustrations.User} />
							</Button>
						</div>
						<div className="absolute top-full left-[50%] -translate-x-1/2 w-full bg-inherit pb-1 rounded-b-[18px]">
							{isLoggedIn && isAuthStatusChecked && (
								<Button
									hidden={isMenuHidden}
									navbar
									navbarIcon
									size={"xl"}
									onClick={() => Logout()}
									className="hover:bg-[#FFDD87] "
								>
									Wyloguj
								</Button>
							)}
						</div>
					</NavbarItem>
				</NavbarLinks>
			</NavigationArea>
			<HamburgerOptionArea>
				{/* <Button navbar hover image={hamburger} onClick={handleHamburgerClick} /> */}
			</HamburgerOptionArea>
		</NavbarContainer>
	);
}
