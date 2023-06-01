import tw from "twin.macro";
import styled from "styled-components";

export const StyledContactSection = styled.section.attrs({
  className: "StyledContactSection",
})`
  ${tw`relative w-full mx-auto bg-white min-h-[70vh] lg:(pr-8) py-16 overflow-hidden flex flex-col gap-4`}
`;

export const StyledContactInformation = styled.article.attrs({
  className: "StyledContactInformation",
})`
  ${tw`relative flex flex-col gap-6 bg-background text-white  min-h-[480px] px-8 py-12 lg:(rounded-r-2xl)`}
`;

export const StyledContactForm = styled.form.attrs({
  className: "StyledContactForm",
})`
  ${tw`relative flex flex-col gap-6  rounded-r-2xl min-h-[480px] px-8 py-12`}
`;
