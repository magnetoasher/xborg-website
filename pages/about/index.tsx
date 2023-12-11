import {
  EmpoweringPlayers,
  Beliefs,
  Partners,
  NewEra,
  Stats,
} from '@/modules/about';

export default function AboutUs() {
  return (
    <div className="about-us">
      <EmpoweringPlayers />
      <Beliefs />
      <Partners />
      <NewEra />
      <Stats />
    </div>
  );
}
