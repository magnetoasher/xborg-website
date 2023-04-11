import { useRef } from "react";
import { Images } from "../../../../assets/imgs/Images";
import { ObserverContainer, SectionDescription } from "../../../../components";
import { TextScramble } from "../../../../viewmodels/TextScramble";

export const Partners = () => {
  const titleScrambleRef = useRef(null);
  const swisseRef = useRef(null);
  return (
    <div className={`partners expand row middle between`}>
      <div className="description">
        <div className={"section-head-container"}>
          <div className="row section-head">
            <div className="section-border" />
            <h2 className="section-head-title">
              <span>Our</span> <strong ref={titleScrambleRef}>partners</strong>
            </h2>
          </div>
        </div>
        <ObserverContainer className="list row row-wrap">
          <div className="list-item">
            <img src={Images.partners.partner01} alt="" />
          </div>
          <div className="list-item">
            <img src={Images.partners.partner02} alt="" />
          </div>
          <div className="list-item">
            <img src={Images.partners.partner03} alt="" />
          </div>
          <div className="list-item">
            <img src={Images.partners.partner04} alt="" />
          </div>
          <div className="list-item">
            <img src={Images.partners.partner05} alt="" />
          </div>
          <div className="list-item">
            <img src={Images.partners.partner06} alt="" />
          </div>
          <div className="list-item">
            <img src={Images.partners.partner07} alt="" />
          </div>
          <div className="list-item">
            <img src={Images.partners.partner08} alt="" />
          </div>
          <div className="list-item">
            <img src={Images.partners.partner09} alt="" />
          </div>
        </ObserverContainer>
      </div>

      <div className="swissborg row column middle center text-center">
        <img src={Images.partners.swissborg} alt="Swissborg" />
        <div className="swissborg-title">
          Powered by <strong ref={swisseRef}>SwissBorg</strong>
        </div>
        <SectionDescription
          className=""
          onAnimateIn={() => {
            const current =
              titleScrambleRef.current as unknown as HTMLDivElement;
            const swiss = swisseRef.current as unknown as HTMLDivElement;
            const scramble = new TextScramble(current);
            const scramble2 = new TextScramble(swiss);

            if (current && swiss) {
              scramble.setText(current.innerHTML);
              scramble2.setText(swiss.innerHTML);
            }
          }}
        >
          XBorg is a spin-off of SwissBorg, a crypto wealth management app with
          700'000 users & $1B in Assets Under Management.
        </SectionDescription>
      </div>
    </div>
  );
};
