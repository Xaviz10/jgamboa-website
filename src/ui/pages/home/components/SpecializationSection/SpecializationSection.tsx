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
import { TFunction } from "i18next";

interface SpecializationSectionProps {
  t: TFunction<"home", undefined, "home">;
}

export const SpecializationSection: FC<SpecializationSectionProps> = ({
  t,
}) => {
  return (
    <StyledSpecializationSection id="what-i-do">
      <h2 className="font-medium text-xl md:text-2xl text-center text-primary">
        {t("specializationSection.title")}
      </h2>
      <h3 className="font-medium text-2xl md:text-3xl text-center text-secondary">
        {t("specializationSection.subtitle")}
      </h3>
      <div className="w-full flex flex-wrap gap-4 justify-center">
        <ArticleCard
          image={javascriptLogo}
          title="JavaScript"
          body={t("specializationSection.javascript")}
          primaryColorGradient="#11009E"
          secondaryColorGradient="#C4B0FF"
        />
        <ArticleCard
          image={typescriptLogo}
          title="TypeScript"
          body={t("specializationSection.typescript")}
          primaryColorGradient="#EA8FEA"
          secondaryColorGradient="#E5D1FA"
        />
        <ArticleCard
          image={reactLogo}
          title="React.js"
          body={t("specializationSection.react")}
          primaryColorGradient="#362FD9"
          secondaryColorGradient="#3C84AB"
        />
        <ArticleCard
          image={tailwindLogo}
          title="Tailwind"
          body={t("specializationSection.tailwind")}
          primaryColorGradient="#FFB100"
          secondaryColorGradient="#F0ECCF"
        />
        <ArticleCard
          image={muiLogo}
          title="Material UI"
          body={t("specializationSection.mui")}
          primaryColorGradient="#F49D1A"
          secondaryColorGradient="#FFE15D"
        />
        <ArticleCard
          image={reactNativeLogo}
          title="React Native"
          body={t("specializationSection.reactNative")}
          primaryColorGradient="#3B185F"
          secondaryColorGradient="#C060A1"
        />
      </div>
    </StyledSpecializationSection>
  );
};
