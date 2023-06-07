import { FC } from "react";
import { DefaultLayout } from "../../layouts";

import {
  AboutSection,
  ContactSection,
  SpecializationSection,
  WelcomeSection,
} from "./components";
import { useHomeViewModel } from "../../viewModels";

export const Home: FC = () => {
  const { t, handleDownloadCV, handleNavigateToSection, handleContactForm } =
    useHomeViewModel();
  return (
    <DefaultLayout>
      <WelcomeSection
        t={t}
        handleNavigateToSection={handleNavigateToSection}
        onGetCV={handleDownloadCV}
      />
      <AboutSection t={t} />
      <SpecializationSection t={t} />
      <ContactSection t={t} handleContactForm={handleContactForm} />
    </DefaultLayout>
  );
};
