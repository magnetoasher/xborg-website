import { ButtonPrimary, Layout } from "../../components";
import {
  AboutXborg,
  GameChangingProtocol,
  ProductSpotlight,
  Competetive,
  Supporters,
} from "./components";

export const PageAboutXborg = () => {
  return (
    <Layout
      className="invest w-full row column"
      components={[
        <AboutXborg />,
        <GameChangingProtocol />,
        <ProductSpotlight />,
        <Competetive />,
        <Supporters />,
      ]}
    />
  );
};
