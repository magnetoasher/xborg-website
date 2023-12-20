import { Footer } from '@/components/Footer';
import { Growing, Introduction, Posibilities } from '@/modules/xbg';

export default function AboutUs() {
  return (
    <div className="about-us">
      <Introduction />
      <Posibilities />
      <Growing />
      <Footer />
    </div>
  );
}
