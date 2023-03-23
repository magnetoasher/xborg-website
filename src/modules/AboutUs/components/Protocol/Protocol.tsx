import { Images } from "../../../../assets/imgs/Images";
import { ObserverContainer, ParallaxLayer } from "../../../../components";

export const Protocol = () => {
  const data = {
    apps: 2,
    partners: 12,
    users: 10000,
  };
  return (
    <div className={`protocol expand row middle between`}>
      <div className="description">
        <div className={"section-head-container"}>
          <div className="row section-head">
            <div className="section-border" />
            <div className="row column expand">
              <div className="logo-icon">
                <img src={Images.logofull} alt="" />
              </div>

              <h2 className="section-head-title">
                <span>An open and composable</span>
                <br />
                gaming protocol
              </h2>
            </div>
          </div>
          <p className="section-head-desc">
            A collaborative credential infrastructure on which games, brands and
            communities can build applications and engage with their players and
            fans.
          </p>

          <div className="statistics row">
            <div className="col">
              <div className="stats-value">{data.apps}</div>
              <div className="stats-label">Live applications</div>
            </div>
            <div className="col">
              <div className="stats-value">{data.partners}</div>
              <div className="stats-label">Network partners</div>
            </div>
            <div className="col">
              <div className="stats-value">{data.users.toLocaleString()}</div>
              <div className="stats-label">Active protocol users</div>
            </div>
          </div>
        </div>
      </div>
      <ObserverContainer className="parallaxed expand row column middle center">
        <ParallaxLayer
          image={Images.aboutUs.protocolCube1}
          factorX={0.1}
          factorY={0.1}
          speed={0}
          isBase
          className="parallaxed-1"
        />
        <ParallaxLayer
          image={Images.aboutUs.protocolCube2}
          factorX={0.2}
          factorY={0.2}
          speed={0}
          className="parallaxed-2"
        />
        <ParallaxLayer
          image={Images.aboutUs.protocolCube3}
          factorX={-0.1}
          factorY={-0.1}
          speed={0}
          className="parallaxed-3"
        />
        <ParallaxLayer
          image={Images.aboutUs.controller}
          factorX={0}
          factorY={0}
          speed={0}
          className="parallaxed-4"
        />
      </ObserverContainer>
    </div>
  );
};
