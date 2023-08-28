import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import HamburgerContext from "context/HamburgerViewContext";

import Illustrations from "assets/images/svg/icons/Illustrations";
import Button from "client/components/atoms/Button";
import Image from "client/components/atoms/Image";
import Text from "client/components/atoms/Text";

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
		await fetch("http://localhost:5000/logout", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		});

		navigate("/");
		navigate(0);
	}

	function ToggleMenu(newIsMenuHidden) {
		setIsMenuHidden(newIsMenuHidden);
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
							"relative rounded-t-[18px]  py-1 px-[18px]" +
							(isMenuHidden ? " rounded-b-[18px]" : " ") +
							("/konto" === activePage ? "bg-[#FFD363]" : "")
						}
						onMouseEnter={() => ToggleMenu(false)}
						onMouseLeave={() => ToggleMenu(true)}
					>
						<div
							className={
								"rounded-[18px] flex flex-col absolute min-w-[85px] max-w-[85px] min-h-[48px] -top-[18px] -right-12 items-center justify-center " +
								("/konto" === activePage ? "bg-[#FFBC0D]" : "")
							}
						>
							<Button
								navbar
								navbarIcon
								size={"xl"}
								onClick={() => {
									navigate("/konto");
								}}
								className={
									" flex h-full my-1 mx-1 max-h-[40px] items-center justify-center p-2"
								}
							>
								<Image src={Illustrations.User} />
							</Button>
							{isLoggedIn && isAuthStatusChecked && (
								<Button
									hidden={isMenuHidden}
									navbar
									navbarIcon
									size={"xl"}
									onClick={() => Logout()}
									className=" my-1 mx-1 h-[40px]"
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
