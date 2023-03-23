import { Layout } from "../../components";
import {
  Collectibles,
  GamingBadges,
  GamingProfile,
  Leaderboard,
  Meet,
  Play,
  StartPlayingToday,
} from "./components";
import { MixpanelTracking } from "../../services/mixpanel";
import { useEffect } from "react";

export const XborgApp = () => {
  useEffect(() => {
    MixpanelTracking.getInstance().trackEvent("page_viewed", {
      origin: "xborg-app",
    });
  }, []);

  return (
    <Layout
      className="xborg-app"
      components={[
        <Play />,
        <GamingProfile />,
        <GamingBadges />,
        <Meet />,
        <Collectibles />,
        <Leaderboard />,
        <StartPlayingToday />,
      ]}
    />
  );
};
