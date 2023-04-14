import { Helmet } from "react-helmet";
import { Images } from "../../assets/imgs/Images";
import { Layout } from "../../components";
import {
  AboutXborg,
  GameChangingProtocol,
  ProductSpotlight,
  Competetive,
  Supporters,
} from "./components";

export const PageAboutXborg = () => {
  return (
    <>
      <Helmet>
        <meta property="og:image" content={Images.OGIndex.OGIndexSeed} />
      </Helmet>
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
