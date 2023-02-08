import { useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { AboutUsActions } from "../../redux/aboutUs/actions";

export const AboutUs = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(AboutUsActions.getAboutUs());
  }, []);

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
