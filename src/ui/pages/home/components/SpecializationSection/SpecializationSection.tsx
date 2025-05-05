import { FC } from "react";
import { StyledSpecializationSection } from "./SpecializationSection.styles";
import { ArticleCard, Button } from "../../../../components";
import awsLogo from "../../../../assets/images/awsLogo.svg";
import cdkLogo from "../../../../assets/images/cdkLogo.svg";
import cognitoLogo from "../../../../assets/images/cognitoLogo.svg";
import frontendFrameworksLogo from "../../../../assets/images/frontendFrameworksLogo.svg";
import sesLogo from "../../../../assets/images/sesLogo.svg";
import dbLogo from "../../../../assets/images/dbLogo.svg";
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
          image={awsLogo}
          title="Serverless Development"
          body={t("specializationSection.serverlessDevelopment")}
          primaryColorGradient="#11009E"
          secondaryColorGradient="#C4B0FF"
        />
        <ArticleCard
          image={cdkLogo}
          title="Cloud Infrastructure"
          body={t("specializationSection.cloudInfrastructure")}
          primaryColorGradient="#362FD9"
          secondaryColorGradient="#3C84AB"
        />
        <ArticleCard
          image={cognitoLogo}
          title="Authentication"
          body={t("specializationSection.authentication")}
          primaryColorGradient="#FFB100"
          secondaryColorGradient="#F0ECCF"
          
        />
        <ArticleCard
          image={dbLogo}
          title="Database Management"
          body={t("specializationSection.databaseManagement")}
          primaryColorGradient="#EA8FEA"
          secondaryColorGradient="#E5D1FA"
          
        />
        <ArticleCard
          image={sesLogo}
          title="Messaging & Multichannel Communication"
          body={t("specializationSection.messagingAndNotifications")}
          primaryColorGradient="#F49D1A"
          secondaryColorGradient="#FFE15D"
        />
        <ArticleCard
          image={frontendFrameworksLogo}
          title="Frontend Frameworks"
          body={t("specializationSection.frontendFrameworks")}
          primaryColorGradient="#11009E"
          secondaryColorGradient="#C060A1"
        />
      </div>
    </StyledSpecializationSection>
  );
};
