import { FC } from "react";
import { DefaultLayout } from "../../layouts";

import { WelcomeSection } from "./components";

export const Home: FC = () => {
  return (
    <DefaultLayout>
      <WelcomeSection />
    </DefaultLayout>
  );
};
