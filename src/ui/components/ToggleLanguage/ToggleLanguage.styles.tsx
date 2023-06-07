import tw from "twin.macro";
import styled from "styled-components";
import { styled as styledMUI } from "@mui/material/styles";
import {
  ToggleButtonGroupProps,
  ToggleButtonGroup,
  ToggleButton,
  ToggleButtonProps,
} from "@mui/material";

export const StyledToggleButtonGroup = styledMUI(
  ToggleButtonGroup
)<ToggleButtonGroupProps>(() => {
  return {
    position: "fixed",
    zIndex: "20",
    right: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    padding: "4px",
    transform: "translate(-8px, -8px)",
    backgroundColor: "white",
    boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.25)",
    borderRadius: "24px",
  };
});

export const StyledToggleButton = styledMUI(ToggleButton)<ToggleButtonProps>(
  () => {
    return {
      margin: "0 !important",
      width: "42px",
      height: "42px",
      borderRadius: "50% !important",
      borderColor: "transparent !important",
      boxShadow: "0px 1px 28px rgba(0, 0, 0, 0.1)",
    };
  }
);
