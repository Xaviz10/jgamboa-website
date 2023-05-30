import { FC } from "react";
import { StyledDefaultHeader, StyledNavBar } from "./Header.styles";
import { JGamboaLogo } from "../../assets/Svg";

export const Header: FC = () => {
  return (
    <StyledDefaultHeader>
      <JGamboaLogo />
      <StyledNavBar>
        <a href="#about">About</a>
        <a href="#what-i-do">What I do</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </StyledNavBar>
    </StyledDefaultHeader>
  );
};
