import { Layout } from "../../components";
import {
  Community,
  Partners,
  Prometheus,
  Protocol,
  Roadmap,
  Team,
  Token,
} from "./components";
import { Vision } from "./components/Vision/Vision";

export const AboutUs = () => {
  return (
    <Layout
      className="about-us"
      components={[
        <Protocol />,
        <Vision />,
        <Token />,
        <Prometheus />,
        <Community />,
        <Team />,
        <Partners />,
        <Roadmap />,
      ]}
    />
  );
};
