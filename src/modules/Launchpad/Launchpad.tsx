import { Layout } from "../../components";
import {
  GetStarted,
  InvestGameFi,
  LeaveYourMark,
  OnlyTheBest,
  Portfolio,
  PublicSales,
} from "./components";

export const LaunchpadPage = () => {
  return (
    <Layout
      className='launchpad-page'
      components={[
        <InvestGameFi />,
        <OnlyTheBest />,
        <PublicSales />,
        <LeaveYourMark />,
        <Portfolio />,
        <GetStarted />,
      ]}
    />
  );
};
