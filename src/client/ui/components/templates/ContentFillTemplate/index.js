import React from "react";
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";

import { PageWrapper, MainContent } from "./styles";
import HamburgerContext from "../../../../../context/HamburgerViewContext";
export default function ContentFillTemplate({
  header,
  children,
  footer,
  ...props
}) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  const { hamburgerView } = useContext(HamburgerContext);

  return (
    <PageWrapper
      hamburgerView={hamburgerView}
      {...props}
      className={
        isDesktop
          ? "bg-gradient-to-b from-[91px] from-[#FFF1DB]  via-[#FFFBF3] via-[20%] to-[#FFFBF3] to-100%"
          : "bg-gradient-to-b from-[#FEDDAC]  to-[#FFF8EB] to-100%"
      }
    >
      {header}
      <MainContent>{children}</MainContent>
    </PageWrapper>
  );
}
