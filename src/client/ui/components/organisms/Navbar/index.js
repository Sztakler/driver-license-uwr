import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import HamburgerContext from "../../../../../context/HamburgerViewContext";

import Illustrations from "../../../../../assets/images/svg/icons/Illustrations";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";
import Text from "../../atoms/Text";

import {
	NavbarContainer,
	BrandTitle,
	Shortcut,
	NavbarItem,
	HamburgerOptionArea,
	NavbarLinks,
	NavigationArea,
} from "./styles";

export default function Navbar(props) {
	const location = useLocation();
	const navigate = useNavigate();
	const uuidv4 = require("uuid/v4");

	const { hamburgerView, setNewHamburgerView } = useContext(HamburgerContext);
	const [isMenuHidden, setIsMenuHidden] = useState(true);
	const [activePage, setActivePage] = useState(
		`/${location.pathname.split("/")[1]}`
	);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isAuthStatusChecked, setIsAuthStatusChecked] = useState(false);

	useEffect(() => {
		setActivePage(`/${location.pathname.split("/")[1]}`);
		const checkAuthenticationStatus = async () => {
			setIsAuthStatusChecked(false);
			setIsLoggedIn(false);
			try {
				const response = await fetch("http://13.48.57.122:4000/check-auth", {
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

	const handleHamburgerClick = () => {
		setNewHamburgerView((prevState) => !prevState);
	};

	let navigationLinks = [
		{
			id: uuidv4,
			name: "Egzamin",
			navigationTarget: "/egzamin",
			fontSize: "xl",
			visibleInMobile: false,
		},
		{
			id: uuidv4,
			name: "Trening",
			navigationTarget: "/trening",
			fontSize: "xl",
			visibleInMobile: true,
		},
		{
			id: uuidv4,
			name: "Podręcznik",
			navigationTarget: "/podrecznik",
			fontSize: "xl",
			visibleInMobile: true,
		},
	];

	async function Logout() {
		await fetch("http://13.48.57.122:4000/logout", {
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

	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

	return (
		<NavbarContainer lighter={props.lighter} hamburgerExpand={hamburgerView}>
			<BrandTitle hover onClick={() => navigate("/")}>
				<Image src={Illustrations.PageLogo}></Image>
			</BrandTitle>
			<HamburgerOptionArea>
				<Image src={Illustrations.Hamburger} onClick={handleHamburgerClick} />
			</HamburgerOptionArea>
			{!isDesktop && (
				<Shortcut>
					<Button
						active={"/egzamin" === activePage ? true : false}
						navbar
						onClick={() => {
							navigate("/egzamin");
							setNewHamburgerView(false);
						}}
					>
						<Text className="	italic underline underline-offset-2 font-medium">
							Egzamin
						</Text>
					</Button>
				</Shortcut>
			)}
			<NavigationArea hamburgerExpand={hamburgerView}>
				<NavbarLinks>
					{navigationLinks.slice().map((link, index) => {
						if (!link.visibleInMobile && !isDesktop) return;
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
										setNewHamburgerView(false);
									}}
								>
									{link.name}
								</Button>
							</NavbarItem>
						);
					})}

					<NavbarItem
						className={
							"relative rounded-t-[18px] hover:bg-[#FFD363] py-1 px-[18px]" +
							(isMenuHidden ? " rounded-b-[18px]" : " ") +
							("/konto" === activePage ? "bg-[#FFD363]" : "")
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
								className={"group-hover:bg-[#FFD363] px-3 "}
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
									className="hover:bg-[#FFD363] "
								>
									Wyloguj
								</Button>
							)}
						</div>
					</NavbarItem>
				</NavbarLinks>
			</NavigationArea>
		</NavbarContainer>
	);
}
