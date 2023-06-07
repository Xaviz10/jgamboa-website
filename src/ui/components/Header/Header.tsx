import { FC } from "react";
import { StyledDefaultHeader, StyledNavBar } from "./Header.styles";
import { JGamboaLogo } from "../../assets/Svg";
import { useHeader } from "./useHeader";

export const Header: FC = () => {
  const { viewHightPercentage, t } = useHeader();
  return (
    <StyledDefaultHeader
      className={`${
        viewHightPercentage > 0.25 ? "bg-white drop-shadow" : "bg-transparent"
      }`}
    >
      <a href="#">
        <JGamboaLogo
          className="cursor-pointer"
          color={`${viewHightPercentage > 0.25 ? "#4275FA" : "#FFFFFF"}`}
        />
      </a>
      <StyledNavBar>
        <a
          className={`${
            viewHightPercentage > 0.25 ? "text-primary" : "text-white"
          }`}
          href="#about"
        >
          {t("about")}
        </a>
        <a
          className={`${
            viewHightPercentage > 0.25 ? "text-primary" : "text-white"
          }`}
          href="#what-i-do"
        >
          {t("whatIDo")}
        </a>
        {/* <a
          className={`${
            viewHightPercentage > 0.25 ? "text-primary" : "text-white"
          }`}
          href="#work"
        >
          {t("work")}
        </a> */}
        <a
          className={`${
            viewHightPercentage > 0.25 ? "text-primary" : "text-white"
          }`}
          href="#contact"
        >
          {t("contact")}
        </a>
      </StyledNavBar>
    </StyledDefaultHeader>
  );
};
