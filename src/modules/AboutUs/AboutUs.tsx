import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Layout } from "../../components";
import { AboutUsActions } from "../../redux/aboutUs/actions";
import { AppDispatch } from "../../store";
import {
  Community,
  Partners,
  Prometheus,
  Protocol,
  Roadmap,
  Team,
  Token,
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
        <Protocol />,
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
