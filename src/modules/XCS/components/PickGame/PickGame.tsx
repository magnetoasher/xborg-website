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
        label="Ev.io Qualifier 2"
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-evio-month-2"
        target="_blank"
        icon={<ExternalLink />}
      />
      <ButtonPrimary
        label="Ev.io Qualifier 3"
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-evio-month-3"
        target="_blank"
        icon={<ExternalLink />}
      />
    </div>
  );
  const GodsUnchainedButtons = () => (
    <div className="row">
      <ButtonPrimary
        label="Gods Unchained Qualifier 2"
        icon={<ExternalLink />}
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-gu-month-2"
        target="_blank"
      />
      <ButtonPrimary
        label="Gods Unchained Qualifier 3"
        icon={<ExternalLink />}
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-gu-month-3"
        target="_blank"
      />
    </div>
  );
  const MojoButtons = () => (
    <div className="row">
      <ButtonPrimary
        label="Mojo Melee Qualifier 2"
        icon={<ExternalLink />}
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-mojo-melee-month-2"
        target="_blank"
      />
      <ButtonPrimary
        label="Mojo Melee Qualifier 3"
        icon={<ExternalLink />}
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-mojo-melee-month-3"
        target="_blank"
      />
    </div>
  );
  const CTAButtons = () => (
    <div className="row">
      <ButtonPrimary
        label="CTA Qualifier 2"
        icon={<ExternalLink />}
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-cta-month-2"
        target="_blank"
      />
      <ButtonPrimary
        label="CTA Qualifier 3"
        icon={<ExternalLink />}
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-cta-month-3"
      />
    </div>
  );
  const BornlessButtons = () => (
    <div className="row">
      <ButtonPrimary
        label="The Bornless Qualifier 1"
        icon={<ExternalLink />}
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-bornless-qualifier-1"
        target="_blank"
      />
      <ButtonPrimary
        label="The Bornless Qualifier 2"
        icon={<ExternalLink />}
        to="https://www.communitygaming.io/tournament/xtreme-championship-series-bornless-qualifier-2"
        target="_blank"
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
            label: "The Bornless",
            content: BornlessButtons(),
          },
          {
            label: "Gods Unchained",
            content: GodsUnchainedButtons(),
          },
          {
            label: "Mojo Melee",
            content: MojoButtons(),
          },
          {
            label: "Cross the Ages",
            content: CTAButtons(),
          },
        ]}
      />
    </ObserverContainer>
  );
};