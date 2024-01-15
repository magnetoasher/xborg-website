import { useEffect } from 'react';
import { SiteActions } from '@/redux/site/actions';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import {
  DeveloperIdeas,
  DeveloperToolkit,
  GamingWeb,
  Introduction,
  Login,
  Slider,
  ValueNetwork,
  NextGenGaming,
} from '@/modules/infrastructure';
import { Footer } from '@/components/Footer';
import { ScrollDown } from '@/components/ScrollDown';
import { LearnMore } from '@/modules/about';

export default function Infrastrucuture() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(SiteActions.loadSite());
  }, []);

  return (
    <div className="infrastructure">
      <Introduction />
      <ValueNetwork />
      <GamingWeb />
      <Slider />
      <DeveloperToolkit />
      <Login />
      <NextGenGaming />
      <DeveloperIdeas />
      <LearnMore />

      <Footer />

      <ScrollDown anchor="infrastructure-value-network" />
    </div>
  );
}
