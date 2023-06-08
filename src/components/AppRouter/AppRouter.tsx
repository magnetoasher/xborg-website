import { useEffect, useState } from "react";
import { Location, Route, Routes, useLocation } from "react-router-dom";
import {
  AboutUs,
  Prometheus,
  Seed,
  SubmissionRecorded,
  TermsAndConditions,
  XCSPage,
  XborgApp,
} from "../../modules";

export enum APP_ROUTER_TRANSITION {
  IN = "page-in",
  OUT = "page-out",
  DEFAULT = "",
}

export type ApPRouterProps = {
  setNavbarBtn: (btn: any) => void;
};

export const AppRouter = ({ setNavbarBtn }: ApPRouterProps) => {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState<Location>(location);
  const [transitionStage, setTransistionStage] =
    useState<APP_ROUTER_TRANSITION>(APP_ROUTER_TRANSITION.DEFAULT);

  useEffect(() => {
    if (location !== displayLocation) {
      setTransistionStage(APP_ROUTER_TRANSITION.OUT);
    }
  }, [location, displayLocation]);

  const onAnimationEnd = () => {
    if (transitionStage === APP_ROUTER_TRANSITION.OUT) {
      setTransistionStage(APP_ROUTER_TRANSITION.IN);
      setDisplayLocation(location);

      setTimeout(() => {
        setTransistionStage(APP_ROUTER_TRANSITION.DEFAULT);
      }, 100);
    }
  };

  return (
    <div className={`${transitionStage}`} onAnimationEnd={onAnimationEnd}>
      <Routes location={displayLocation}>
        <Route path="/" element={<XborgApp />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/xtreme-championship-series" element={<XCSPage />} />
        <Route path="/terms-and-agreements" element={<TermsAndConditions />} />
        <Route path="/seed" element={<Seed setNavbarBtn={setNavbarBtn} />} />
        <Route
          path="/seed/utm"
          element={<Seed setNavbarBtn={setNavbarBtn} />}
        />
        <Route path="/submission-recorded" element={<SubmissionRecorded />} />
        <Route path="/prometheus" element={<Prometheus />} />

        {/* <Route path="/seed-round" element={<PageAboutXborg />} />
        <Route path="/why-invest" element={<PageWhyInvest />} />
        <Route path="/how-to-invest" element={<PageHowToInvest />} />
        <Route path="/news-events" element={<PageEventNews />} />
        <Route path="/invest-faq" element={<PageInvestFAQ />} /> */}
      </Routes>
    </div>
  );
};
