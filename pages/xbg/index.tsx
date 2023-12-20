import { Footer } from '@/components/Footer';
import { Growing, Introduction, Posibilities, Stats } from '@/modules/xbg';

export default function AboutUs() {
  return (
    <div className="about-us">
      <Introduction />
      <Posibilities />
      <Growing />
      <Stats />
      <Footer />
    </div>
  );
}
