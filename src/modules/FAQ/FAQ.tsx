import { useEffect } from "react";
import Collapsible from "react-collapsible";
import { Layout, SectionHead } from "../../components";
import { ScrollViewModel } from "../../viewmodels/ScrollViewModel";

export const FAQ = () => {
  useEffect(() => {
    const scrollVM = new ScrollViewModel();
    scrollVM.removeCustomScrolling();
  }, []);

  return (
    <Layout
      className="faq-layout"
      overrideScroll={false}
      components={[
        <div className="faq">
          <SectionHead title="FAQs" />
          <div className="container container-xl">
            <div className="faqs">
              <Collapsible trigger="What is XBorg? " className="collapsible">
                <p>
                  XBorg is a protocol that creates digital identities for gamers
                  by utilizing a data credential layer. It is also constructing
                  fan engagement and community applications for Esports and
                  gaming enthusiasts. With support from more than 10,000 players
                  in the Esports world, including the best players in the Web3
                  community, XBorg has established itself as a leading player in
                  the Web3 gaming space. XBorg has partnered with industry
                  pioneers such as Ultra, Gala Games, Zilliqa and YGG.
                </p>
              </Collapsible>
              <Collapsible
                trigger="Who is behind XBorg?"
                className="collapsible"
              >
                <p>
                  XBorg is a <a href="www.swissborg.com"> SwissBorg</a> spinoff
                  and was created in March 2022. The complete list of XBorg team
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
                  access to all XBorg products and a vested airdrop of XBORG
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
                  delivered around Q1 2023. The first draft of the whitepaper
                  can be viewed{" "}
                  <a href="https://docsend.com/documents/8733565">here.</a>
                </p>
              </Collapsible>

              <Collapsible
                trigger="How can I join the community?  "
                className="collapsible"
              >
                <p>
                  All players and fans of GameFi are invited to participate and
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
                  XBorg will conduct a private token sale in Q1 2023. All
                  investment inquiries can be sent via email at louis@xborg.com.
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
