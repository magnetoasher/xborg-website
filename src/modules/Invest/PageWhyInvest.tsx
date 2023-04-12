import { Layout } from "../../components";
import {
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
