import tw from "twin.macro";
import styled from "styled-components";
export interface StyledSectionProps {
  withoutPadding?: boolean;
}

export const StyledAboutSection = styled.section.attrs({
  className: "StyledAboutSection",
})`
  ${tw`relative bg-white min-h-[60vh] px-8 py-16 flex flex-col-reverse md:(grid grid-cols-2) lg:(grid-cols-3 items-center gap-8)  overflow-hidden`}
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const StyledImagesContainer = styled.div.attrs({
  className: "StyledImagesContainer",
})`
  ${tw`grid items-center  gap-4 grid-cols-1 grid-rows-2 py-8 md:py-0 lg:(grid-rows-1 grid-cols-2) max-h-[60vh]`}
  > img {
    ${tw`h-full lg:(h-auto) mx-auto`}
  }
`;
