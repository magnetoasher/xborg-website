import { useEffect } from "react";
import { Layout } from "../../components";
import {
  Navbar,
  Supporters,
  Early,
  Forefront,
  NextBigThing,
  OpenToCommunity,
  WhyNow,
} from "./components";

type InvestPageProps = {
  setNavbarVisibility: (val: boolean) => void;
};

export const PageWhyInvest = ({ setNavbarVisibility }: InvestPageProps) => {
  useEffect(() => {
    setNavbarVisibility(false);

    return () => setNavbarVisibility(true);
  }, []);

  return (
    <>
      <Navbar active={1} />
      <Layout
        className="invest w-full row column"
        components={[
          <NextBigThing />,
          <Forefront />,
          <OpenToCommunity />,
          <WhyNow />,
          <Early />,
          <Supporters />,
        ]}
      />
    </>
  );
};
