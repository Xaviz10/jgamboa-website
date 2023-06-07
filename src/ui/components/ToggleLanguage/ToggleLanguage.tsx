import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import {
  StyledToggleButtonGroup,
  StyledToggleButton,
} from "./ToggleLanguage.styles";
import { useToggleLanguage } from "./useToggleLanguage";
import { ReactComponent as EsFlag } from "../../assets/images/esFlag.svg";
import { ReactComponent as GbFlag } from "../../assets/images/gbFlag.svg";

export function ToggleLanguage() {
  const { language, handleLanguageChange } = useToggleLanguage();
  return (
    <StyledToggleButtonGroup
      color="primary"
      value={language}
      exclusive
      onChange={handleLanguageChange}
    >
      <StyledToggleButton value="es">
        <p className="flex flex-col text-[8px] leading-[10px]">
          <EsFlag className="w-6 h-4" />
          ES
        </p>
      </StyledToggleButton>
      <StyledToggleButton value="en">
        <p className="flex flex-col text-[8px] leading-[10px]">
          <GbFlag className="w-6 h-4" />
          EN
        </p>
      </StyledToggleButton>
    </StyledToggleButtonGroup>
  );
}
