import { Helmet } from "react-helmet";
import { Images } from "../../assets/imgs/Images";
import { Layout } from "../../components";
import { Supporters, NewsAndEvents } from "./components";

export const PageEventNews = () => {
  return (
    <>
      <Helmet>
        <meta property="og:image" content={Images.OGIndex.OGIndexSeed} />
      </Helmet>
      <Layout
        className="invest w-full row column"
        components={[<NewsAndEvents />, <Supporters />]}
      />
    </>
  );
};
