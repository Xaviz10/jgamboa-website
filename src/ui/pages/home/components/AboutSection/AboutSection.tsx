import { FC } from "react";
import {
  StyledAboutSection,
  StyledImagesContainer,
} from "./AboutSection.styles";
import { CoffeeIcon, TravelIcon, WorkoutIcon } from "../../../../assets/Svg";
import { Button } from "../../../../components";
import aboutAvatar from "../../../../assets/images/aboutAvatar.png";
import skills from "../../../../assets/images/skills.svg";

export const AboutSection: FC = () => {
  return (
    <StyledAboutSection id="about">
      <StyledImagesContainer>
        <img src={skills} />
        <img src={aboutAvatar} />
      </StyledImagesContainer>
      <article className="w-full mx-auto flex flex-col gap-2 justify-center items-center md:items-start max-w-lg">
        <h2 className="text-primary font-medium text-xl md:text-2xl">
          ABOUT ME
        </h2>
        <h3 className="text-secondary font-semibold text-2xl md:text-3xl">
          Frontend Developer
        </h3>
        <p className="text-tertiary font-normal text-base md:text-lg text-justify">
          I am a proactive Frontend Developer with a background in Mechatronics
          Engineering and a Master's degree in Industrial Automation
          Engineering. Over the past 3 years, I have acquired skills in web
          development, with a strong focus on React. I am passionate about
          creating efficient and intuitive user interfaces and constantly
          seeking new challenges to grow both professionally and personally.
        </p>
        <h3 className="pt-4 text-secondary font-semibold text-xl md:text-2xl">
          My hobbies
        </h3>
        <ul className="flex flex-wrap gap-6">
          <li className="flex gap-2 items-center">
            <TravelIcon />
            Travel
          </li>
          <li className="flex gap-2 items-center">
            <WorkoutIcon />
            Workout
          </li>
          <li className="flex gap-2 items-center">
            <CoffeeIcon />
            Coffee
          </li>
        </ul>
      </article>
    </StyledAboutSection>
  );
};
