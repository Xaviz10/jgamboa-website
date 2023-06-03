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
  const { handleDownloadCV, handleNavigateToSection, handleContactForm } =
    useHomeViewModel();
  return (
    <DefaultLayout>
      <WelcomeSection
        handleNavigateToSection={handleNavigateToSection}
        onGetCV={handleDownloadCV}
      />
      <AboutSection />
      <SpecializationSection />
      <ContactSection handleContactForm={handleContactForm} />
    </DefaultLayout>
  );
};
