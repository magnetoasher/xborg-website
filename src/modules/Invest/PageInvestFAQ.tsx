import { Layout } from "../../components";
import { InvestFAQ, Supporters } from "./components";

export const PageInvestFAQ = () => {
  return (
    <Layout
      className="invest w-full row column"
      components={[<InvestFAQ />, <Supporters />]}
    />
  );
};
