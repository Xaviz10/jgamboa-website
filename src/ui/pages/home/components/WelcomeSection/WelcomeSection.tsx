import { FC } from "react";
import {
  StyledHomeAvatarContainer,
  StyledWelcomeArticle,
  StyledWelcomeSection,
} from "./WelcomeSection.styles";
import {
  BigEllipseWatermark,
  HomeBottomForm,
  SmallEllipseWatermark,
} from "../../../../assets/Svg";
import { Button } from "../../../../components";
import homeAvatar from "../../../../assets/images/homeAvatar.png";
import homeLeftPolygon from "../../../../assets/images/homeLeftPolygon.svg";
import homeRightPolygon from "../../../../assets/images/homeRightPolygon.svg";
import homeEllipse from "../../../../assets/images/homeEllipse.svg";

interface WelcomeSectionProps {
  onGetCV: () => void;
  handleNavigateToSection: (sectionUrl: string) => void;
}

export const WelcomeSection: FC<WelcomeSectionProps> = ({
  onGetCV,
  handleNavigateToSection,
}) => {
  return (
    <StyledWelcomeSection id="/">
      <BigEllipseWatermark className="absolute top-0 left-0 " />
      <SmallEllipseWatermark className="absolute bottom-0 right-0" />
      <StyledWelcomeArticle>
        <h1 className="text-white font-medium text-xl md:text-2xl">
          HELLO, I'M JAVIER GAMBOA
        </h1>
        <h3 className="text-white font-bold text-3xl md:text-4xl">
          FRONTEND DEVELOPER
        </h3>
        <hr className="w-28 h-1 bg-white mb-4" />
        <div className="flex gap-4">
          <Button
            color="primary"
            onClick={() => handleNavigateToSection("#contact")}
          >
            Hire me
          </Button>
          <Button onClick={onGetCV}>Get CV</Button>
        </div>
      </StyledWelcomeArticle>
      <StyledHomeAvatarContainer>
        <img className="imgAvatar" src={homeAvatar} />
        <img className="figureLeftPolygon" src={homeLeftPolygon} />
        <img className="figureRightPolygon" src={homeRightPolygon} />
        <img className="figureEllipse" src={homeEllipse} />
      </StyledHomeAvatarContainer>
      <HomeBottomForm className="absolute bottom-0 h-auto" width="100%" />
    </StyledWelcomeSection>
  );
};
