import { Helmet } from "react-helmet";
import { Images } from "../../assets/imgs/Images";
import { Layout } from "../../components";
import {
  TheLeague,
  TierOne,
  BecomeLegend,
  BecomingLegend,
  Production,
  DontMiss,
} from "./components";

export const XCSPage = () => {
  return (
    <>
      <Helmet>
        <meta property="og:image" content={Images.OGIndex.OGIndexXCS} />
      </Helmet>
      <Layout
        className="xcs"
        components={[
          <BecomeLegend />,
          <TheLeague />,
          <TierOne />,
          <BecomingLegend />,
          <Production />,
          <DontMiss />,
        ]}
      />
    </>
  );
};
