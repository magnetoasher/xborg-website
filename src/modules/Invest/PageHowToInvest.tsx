import { ButtonPrimary, Layout } from "../../components";
import { HowTo } from "./components";

export const PageHowToInvest = () => {
  return (
    <Layout className="invest w-full row column" components={[<HowTo />]} />
  );
};
