import { Alert, Layout } from "../../components";
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
import { Images } from "../../assets/imgs/Images";
import { Helmet } from "react-helmet";

export const XborgApp = () => {
  useEffect(() => {
    MixpanelTracking.getInstance().trackEvent("page_viewed", {
      origin: "xborg-app",
    });
  }, []);

  return (
    <>
      {/* <Alert text="Register for the upcoming seed round." to="seed" /> */}
      <Helmet>
        <meta property="og:image" content={Images.OGIndex.OGIndexApp} />
      </Helmet>
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
    </>
  );
};
