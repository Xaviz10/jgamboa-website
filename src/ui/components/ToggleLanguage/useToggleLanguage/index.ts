import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { actSetLanguage } from "../../../../data/dto/actions";
import { languageSelector } from "../../../../data/dto/selectors";

export function useToggleLanguage() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const { language: savedLanguage } = useSelector(languageSelector);

  const [language, setLanguage] = React.useState<"es" | "en">(savedLanguage);
  const handleLanguageChange = (
    event: React.MouseEvent<HTMLElement>,
    newLanguage: "es" | "en"
  ) => {
    setLanguage(newLanguage);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
    dispatch(
      actSetLanguage({
        language: language,
      })
    );
  }, [language]);

  return { language, handleLanguageChange };
}
