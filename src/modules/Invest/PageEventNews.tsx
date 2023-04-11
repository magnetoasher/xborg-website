import { useEffect } from "react";
import { Layout } from "../../components";
import { Navbar, Supporters, NewsAndEvents } from "./components";

type InvestPageProps = {
  setNavbarVisibility: (val: boolean) => void;
};

export const PageEventNews = ({ setNavbarVisibility }: InvestPageProps) => {
  useEffect(() => {
    setNavbarVisibility(false);

    return () => setNavbarVisibility(true);
  }, []);

  return (
    <>
      <Navbar active={3} />
      <Layout
        className="invest w-full row column"
        components={[<NewsAndEvents />, <Supporters />]}
      />
    </>
  );
};
