import { Footer } from '@/components/Footer';
import {
  CommunitySection,
  Growing,
  Introduction,
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
      <Footer />
    </div>
  );
}
