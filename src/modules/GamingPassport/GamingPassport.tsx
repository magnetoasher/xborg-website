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
import { MixpanelTracking } from "../../services/mixpanel";
import { useEffect } from "react";

export const GamingPassport = () => {
  useEffect(() => {
    MixpanelTracking.getInstance().trackEvent("page_viewed", {
      origin: "gaming-passport",
    });
  }, []);

  return (
    <Layout
      className="gamingpassport"
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
