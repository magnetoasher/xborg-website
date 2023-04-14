import { Helmet } from "react-helmet";
import { Images } from "../../assets/imgs/Images";
import { ButtonPrimary, Layout } from "../../components";
import { HowTo } from "./components";

export const PageHowToInvest = () => {
  return (
    <>
      <Helmet>
        <meta property="og:image" content={Images.OGIndex.OGIndexSeed} />
      </Helmet>
      <Layout className="invest w-full row column" components={[<HowTo />]} />
    </>
  );
};
