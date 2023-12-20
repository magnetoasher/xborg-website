import { Footer } from '@/components/Footer';
import {
  CommunitySection,
  Growing,
  Introduction,
  NextGenGaming,
  Posibilities,
  Stats,
} from '@/modules/xbg';

export default function AboutUs() {
  return (
    <div className="about-us">
      <Introduction />
      <Posibilities />
      <Growing />
      <Stats />
      <CommunitySection />
      <NextGenGaming />
      <Footer />
    </div>
  );
}
