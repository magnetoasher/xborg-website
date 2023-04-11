import { useEffect } from "react";
import { Layout } from "../../components";
import {
  Navbar,
  AboutXborg,
  GameChangingProtocol,
  ProductSpotlight,
  Competetive,
  Supporters,
} from "./components";

type InvestPageProps = {
  setNavbarVisibility: (val: boolean) => void;
};

export const PageAboutXborg = ({ setNavbarVisibility }: InvestPageProps) => {
  useEffect(() => {
    setNavbarVisibility(false);

    return () => setNavbarVisibility(true);
  }, []);

  return (
    <>
      <Navbar active={0} />
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
    </>
  );
};
