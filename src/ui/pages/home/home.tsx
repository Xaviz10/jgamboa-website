import { FC } from "react";
import { DefaultLayout } from "../../layouts";
import {
  StyledHomeAvatarContainer,
  StyledWelcomeArticle,
  StyledWelcomeSection,
} from "./home.styles";
import {
  BigEllipseWatermark,
  HomeBottomForm,
  SmallEllipseWatermark,
} from "../../assets/Svg";
import { Button } from "../../components";
import homeAvatar from "../../assets/images/homeAvatar.png";
import homeLeftPolygon from "../../assets/images/homeLeftPolygon.svg";
import homeRightPolygon from "../../assets/images/homeRightPolygon.svg";
import homeEllipse from "../../assets/images/homeEllipse.svg";

export const Home: FC = () => {
  return (
    <DefaultLayout>
      <StyledWelcomeSection>
        <BigEllipseWatermark className="absolute top-0 left-0 " />
        <SmallEllipseWatermark className="absolute bottom-0 right-0" />
        <StyledWelcomeArticle>
          <h1 className="text-white font-medium text-2xl">
            HELLO, I'M JAVIER GAMBOA
          </h1>
          <h2 className="text-white font-bold text-4xl">FRONTEND DEVELOPER</h2>
          <hr className="w-28 h-1 bg-white mb-4" />
          <div className="flex gap-4">
            <Button color="primary">Hire me</Button>
            <Button>Get CV</Button>
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
    </DefaultLayout>
  );
};
