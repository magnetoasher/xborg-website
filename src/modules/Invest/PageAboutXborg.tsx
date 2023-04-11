import { useEffect } from "react";
import { ButtonPrimary, Layout } from "../../components";
import {
  AboutXborg,
  GameChangingProtocol,
  ProductSpotlight,
  Competetive,
  Supporters,
} from "./components";

export type InvestPageProps = {
  setNavbarBtn: (val: any) => void;
};

export const PageAboutXborg = ({ setNavbarBtn }: InvestPageProps) => {
  useEffect(() => {
    setNavbarBtn(<NavbarButton />);

    return () => setNavbarBtn(undefined);
  }, []);

  return (
    <Layout
      className="invest w-full row column"
      components={[
        <AboutXborg />,
        <GameChangingProtocol />,
        <ProductSpotlight />,
        <Competetive />,
        <Supporters />,
      ]}
    />
  );
};

const NavbarButton = () => (
  <div className="early-access">
    <ButtonPrimary label="Register interest" to="seed" />
  </div>
);
