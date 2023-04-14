import { Helmet } from "react-helmet";
import { Images } from "../../assets/imgs/Images";
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
    <>
      <Helmet>
        <meta property="og:image" content={Images.OGIndex.OGIndexSeed} />
      </Helmet>
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
