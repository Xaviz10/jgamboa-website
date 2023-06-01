import { FC } from "react";
import { StyledSpecializationSection } from "./SpecializationSection.styles";
import { CoffeeIcon, TravelIcon, WorkoutIcon } from "../../../../assets/Svg";
import { ArticleCard, Button } from "../../../../components";
import javascriptLogo from "../../../../assets/images/javascriptLogo.svg";
import typescriptLogo from "../../../../assets/images/typescriptLogo.svg";
import reactLogo from "../../../../assets/images/reactLogo.svg";
import muiLogo from "../../../../assets/images/muiLogo.svg";
import tailwindLogo from "../../../../assets/images/tailwindLogo.svg";
import reactNativeLogo from "../../../../assets/images/reactNativeLogo.svg";

export const SpecializationSection: FC = () => {
  return (
    <StyledSpecializationSection id="what-i-do">
      <h2 className="font-medium text-xl md:text-2xl text-center text-primary">
        WHAT I DO
      </h2>
      <h3 className="font-medium text-2xl md:text-3xl text-center text-secondary">
        Specializing In
      </h3>
      <div className="w-full flex flex-wrap gap-4 justify-center">
        <ArticleCard
          image={javascriptLogo}
          title="JavaScript"
          body="Strong JavaScript skills with in-depth knowledge of the event loop, enabling efficient asynchronous programming and optimized performance."
          primaryColorGradient="#11009E"
          secondaryColorGradient="#C4B0FF"
        />
        <ArticleCard
          image={typescriptLogo}
          title="TypeScript"
          body="Strong TypeScript skills, leveraging static typing to enhance frontend development with improved code quality, maintainability, and early error detection."
          primaryColorGradient="#EA8FEA"
          secondaryColorGradient="#E5D1FA"
        />
        <ArticleCard
          image={reactLogo}
          title="React.js"
          body="Skilled in React, building single-page web apps, creating reusable components, and translating designs into quality code."
          primaryColorGradient="#362FD9"
          secondaryColorGradient="#3C84AB"
        />
        <ArticleCard
          image={tailwindLogo}
          title="Tailwind"
          body="Proficient in Tailwind, utilizing its utility-first approach to efficiently design and style responsive web applications."
          primaryColorGradient="#FFB100"
          secondaryColorGradient="#F0ECCF"
        />
        <ArticleCard
          image={muiLogo}
          title="Material UI"
          body="Strong expertise in Material UI, adept at customizing components and implementing best practices for polished and responsive user interfaces."
          primaryColorGradient="#F49D1A"
          secondaryColorGradient="#FFE15D"
        />
        <ArticleCard
          image={reactNativeLogo}
          title="React Native"
          body="Some experience in React Native, actively learning, applying and expanding my mobile app development skills."
          primaryColorGradient="#3B185F"
          secondaryColorGradient="#C060A1"
        />
      </div>
    </StyledSpecializationSection>
  );
};
