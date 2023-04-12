import { Images } from "../../assets/imgs/Images";
import {
  ButtonPrimary,
  ButtonSecondary,
  Layout,
  ObserverContainer,
  ParallaxLayer,
  SectionDescription,
} from "../../components";

export const SubmissionRecorded = () => {
  return (
    <Layout
      transparentNavbar={false}
      components={[
        <div className="submission-recorded w-full row column middle">
          <h1>Submission recorded</h1>

          <SectionDescription className="subtitle">
            You can now access our private documents. We will also send you the
            latest updates by email in the coming days, so keep an eye on your
            mailbox (including the spam folder).
          </SectionDescription>

          <div className="wrapper row between middle">
            <ObserverContainer className="parallaxed row column middle center">
              <ParallaxLayer
                image={Images.launchpad.deck}
                factorX={0.1}
                factorY={0.1}
                speed={0}
                isBase
                className="parallaxed-1 parallaxed-deck"
              />
            </ObserverContainer>
            <div className="row column details">
              <div className={`state-indicator row column`}>
                <span className="active" />
                <span />
                <span />
              </div>
              <h4>
                <span>Private</span> deck
              </h4>

              <SectionDescription className="description">
                Access our full deck including details on our financials and
                fundraising plans.
              </SectionDescription>

              <div className="row actions">
                <ButtonSecondary
                  label="Get access"
                  to="https://docsend.com/view/ikn6ehtivg83epbu"
                  target="_blank"
                />
              </div>
            </div>
          </div>

          <div className="wrapper row between middle">
            <ObserverContainer className="parallaxed row column middle center">
              <ParallaxLayer
                image={Images.launchpad.folder}
                factorX={0.1}
                factorY={0.1}
                speed={0}
                isBase
                className="parallaxed-1"
              />
            </ObserverContainer>
            <div className="row column details">
              <div className={`state-indicator row column`}>
                <span />
                <span className="active" />
                <span />
              </div>
              <h4>
                Due diligence <span>report</span>
              </h4>

              <SectionDescription className="description">
                The most comprehensive breakdown of XBorg ever released. Subject
                to NDA.
              </SectionDescription>

              <div className="row actions">
                <ButtonSecondary
                  label="Get access"
                  to="https://docsend.com/view/s/23d69ir3qbyq8m2a"
                  target="_blank"
                />
              </div>
            </div>
          </div>
          <div className="coming-soon row column middle center">
            <ButtonPrimary
              label="More coming soon..."
              to="https://twitter.com/xborg_official"
              target="_blank"
            />

            <SectionDescription className="">
              More content for investors will be release in the coming days.
              Check your emails regularly to stay up to date!
            </SectionDescription>
          </div>
        </div>,
      ]}
    />
  );
};
