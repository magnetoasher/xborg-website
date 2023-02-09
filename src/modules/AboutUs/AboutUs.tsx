import { Layout } from "../../components";
import {
  EmpowerPlayers,
  EmpowerFans,
  Esports,
  Prometheus,
  OurPlayers,
  OurTeam,
  BecomeXplorer,
  Partners,
} from "./components";
export const AboutUs = () => {
  return (
    <Layout
      className='about-us'
      components={[
        <EmpowerPlayers />,
        <EmpowerFans />,
        <Esports />,
        <Prometheus />,
        <OurPlayers />,
        <OurTeam />,
        <Partners />,
        <BecomeXplorer />,
      ]}
    />
  );
};
