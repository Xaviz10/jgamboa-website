import { FC, PropsWithChildren } from "react";
import { Header, Footer, Drawer, ToggleLanguage } from "../../components";
import { StyledDefaultLayout } from "./DefaultLayout.styles";

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledDefaultLayout>
      <Header />
      <main>{children}</main>
      <Footer />
      <ToggleLanguage />
    </StyledDefaultLayout>
  );
};
