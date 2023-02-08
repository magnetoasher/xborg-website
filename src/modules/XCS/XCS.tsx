import { Layout, LayoutChildType } from "../../components";
import {
  TheLeague,
  TierOne,
  BecomeLegend,
  BecomingLegend,
  Production,
  DontMiss,
} from "./components";

export const XCSPage = () => {
  return (
    <Layout
      className='xcs'
      components={[
        <BecomeLegend />,
        <TheLeague />,
        <TierOne />,
        <BecomingLegend />,
        <Production />,
        <DontMiss />,
      ]}
    />
  );
};
