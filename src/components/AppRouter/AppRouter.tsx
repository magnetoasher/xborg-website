import { Navigate, Route, Routes } from "react-router-dom";
import {
  AboutUs,
  EsportsPage,
  GamingPassport,
  LaunchpadPage,
  XCSPage,
} from "../../modules";
import { FAQ } from "../../modules/FAQ";
import { TermsAndConditions } from "../../modules/TermsAndConditions";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/esports' element={<EsportsPage />} />
      <Route path='/launchpad' element={<LaunchpadPage />} />
      <Route path='/xtreme-championship-series' element={<XCSPage />} />
      <Route path='/gaming-passport' element={<GamingPassport />} />
      <Route path='/terms-and-agreements' element={<TermsAndConditions />} />
      <Route path='/FAQ' element={<FAQ />} />
      <Route path='*' element={<Navigate to='/gaming-passport' />} />
    </Routes>
  );
};
