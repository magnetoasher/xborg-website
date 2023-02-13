import { useRef } from "react";
import { ExternalLink } from "../../../../assets/svgs/ExternalLink";
import { ButtonPrimary, ObserverContainer, Tabs } from "../../../../components";
import { TextScramble } from "../../../../viewmodels/TextScramble";

export const PickGame = () => {
  const ref = useRef(null);

  function callbackIn() {
    const current = ref.current as unknown as HTMLDivElement;
    const scramble = new TextScramble(current);
    if (ref.current) scramble.setText(current.innerHTML);
  }

  const EvioButtons = () => (
    <div className="row">
      <ButtonPrimary
        label="Ev.io Qualifier 1"
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-evio-month-1233"
        icon={<ExternalLink />}
      />
      <ButtonPrimary
        label="Ev.io Qualifier 2"
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-evio-month-2"
        icon={<ExternalLink />}
      />
      <ButtonPrimary
        label="Ev.io Qualifier 3"
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-evio-month-3"
        icon={<ExternalLink />}
      />
    </div>
  );
  const HarvestButtons = () => (
    <div className="row">
      <ButtonPrimary
        label="The Harvest Qualifier 1"
        icon={<ExternalLink />}
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-harvest-month-1"
      />
      <ButtonPrimary
        label="The Harvest Qualifier 2"
        icon={<ExternalLink />}
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-harvest-month-2"
      />
      <ButtonPrimary
        label="The Harvest Qualifier 3"
        icon={<ExternalLink />}
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-harvest-month-3"
      />
    </div>
  );
  const GodsUnchainedButtons = () => (
    <div className="row">
      <ButtonPrimary
        label="Gods Unchained Qualifier 1"
        icon={<ExternalLink />}
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-gu-month-1"
      />
      <ButtonPrimary
        label="Gods Unchained Qualifier 2"
        icon={<ExternalLink />}
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-gu-month-2"
      />
      <ButtonPrimary
        label="Gods Unchained Qualifier 3"
        icon={<ExternalLink />}
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-gu-month-3"
      />
    </div>
  );
  const SpiderTanksButtons = () => (
    <div className="row">
      <ButtonPrimary
        label="Spider Tanks Qualifier 1"
        icon={<ExternalLink />}
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-spider-tanks-month-1"
      />
      <ButtonPrimary
        label="Spider Tanks Qualifier 2"
        icon={<ExternalLink />}
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-spider-tanks-month-2"
      />
      <ButtonPrimary
        label="Spider Tanks Qualifier 3"
        icon={<ExternalLink />}
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-spider-tanks-month-3"
      />
    </div>
  );
  const MojoButtons = () => (
    <div className="row">
      <ButtonPrimary
        label="Planet Mojo Qualifier 1"
        icon={<ExternalLink />}
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-mojomelee-month-1"
      />
      <ButtonPrimary
        label="Planet Mojo Qualifier 2"
        icon={<ExternalLink />}
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-mojo-melee-month-2"
      />
      <ButtonPrimary
        label="Planet Mojo Qualifier 3"
        icon={<ExternalLink />}
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-mojo-melee-month-3"
      />
    </div>
  );

  return (
    <ObserverContainer
      className="pick-game expand row column"
      onAnimateIn={callbackIn}
    >
      <div className="title" ref={ref}>
        Pick a game
      </div>
      <p>Register for each tournament individually.</p>
      <Tabs
        data={[
          {
            label: "Ev.io",
            content: EvioButtons(),
          },
          {
            label: "The Harvest",
            content: HarvestButtons(),
          },
          {
            label: "Gods Unchained",
            content: GodsUnchainedButtons(),
          },
          {
            label: "Spider Tanks",
            content: SpiderTanksButtons(),
          },
          {
            label: "Planet Mojo",
            content: MojoButtons(),
          },
        ]}
      />
    </ObserverContainer>
  );
};
