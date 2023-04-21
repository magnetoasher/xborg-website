import { useRef } from "react";
import { Images } from "../../assets/imgs/Images";
import {
  ButtonPrimary,
  ButtonSecondary,
  Layout,
  ObserverContainer,
  ParallaxLayer,
  SectionDescription,
} from "../../components";
import { TextManipulation } from "../../viewmodels/textManipulation";

export const SubmissionRecorded = () => {
  const ref = useRef(null);

  const textVM = new TextManipulation();

  return (
    <Layout
      transparentNavbar={false}
      components={[
        <div className="submission-recorded w-full row column middle">
          <h1 ref={ref} className="vista-heading">
            Submission recorded
          </h1>

          <SectionDescription
            className="subtitle lexend-heading-xs text-center w-full"
            onAnimateIn={() => textVM.scrambleText(ref)}
          >
            You can now access our private documents. We will also send you the
            latest updates by email in the coming days, so keep an eye on your
            mailbox (including the spam folder).
          </SectionDescription>

          <div className="wrapper row between middle">
            <ObserverContainer className="parallaxed row column middle center">
              <ParallaxLayer
                image={Images.xborgapp.deck}
                factorX={-0.1}
                factorY={-0.1}
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
              <h4 className="vista-heading">
                Private <span>deck</span>
              </h4>

              <SectionDescription className="description lexend-body-s">
                Access our full deck including details on our financials and
                fundraising plans.
              </SectionDescription>

              <div className="row actions">
                <ButtonSecondary
                  label="Get access"
                  href="https://docsend.com/view/ikn6ehtivg83epbu"
                  target="_blank"
                />
              </div>
            </div>
          </div>

          <div className="wrapper row between middle">
            <ObserverContainer className="parallaxed row column middle center">
              <ParallaxLayer
                image={Images.xborgapp.folder}
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
              <h4 className="vista-heading">
                <span>Due diligence</span> report
              </h4>

              <SectionDescription className="description lexend-body-s">
                The most comprehensive breakdown of XBorg ever released. Subject
                to NDA.
              </SectionDescription>

              <div className="row actions">
                <ButtonSecondary
                  label="Get access"
                  href="https://docsend.com/view/s/23d69ir3qbyq8m2a"
                  target="_blank"
                />
              </div>
            </div>
          </div>
          <div className="coming-soon row column middle center">
            <ButtonPrimary
              label="More coming soon..."
              href="https://twitter.com/xborg_official"
              target="_blank"
            />

            <p className="lexend-body-xs1 w-full text-center">
              More content for investors will be release in the coming days.
              Check your emails regularly to stay up to date!
            </p>
          </div>
        </div>,
      ]}
    />
  );
};
