import { ButtonPrimary, Layout } from "../../components";
import { Supporters, NewsAndEvents } from "./components";

export const PageEventNews = () => {
  return (
    <Layout
      className="invest w-full row column"
      components={[<NewsAndEvents />, <Supporters />]}
    />
  );
};
