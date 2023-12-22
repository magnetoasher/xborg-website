import { Footer } from '@/components/Footer';
import {
  CommunitySection,
  Growing,
  Introduction,
  Launching,
  NextGenGaming,
  Possibilities,
  Stats,
} from '@/modules/xbg';

export default function Xbg() {
  return (
    <div className="xbg">
      <Introduction />
      <Possibilities />
      <Growing />
      <Stats />
      <CommunitySection />
      <NextGenGaming />
      <Launching />
      <Footer />
    </div>
  );
}
