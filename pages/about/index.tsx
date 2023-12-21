import { Footer } from '@/components/Footer';
import {
  EmpoweringPlayers,
  Beliefs,
  Partners,
  NewEra,
  Stats,
  Team,
  BrandDetails,
  LearnMore,
} from '@/modules/about';

export default function AboutUs() {
  return (
    <div className="about-us">
      <EmpoweringPlayers />
      <Beliefs />
      <Partners />
      <NewEra />
      <Stats />
      <Team />
      <BrandDetails />
      <LearnMore />
      <Footer />
    </div>
  );
}
