import { FC } from "react";
import { DefaultLayout } from "../../layouts";

import {
  AboutSection,
  ContactSection,
  SpecializationSection,
  WelcomeSection,
} from "./components";

export const Home: FC = () => {
  return (
    <DefaultLayout>
      <WelcomeSection />
      <AboutSection />
      <SpecializationSection />
      <ContactSection />
    </DefaultLayout>
  );
};
