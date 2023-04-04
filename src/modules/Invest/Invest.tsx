import { ReactElement, useEffect, useState } from "react";
import { Layout } from "../../components";
import {
  Navbar,
  AboutXborg,
  GameChangingProtocol,
  ProductSpotlight,
  Competetive,
  InvestFAQ,
  NewsAndEvents,
  NextBigThing,
  OpenToCommunity,
  WhyNow,
} from "./components";

export type InvestPageProps = {
  setNavbarVisibility: (val: boolean) => void;
};

export const Invest = ({ setNavbarVisibility }: InvestPageProps) => {
  const [active, setActive] = useState<number>(0);
  useEffect(() => {
    setNavbarVisibility(false);

    return () => setNavbarVisibility(true);
  }, []);

  let list: ReactElement<any, any>[] = [];

  if (active == 0)
    list = [
      <AboutXborg />,
      <GameChangingProtocol />,
      <ProductSpotlight />,
      <Competetive />,
    ];
  if (active == 1) list = [<NextBigThing />, <OpenToCommunity />, <WhyNow />];
  if (active == 2) list = [<NewsAndEvents />];
  if (active == 3) list = [<InvestFAQ />];

  return (
    <>
      <Navbar active={active} setActive={setActive} />
      <Layout className="invest w-full row column" components={list} />
    </>
  );
};
