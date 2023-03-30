import { Images } from "../../../../assets/imgs/Images";
import { SectionDescription } from "../../../../components";

export const Partners = () => {
  return (
    <div className={`partners expand row middle between`}>
      <div className="description">
        <div className={"section-head-container"}>
          <div className="row section-head">
            <div className="section-border" />
            <h2 className="section-head-title">
              <span>Our</span> partners
            </h2>
          </div>
        </div>
        <div className="list row row-wrap">
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
        </div>
      </div>

      <div className="swissborg row column middle center text-center">
        <img src={Images.partners.swissborg} alt="Swissborg" />
        <div className="swissborg-title">
          Powered by <span>SwissBorg</span>
        </div>
        <SectionDescription className="">
          XBorg is a spin-off of SwissBorg, a crypto wealth management app with
          700'000 users & $1B in Assets Under Management.
        </SectionDescription>
      </div>
    </div>
  );
};
