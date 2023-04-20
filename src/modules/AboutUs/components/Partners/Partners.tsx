import { useRef } from "react";
import { Images } from "../../../../assets/imgs/Images";
import { ObserverContainer, SectionHead } from "../../../../components";

export const Partners = () => {
  const swisseRef = useRef(null);
  return (
    <div className="partners expand row middle between">
      <div className="description">
        <SectionHead
          title={
            <>
              <span>Our</span> partners
            </>
          }
        />
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
        <div className="lexend-body-xl">
          Powered by <strong ref={swisseRef}>SwissBorg</strong>
        </div>
        <p className="lexend-heading-s">
          XBorg is a spin-off of SwissBorg, a crypto wealth management app with
          700'000 users & $1B in Assets Under Management.
        </p>
      </div>
    </div>
  );
};
