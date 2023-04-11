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

export const PageWhyInvest = () => {
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
