import { Layout } from "../../components";
import {
  BeTheFirst,
  EarnYourShare,
  Esports30,
  HaveYourSay,
  IntegratedExperience,
  MoreThanFan,
} from "./components";

export const EsportsPage = () => {
  return (
    <Layout
      className='esports-page'
      components={[
        <Esports30 />,
        <MoreThanFan />,
        <EarnYourShare />,
        <IntegratedExperience />,
        <HaveYourSay />,
        <BeTheFirst />,
      ]}
    />
  );
};
