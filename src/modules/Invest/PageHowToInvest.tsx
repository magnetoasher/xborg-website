import { useEffect } from "react";
import { Layout } from "../../components";
import { Navbar, HowTo } from "./components";

type InvestPageProps = {
  setNavbarVisibility: (val: boolean) => void;
};

export const PageHowToInvest = ({ setNavbarVisibility }: InvestPageProps) => {
  useEffect(() => {
    setNavbarVisibility(false);

    return () => setNavbarVisibility(true);
  }, []);

  return (
    <>
      <Navbar active={2} />
      <Layout className="invest w-full row column" components={[<HowTo />]} />
    </>
  );
};
