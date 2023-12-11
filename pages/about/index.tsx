import {
  EmpoweringPlayers,
  Beliefs,
  Partners,
  NewEra,
  Stats,
  Team,
  BrandDetails,
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
    </div>
  );
}
