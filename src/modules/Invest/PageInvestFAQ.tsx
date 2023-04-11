import { useEffect } from "react";
import { Layout } from "../../components";
import { Navbar, InvestFAQ, Supporters } from "./components";

type InvestPageProps = {
  setNavbarVisibility: (val: boolean) => void;
};

export const PageInvestFAQ = ({ setNavbarVisibility }: InvestPageProps) => {
  useEffect(() => {
    setNavbarVisibility(false);

    return () => setNavbarVisibility(true);
  }, []);

  return (
    <>
      <Navbar active={4} />
      <Layout
        className="invest w-full row column"
        components={[<InvestFAQ />, <Supporters />]}
      />
    </>
  );
};
