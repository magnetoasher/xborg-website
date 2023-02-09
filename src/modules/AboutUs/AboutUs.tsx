import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Layout } from "../../components";
import { AboutUsActions } from "../../redux/aboutUs/actions";
import { AppDispatch } from "../../store";
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
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(AboutUsActions.getTotalUsers());
  }, []);

  return (
    <Layout
      className="about-us"
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
