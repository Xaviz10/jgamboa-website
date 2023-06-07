import { FC } from "react";
import {
  StyledAboutSection,
  StyledImagesContainer,
} from "./AboutSection.styles";
import { CoffeeIcon, TravelIcon, WorkoutIcon } from "../../../../assets/Svg";
import aboutAvatar from "../../../../assets/images/aboutAvatar.png";
import skills from "../../../../assets/images/skills.svg";
import { TFunction } from "i18next";

interface AboutSectionProps {
  t: TFunction<"home", undefined, "home">;
}
export const AboutSection: FC<AboutSectionProps> = ({ t }) => {
  return (
    <StyledAboutSection id="about">
      <StyledImagesContainer>
        <img src={skills} />
        <img src={aboutAvatar} />
      </StyledImagesContainer>
      <article className="w-full mx-auto flex flex-col gap-2 justify-center items-center md:items-start max-w-lg">
        <h2 className="text-primary font-medium text-xl md:text-2xl">
          {t("aboutMeSection.title")}
        </h2>
        <h3 className="text-secondary font-semibold text-2xl md:text-3xl">
          {t("aboutMeSection.subtitle")}
        </h3>
        <p className="text-tertiary font-normal text-base md:text-lg text-justify">
          {t("aboutMeSection.description")}
        </p>
        <h3 className="pt-4 text-secondary font-semibold text-xl md:text-2xl">
          {t("aboutMeSection.myHobbies")}
        </h3>
        <ul className="flex flex-wrap gap-6">
          <li className="flex gap-2 items-center">
            <TravelIcon />
            {t("aboutMeSection.travel")}
          </li>
          <li className="flex gap-2 items-center">
            <WorkoutIcon />
            {t("aboutMeSection.workout")}
          </li>
          <li className="flex gap-2 items-center">
            <CoffeeIcon />
            {t("aboutMeSection.coffee")}
          </li>
        </ul>
      </article>
    </StyledAboutSection>
  );
};
