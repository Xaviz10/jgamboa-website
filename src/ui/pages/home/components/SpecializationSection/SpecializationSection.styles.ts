import tw from "twin.macro";
import styled from "styled-components";

export const StyledSpecializationSection = styled.section.attrs({
  className: "StyledSpecializationSection",
})`
  ${tw`relative w-full mx-auto bg-white min-h-[ 100vh] px-8 py-16 overflow-hidden flex flex-col gap-4 max-w-[1420px] `}
`;
