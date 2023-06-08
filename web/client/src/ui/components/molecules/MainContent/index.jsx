import React, { useEffect, useState } from "react";

import Sidebar from "../../molecules/Sidebar";

import {
  Container,
  SidebarContainer,
  Content,
  Title,
  Subtitle,
  PanelsScroller,
  Panel,
  SidebarArrowButton,
  SidebarArrowButtonParagraph,
  SidebarButtonInvisibleCheckbox,
} from "./styles";

import Paragraph from "../../atoms/Paragraph";
import Image from "../../atoms/Image";

export default function MainContent({ navigation, panelsContents}) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

	function Arrow(props) {
		return (
			<svg
				className={props.sidebarHidden ? "rotate-180" : ""}
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
				className={props.sidebarHidden ? "top-[16px] left-[8px]" : ""}
			>
				{props.sidebarHidden ? <Arrow sidebarHidden /> : <Arrow />}
				<SidebarArrowButtonParagraph
					className={
						props.sidebarHidden ? "translate-y-16 -translate-x-14" : ""
					}
				>
					Zwiń spis treści
				</SidebarArrowButtonParagraph>
				<SidebarButtonInvisibleCheckbox type="checkbox"></SidebarButtonInvisibleCheckbox>
			</SidebarArrowButton>
		);
	}

  return(
    <Container id="MainContent" >
      {isSidebarVisible ? (
        <SidebarContainer>
          <ToggleSidebarButton />
          <Sidebar navigation={navigation}></Sidebar>
        </SidebarContainer>
      ) : (
        <ToggleSidebarButton sidebarHidden />
      )}
      <Content>
        <Title>Znaki ostrzegawcze</Title>
        <Subtitle>rozdział: Znaki pionowe</Subtitle>
        <Paragraph
          style="text-[#0d0d0d] max-w-prose text-lg text-left"
          content=""
        >
          Znaki te wskazują kierującemu jak powinien się zachować w miejscu,
          do którego się zbliża. Znaki nakazujące kierunek jazdy mogą być
          umieszczone na przedłużeniu osi jezdni (drogi) lub na samej jezdni
          (drodze).
        </Paragraph>
        <PanelsScroller>
          {panelsContents.map((panel) => (
            <Panel>
              <Image
                src={panel.image}
                className="h-[14rem] text-elipsis"
              ></Image>
              <Paragraph style="text-[#0d0d0d]">
                {panel.description}
              </Paragraph>
            </Panel>
          ))}
        </PanelsScroller>
      </Content>
    </Container>
  );
}
