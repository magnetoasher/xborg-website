import { useRef } from "react";
import {
  ButtonPrimary,
  CountUpAnimation,
  ObserverContainer,
  SectionDescription,
} from "../../../../components";
import { TextManipulation } from "../../../../viewmodels/textManipulation";

export const AboutXborg = () => {
  const introRef = useRef(null);
  const titleRef = useRef(null);

  const textVM = new TextManipulation();

  const data = {
    liveApps: 2,
    partners: 12,
    protocols: 10600,
    credentials: 30039,
  };

  return (
    <div className="about-xborg w-full row column middle center">
      <h1 className="text-center">
        Invest <span ref={introRef}>in the future of XBorg</span>
      </h1>

      <SectionDescription className="subtitle text-center">
        The only opportunity to invest early in XBorg, alongside the best
        investors of the space.
      </SectionDescription>

      <ButtonPrimary label="Register interest" />

      <SectionDescription className="coming">
        Coming end of April
      </SectionDescription>

      <h2>
        Pioneering <span ref={titleRef}>gaming</span>
      </h2>

      <div className="page-desc text-center">
        <SectionDescription
          className="paragraph"
          onAnimateIn={() => textVM.scrambleText(titleRef)}
        >
          We are shaping a gaming world where creativity and innovation thrive
          and every player has an equal opportunity to leave their mark.
        </SectionDescription>

        <SectionDescription className="paragraph">
          With hundreds of tournaments organised, the most competitive community
          in web3, and now a partnership with one of the biggest esports teams
          in the world, XBorg is ready to empower players and fans globally.
        </SectionDescription>
      </div>

      <ObserverContainer className="video-container">
        <iframe
          width="520"
          height="292"
          src="https://www.youtube.com/embed/UAKw_2SWheg"
          title="Introducing the new XBorg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </ObserverContainer>

      <div className="row statistics text-center">
        <div className="col">
          <CountUpAnimation number={data.liveApps} className="stats-value" />

          <div className="stats-label">Live applications</div>
        </div>
        <div className="col">
          <CountUpAnimation number={data.partners} className="stats-value" />

          <div className="stats-label">Network partners</div>
        </div>
        <div className="col">
          <CountUpAnimation number={data.protocols} className="stats-value" />

          <div className="stats-label">Active protocol users</div>
        </div>
        <div className="col">
          <CountUpAnimation number={data.credentials} className="stats-value" />

          <div className="stats-label">Credentials aggregated</div>
        </div>
      </div>
    </div>
  );
};
