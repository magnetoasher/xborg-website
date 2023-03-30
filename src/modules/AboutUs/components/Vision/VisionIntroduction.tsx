import { useRef } from "react";
import { Images } from "../../../../assets/imgs/Images";
import { ObserverContainer, SectionDescription } from "../../../../components";
import { TextScramble } from "../../../../viewmodels/TextScramble";

export const VisionIntroduction = () => {
  const titleScrambleRef = useRef(null);

  return (
    <div className="row middle between vision-introduction">
      <div className="description">
        <div className="section-head-container">
          <div className="row section-head">
            <div className="section-border" />
            <h2 className="section-head-title" ref={titleScrambleRef}>
              Our vision
            </h2>
          </div>
          <SectionDescription
            className="section-head-desc"
            onAnimateIn={() => {
              const current =
                titleScrambleRef.current as unknown as HTMLDivElement;
              const scramble = new TextScramble(current);
              if (titleScrambleRef.current) scramble.setText(current.innerHTML);
            }}
          >
            A gaming world where creativity and innovation thrive and every
            player has an equal opportunity to leave their mark. Our mission is
            to empower players worldwide by increasing their control over their
            data, so they can take ownership of their experiences and the
            communities they belong to.
          </SectionDescription>
        </div>
      </div>

      <ObserverContainer className="vision-intro-parallaxed row">
        <div className="line-indicator" />
        <div className="row column middle vision-intro">
          <div className="block block-first row middle center with-cube">
            Credential Network
          </div>
          <img src={Images.chevronDown} alt="chevron" className="chevron" />
          <div className="block block-second row middle center">
            Application Network
          </div>
          <img
            src={Images.chevronDown}
            alt="chevron"
            className="chevron chevron-second"
          />
          <div className="block block-third row middle center with-cube">
            Decentralized Societies
          </div>
        </div>
      </ObserverContainer>
    </div>
  );
};
