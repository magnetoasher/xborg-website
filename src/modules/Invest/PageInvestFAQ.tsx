import { Helmet } from "react-helmet";
import { Images } from "../../assets/imgs/Images";
import { Layout } from "../../components";
import { InvestFAQ, Supporters } from "./components";

export const PageInvestFAQ = () => {
  return (
    <>
      <Helmet>
        <meta property="og:image" content={Images.OGIndex.OGIndexFAQ} />
      </Helmet>
      <Layout
        className="invest w-full row column"
        components={[<InvestFAQ />, <Supporters />]}
      />
    </>
  );
};
