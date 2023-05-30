import tw from "twin.macro";
import styled from "styled-components";
export interface StyledSectionProps {
  withoutPadding?: boolean;
}

export const StyledWelcomeSection = styled.section.attrs({
  className: "StyledWelcomeSection",
})`
  ${tw`relative bg-primary min-h-screen flex flex-col-reverse justify-end items-center pt-20 md:(flex-row justify-between pt-0) overflow-hidden`}
  background: linear-gradient(126.69deg, #4275FA 6.42%, rgba(17, 2, 198, 0.87) 104.03%);
`;

export const StyledWelcomeArticle = styled.article.attrs({
  className: "StyledHomeAvatarContainer",
})`
  ${tw`px-8 flex flex-col justify-center gap-3 z-[2] text-center items-center md:(text-left items-start)`}
`;

export const StyledHomeAvatarContainer = styled.div.attrs({
  className: "StyledHomeAvatarContainer",
})`
  ${tw`relative flex justify-center items-center z-[2] h-[50vh] md:(h-[100%] mx-auto) `}
  .imgAvatar {
    ${tw`h-[50vh] md:(h-[60vh]) `}
    transform: translateY(0px);
    animation: floating 6s ease-in-out infinite;
  }
  .figureLeftPolygon {
    ${tw`absolute left-0 h-[15vw] md:(h-[6vw]) `}
    transform: translateY(0px);
    animation: floatingFigures 8s ease-in-out infinite;
  }
  .figureRightPolygon {
    ${tw`absolute right-0 h-[15vw] md:(h-[6vw]) `}
    transform: translateY(0px);
    animation: floatingFigures 9s ease-in-out infinite;
  }
  .figureEllipse {
    ${tw`absolute top-0 h-[15vw] md:(h-[6vw]) `}
    transform: translateY(0px);
    animation: floatingFigures 7s ease-in-out infinite;
  }
`;

export const StyledContainerCarousel = styled.section.attrs({
  className: "StyledContainerCarousel",
})``;
