import { useEffect } from "react";
import Collapsible from "react-collapsible";
import { Layout } from "../../components";
import { ScrollViewModel } from "../../viewmodels/ScrollViewModel";

export const FAQ = () => {
  useEffect(() => {
    const scrollVM = new ScrollViewModel();
    scrollVM.removeCustomScrolling();
  }, []);

  return (
    <Layout
      className="faq-layout"
      components={[
        <div className="faq">
          {/* <SectionHead title="FAQs" /> */}
          <div className="container container-xl">
            <div className="faqs">
              <Collapsible trigger="What is XBorg? " className="collapsible">
                <p>
                  XBorg is an open and composable gaming protocol, building a
                  gaming credential and application network for players and
                  Decentralized Gaming Societies.
                </p>
              </Collapsible>
              <Collapsible
                trigger="Who is behind XBorg?"
                className="collapsible"
              >
                <p>
                  In March 2022, XBorg was established as a spinoff and the
                  gaming venture of SwissBorg. The complete list of XBorg team
                  members can be found <a href="/about-us"> here</a>. Most
                  importantly, XBorg is supported by its community of more than
                  10'000 players.
                </p>
              </Collapsible>
              <Collapsible
                trigger="What is the Prometheus NFT"
                className="collapsible"
              >
                <p>
                  The Prometheus collection is a core component of the XBorg
                  ecosystem. It grants holders with governance rights, fee-less
                  access to all XBorg products and a vested airdrop of XGB
                  tokens. The Prometheus collection can be viewed and bought{" "}
                  <a href="https://opensea.io/collection/xborg-prometheus">
                    {" "}
                    here.
                  </a>
                </p>
              </Collapsible>
              <Collapsible
                trigger="How can I access your whitepaper? "
                className="collapsible"
              >
                <p>
                  The XBorg whitepaper V1 is currently in progress and will be
                  delivered around Q1 2023. Our public deck can be viewed
                  <a href="https://docsend.com/view/5dwn74pn6izud3vb">here.</a>
                </p>
              </Collapsible>

              <Collapsible
                trigger="How can I join the community?  "
                className="collapsible"
              >
                <p>
                  All players and fans of games are invited to participate and
                  become a part of our community. Ongoing discussions are taking
                  place on{" "}
                  <a href="https://discord.com/invite/xborg">Discord</a> and
                  through our governance page on
                  <a href="https://snapshot.org/#/xborg.eth"> Snapshot. </a>
                </p>
              </Collapsible>

              <Collapsible
                trigger="How can I invested early in XBorg?  "
                className="collapsible"
              >
                <p>
                  XBorg will conduct a private community token sale in Q1 2023.
                </p>
              </Collapsible>

              <Collapsible
                trigger="Do you have other questions?  "
                className="collapsible"
              >
                <p>
                  Join our community and our team of moderators will answer all
                  of your questions.
                </p>
              </Collapsible>
            </div>
          </div>
        </div>,
      ]}
    />
  );
};
