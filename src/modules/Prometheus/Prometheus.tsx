import { Helmet } from "react-helmet";
import { Images } from "../../assets/imgs/Images";
import {
  ButtonPrimary,
  Layout,
  Links,
  ObserverContainer,
  ParallaxLayer,
  Table,
} from "../../components";
import { prometheustable } from "../../localdata/prometheustable";

export const Prometheus = () => {
  return (
    <>
      <Helmet>
        <meta property="og:image" content={Images.OGIndex.OGIndexPrometheus} />
      </Helmet>
      <Layout
        className="prometheus-page-layout"
        components={[
          <div className="prometheus-page">
            <div className="prometheus-intro row middle">
              <div className="expand prometheus-details">
                <div className={"section-head-container"}>
                  <div className="row section-head">
                    <div className="section-border" />
                    <div className="row column expand">
                      <div className="logo-icon">
                        <img src={Images.logofull} alt="" />
                      </div>

                      <h2 className="section-head-title">Prometheus</h2>
                    </div>
                  </div>
                  <p className="section-head-desc">
                    Experience XBorg to the fullest by joining the 1,111
                    Prometheans shaping the future of gaming and esports.
                    <br />
                    <br />
                    We are building an ecosystem to onboard millions of players
                    into Web3. Join us.
                  </p>
                </div>
              </div>
              <ObserverContainer className="parallaxed row middle center">
                <ParallaxLayer
                  image={Images.aboutUs.logo02}
                  factorX={-0.1}
                  factorY={-0.1}
                  speed={7}
                  isBase
                  className="parallaxed-1"
                />
                <ParallaxLayer
                  image={Images.aboutUs.smoke1_01}
                  factorX={-0.2}
                  factorY={-0.1}
                  speed={3}
                  className="parallaxed-2"
                />
                <ParallaxLayer
                  image={Images.aboutUs.smoke1_02}
                  factorX={-0.1}
                  factorY={-0.3}
                  speed={3}
                  className="parallaxed-3"
                />
                <ParallaxLayer
                  image={Images.aboutUs.render3d}
                  factorX={-0.4}
                  factorY={-0.3}
                  speed={0}
                  className="parallaxed-4"
                />
                <ParallaxLayer
                  image={Images.aboutUs.sparks}
                  factorX={-0.3}
                  factorY={-0.3}
                  speed={-2}
                  className="parallaxed-5"
                />
              </ObserverContainer>
            </div>

            <div className={"section-head-container"}>
              <div className="row section-head">
                <div className="section-border" />

                <h2 className="section-head-title">
                  NFT <span>utilities</span>
                </h2>
              </div>
            </div>

            <div className="list-data row row-wrap">
              <div className="col">
                <div className="title">Early protocol governance</div>
                <div className="desc">
                  Are you ready to shape the future of gaming? Join our group of
                  trailblazing pioneers and have your say in our early protocol
                  governance. Witness the depth of our cutting-edge protocol as
                  we build groundbreaking products together.
                </div>
              </div>

              <div className="col">
                <div className="title">Token and NFT airdrops</div>
                <div className="desc">
                  XBorg’s a pioneer in Esports and gaming products. The first
                  large-scale Esports DAO to be launched in Q2 2023. Prometheus
                  get first access, same for our seed round. Prometheus holders
                  will receive the coveted XBORG token.
                </div>
              </div>

              <div className="col">
                <div className="title">
                  Whitelists & early game opportunities
                </div>
                <div className="desc">
                  Get exclusive access to early game opportunities and coveted
                  whitelists from the most promising projects in the Web3 space
                  with XBorg's unparalleled footprint.
                </div>
              </div>

              <div className="col">
                <div className="title">Pro, forever</div>
                <div className="desc">
                  Be the first to access products like Launchpad opportunities
                  and benefit from a 0 fee experience. You can’t beat the
                  Prometheus status.
                </div>
              </div>

              <div className="col">
                <div className="title">
                  Early access to XBorg’s products and applications
                </div>
                <div className="desc">
                  Be the first to experience XBorg's innovative esports and
                  gaming products, including the first large-scale Esports DAO
                  launching in Q2 2023.
                </div>
              </div>

              <div className="col">
                <div className="title">Private Club</div>
                <div className="desc">
                  Know exactly what’s happening in the behind the scenes. Be
                  aware of all upcoming news. Oh, and sometimes you may find
                  some Alpha.
                </div>
              </div>
            </div>

            <div className="hype-separator row middle center text-center">
              Not hype, just facts...
            </div>

            <Table data={prometheustable} />

            <div className="row middle center text-center">
              <div className="embark">
                <span>Embark</span> on this journey with us
              </div>
            </div>

            <div className="row middle center actions">
              <ButtonPrimary
                label="Purchase a Prometheus"
                to="https://opensea.io/collection/xborg-prometheus"
                target="_blank"
              />
            </div>
            <Links />
          </div>,
        ]}
      />
    </>
  );
};
