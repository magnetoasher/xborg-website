import { Helmet } from "react-helmet";
import { Images } from "../../assets/imgs/Images";
import {
  ButtonPrimary,
  Layout,
  Links,
  ObserverContainer,
  ParallaxLayer,
  SectionHead,
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
                <SectionHead
                  logo={Images.logofull}
                  title={<span>Prometheus</span>}
                  smallerHeading
                >
                  <p className="section-desc lexend-body-m">
                    Experience XBorg to the fullest by joining the 1,111
                    Prometheans shaping the future of gaming and esports.
                    <br />
                    <br />
                    We are building an ecosystem to onboard millions of players
                    into Web3. Join us.
                  </p>
                </SectionHead>
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

            <SectionHead
              logo={Images.logofull}
              title={
                <>
                  NFT <span>utilities</span>
                </>
              }
              smallerHeading
            >
              <p className="lexend-body-m">
                Experience XBorg to the fullest by joining the 1,111 Prometheans
                shaping the future of gaming and esports.
                <br />
                <br />
                We are building an ecosystem to onboard millions of players into
                Web3. Join us.
              </p>
            </SectionHead>

            <div className="list-data row row-wrap">
              <div className="col">
                <div className="title lexend-heading-l">
                  Early protocol governance
                </div>
                <div className="desc lexend-body-s">
                  Are you ready to shape the future of gaming? Join our group of
                  trailblazing pioneers and have your say in our early protocol
                  governance. Witness the depth of our cutting-edge protocol as
                  we build groundbreaking products together.
                </div>
              </div>

              <div className="col">
                <div className="title lexend-heading-l">
                  Token and NFT airdrops
                </div>
                <div className="desc lexend-body-s">
                  XBorg’s a pioneer in Esports and gaming products. The first
                  large-scale Esports DAO to be launched in Q2 2023. Prometheus
                  get first access, same for our seed round. Prometheus holders
                  will receive the coveted XBORG token.
                </div>
              </div>

              <div className="col">
                <div className="title lexend-heading-l">
                  Whitelists & early game opportunities
                </div>
                <div className="desc lexend-body-s">
                  Get exclusive access to early game opportunities and coveted
                  whitelists from the most promising projects in the Web3 space
                  with XBorg's unparalleled footprint.
                </div>
              </div>

              <div className="col">
                <div className="title lexend-heading-l">Pro, forever</div>
                <div className="desc lexend-body-s">
                  Be the first to access products like Launchpad opportunities
                  and benefit from a 0 fee experience. You can’t beat the
                  Prometheus status.
                </div>
              </div>

              <div className="col">
                <div className="title lexend-heading-l">
                  Early access to XBorg’s products and applications
                </div>
                <div className="desc lexend-body-s">
                  Be the first to experience XBorg's innovative esports and
                  gaming products, including the first large-scale Esports DAO
                  launching in Q2 2023.
                </div>
              </div>

              <div className="col">
                <div className="title lexend-heading-l">Private Club</div>
                <div className="desc lexend-body-s">
                  Know exactly what’s happening in the behind the scenes. Be
                  aware of all upcoming news. Oh, and sometimes you may find
                  some Alpha.
                </div>
              </div>
            </div>

            <div className="hype-separator lexend-body-m row middle center text-center">
              Not hype, just facts...
            </div>

            <Table data={prometheustable} />

            <div className="row middle center text-center">
              <h2 className="vista-heading embark">
                <span>Embark</span> on this journey with us
              </h2>
            </div>

            <div className="row middle center actions">
              <ButtonPrimary
                label="Purchase a Prometheus"
                href="https://opensea.io/collection/xborg-prometheus"
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
