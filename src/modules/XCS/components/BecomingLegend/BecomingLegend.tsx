import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  TableDataColumn,
  ButtonPrimary,
} from "../../../../components";

export const BecomingLegend = () => {
  return (
    <div className={`becoming-legend expand row column`}>
      <div className="row middle between expand">
        <div className="description expand">
          <div className="section-head-container">
            <div className="row section-head">
              <div className="section-border"></div>
              <div className="row column expand">
                <img src={Images.logo.default} alt="Becoming A Legend" />
                <h2 className="section-head-title">
                  <span>Becoming</span> A Legend
                </h2>
              </div>
            </div>
            <p className="section-head-desc">
              A 10-episode docu-series about Season 1 of the Xtreme Championship
              Series with behind the scenes drama, match-day highlights and
              exclusive interviews.
            </p>
          </div>
          <div className="row column releasing-date start top">
            <p>Releasing on YouTube in August 2023</p>
            <a
              href="https://www.youtube.com/@xborgofficial"
              className="btn-primary row middle center"
              target="_blank"
            >
              <span className="expand">Subscribe to our Youtube</span>
            </a>
          </div>
        </div>
        <ObserverContainer className="parallaxed expand row middle center">
          <ParallaxLayer
            image={Images.XCS.camera}
            factorX={0.3}
            factorY={0.3}
            speed={0}
            isBase
            className="parallaxed-1"
          />
        </ObserverContainer>
      </div>
    </div>
  );
};
