import { useEffect } from "react";
import { ButtonPrimary, Layout } from "../../components";
import { Supporters, NewsAndEvents } from "./components";

type InvestPageProps = {
  setNavbarBtn: (val: any) => void;
};

export const PageEventNews = ({ setNavbarBtn }: InvestPageProps) => {
  useEffect(() => {
    setNavbarBtn(<NavbarButton />);

    return () => setNavbarBtn(undefined);
  }, []);

  return (
    <Layout
      className="invest w-full row column"
      components={[<NewsAndEvents />, <Supporters />]}
    />
  );
};

const NavbarButton = () => (
  <div className="early-access">
    <ButtonPrimary label="Register interest" to="seed" />
  </div>
);
