import { useEffect } from "react";
import { ButtonPrimary, Layout } from "../../components";
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
  setNavbarBtn: (val: any) => void;
};

export const PageWhyInvest = ({ setNavbarBtn }: InvestPageProps) => {
  useEffect(() => {
    setNavbarBtn(<NavbarButton />);

    return () => setNavbarBtn(undefined);
  }, []);

  return (
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
  );
};

const NavbarButton = () => (
  <div className="early-access">
    <ButtonPrimary label="Register interest" to="seed" />
  </div>
);
