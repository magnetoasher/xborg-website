import { useEffect, useState } from "react";
import {
  Location,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  AboutUs,
  XCSPage,
  FAQ,
  Seed,
  XborgApp,
  TermsAndConditions,
} from "../../modules";

export enum APP_ROUTER_TRANSITION {
  IN = "page-in",
  OUT = "page-out",
}

export const AppRouter = () => {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState<Location>(location);
  const [transitionStage, setTransistionStage] =
    useState<APP_ROUTER_TRANSITION>(APP_ROUTER_TRANSITION.IN);

  useEffect(() => {
    if (location !== displayLocation)
      setTransistionStage(APP_ROUTER_TRANSITION.OUT);
  }, [location, displayLocation]);

  const onAnimationEnd = () => {
    if (transitionStage === APP_ROUTER_TRANSITION.OUT) {
      setTransistionStage(APP_ROUTER_TRANSITION.IN);
      setDisplayLocation(location);
    }
  };

  return (
    <div className={`${transitionStage}`} onAnimationEnd={onAnimationEnd}>
      <Routes location={displayLocation}>
        <Route path="/" element={<XborgApp />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/xtreme-championship-series" element={<XCSPage />} />
        <Route path="/terms-and-agreements" element={<TermsAndConditions />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/seed" element={<Seed />} />
      </Routes>
    </div>
  );
};
