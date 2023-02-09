import { Layout } from "../../components";
import {
  GamingProfile,
  GetRewarded,
  GetScouted,
  Leaderboard,
  PassportIntro,
  PlugNPlay,
  StartEarningToday,
} from "./components";

export const GamingPassport = () => {
  return (
    <Layout
      className='gamingpassport'
      components={[
        <PassportIntro />,
        <GetRewarded />,
        <GamingProfile />,
        <GetScouted />,
        <PlugNPlay />,
        <Leaderboard />,
        <StartEarningToday />,
      ]}
    />
  );
};
