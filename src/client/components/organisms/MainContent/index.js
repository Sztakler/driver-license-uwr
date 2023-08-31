import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Sidebar from "client/components/molecules/Sidebar";

import {
	Container,
	SidebarContainer,
	Content,
	Title,
	Subtitle,
	SidebarArrowButton,
	SidebarArrowButtonParagraph,
} from "./styles";

export default function MainContent({
	navigation,
	panelsContents,
	pageContent,
}) {
	const [isSidebarVisible, setIsSidebarVisible] = useState(true);
	const [sidebarSticky, setSidebarSticky] = useState(false);

	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

	function Arrow(props) {
		return (
			<svg
				className={
					props.sidebarHidden && props.isDesktop
						? "rotate-180"
						: props.sidebarHidden
						? "-rotate-90"
						: props.isDesktop
						? "rotate-0"
						: "rotate-90"
				}
				width="29"
				height="22"
				viewBox="0 0 29 22"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M10.5141 1L1 10.5141L10.5141 20.0282"
					stroke="#292D32"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M27.6454 10.5144H1.26611"
					stroke="#292D32"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		);
	}

	let handleSidebarClick = () => {
		setIsSidebarVisible(!isSidebarVisible);
	};

	function ToggleSidebarButton(props) {
		return (
			<SidebarArrowButton
				onClick={handleSidebarClick}
				sidebarHidden={props.sidebarHidden}
				sidebarSticky={sidebarSticky}
			>
				{props.sidebarHidden ? (
					<Arrow sidebarHidden={true} isDesktop={isDesktop} />
				) : (
					<Arrow sidebarHidden={false} isDesktop={isDesktop} />
				)}

				<SidebarArrowButtonParagraph
					className={
						props.sidebarHidden
							? "md:left-0 md:bottom-60 "
							: "whitespace-nowrap"
					}
				>
					{props.sidebarHidden ? "Rozwiń spis treści" : "Zwiń spis treści"}
				</SidebarArrowButtonParagraph>
			</SidebarArrowButton>
		);
	}

	const handleScroll = () => {
		const parent = document.querySelector("#MainContent");
		const scrollPosition = window.scrollY;
		const parentOffsetTop = parent.offsetTop;

		setSidebarSticky(scrollPosition > parentOffsetTop);
	};

	window.addEventListener("scroll", handleScroll, false);

	return (
		<Container id="MainContent">
			{isSidebarVisible ? (
				<SidebarContainer
					id="sidebar"
					sticky={sidebarSticky}
					sidebarHidden={!isSidebarVisible}
				>
					<Sidebar navigation={navigation}></Sidebar>
					<ToggleSidebarButton />
				</SidebarContainer>
			) : (
				<SidebarContainer id="sidebar" sticky={sidebarSticky}>
					<ToggleSidebarButton sidebarHidden />
				</SidebarContainer>
			)}
			<Content moveRight={isSidebarVisible} sidebarHidden={!isSidebarVisible}>
				<Title>{pageContent.title}</Title>
				<Subtitle>{pageContent.subtitle}</Subtitle>
				{pageContent.body}
			</Content>
		</Container>
	);
}
