import { FC } from "react";
import { DefaultLayout } from "../../layouts";

import {
  AboutSection,
  SpecializationSection,
  WelcomeSection,
} from "./components";

export const Home: FC = () => {
  return (
    <DefaultLayout>
      <WelcomeSection />
      <AboutSection />
      <SpecializationSection />
    </DefaultLayout>
  );
};
