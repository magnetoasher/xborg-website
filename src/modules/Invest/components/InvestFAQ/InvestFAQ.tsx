import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import { ButtonSecondary } from "../../../../components";
import { Head } from "../Head";
import { Navbar } from "../Navbar";

export const InvestFAQ = () => {
  return (
    <div className="invest-faq faq row column middle center">
      <Head />
      <Navbar active={4} />
      <div className="container container-xl">
        <div className="faqs">
          <Collapsible trigger="What is XBorg? " className="collapsible">
            <p>
              XBorg is building a Gaming Credential and Application Network for
              players and Decentralized Gaming Societies.
            </p>
            <p>
              The first application within this network is XBorg.gg, the
              ultimate gaming platform for players and fans. Players can earn
              limited-edition collectables based on their gaming skills and
              social reputation.
            </p>
            <p>
              With support from more than 10,000 players, including the best
              players in the Web3 community, XBorg has established itself as a
              leading player in the Web3 gaming space.
            </p>
          </Collapsible>
          <Collapsible trigger="Who is behind XBorg?" className="collapsible">
            <p>
              XBorg is a{" "}
              <a href="https://swissborg.com" target="_blank" className="link">
                SwissBorg
              </a>{" "}
              spinoff and was created in March 2022. The complete list of XBorg
              team members can be found <Link to={"/about-us"}> here</Link>.
              Most importantly, XBorg is supported by its community of more than
              10'000 players.
            </p>
          </Collapsible>
          <Collapsible
            trigger="What is the Prometheus NFT"
            className="collapsible"
          >
            <p>
              The Prometheus collection is a core component of the XBorg
              ecosystem. It grants holders governance rights, fee-less access to
              all XBorg products and a vested airdrop of XBORG tokens. The
              Prometheus collection can be viewed and bought{" "}
              <a
                href="https://opensea.io/collection/xborg-prometheus"
                target="_blank"
                className="link"
              >
                here
              </a>
              .
            </p>
          </Collapsible>
          <Collapsible
            trigger="How can I access your whitepaper? "
            className="collapsible"
          >
            <p>
              The XBorg whitepaper V1 is currently in progress and will be
              delivered around Q2 2023. In the meantime, you can check our
              Public Deck{" "}
              <a
                href="https://docsend.com/view/5dwn74pn6izud3vb"
                target="_blank"
                className="link"
              >
                here
              </a>
              .
            </p>
          </Collapsible>

          <Collapsible
            trigger="How can I join the community?  "
            className="collapsible"
          >
            <p>
              Join our community on{" "}
              <a
                href="https://discord.com/invite/xborg"
                target="_blank"
                className="link"
              >
                Discord
              </a>{" "}
              and follow us on{" "}
              <a
                href="https://twitter.com/xborg_official"
                target="_blank"
                className="link"
              >
                Twitter
              </a>{" "}
              to stay up-to-date.
            </p>
          </Collapsible>

          <Collapsible
            trigger="How can I invested early in XBorg?"
            className="collapsible"
          >
            <p>
              XBorg will conduct a private token sale in Q2 2023. Click on the
              button below to register interest for the upcoming seed round.
            </p>

            <div className="row">
              <ButtonSecondary label="Participate in seed round" to="/seed" />
            </div>
          </Collapsible>

          <Collapsible trigger="How can I contact you?" className="collapsible">
            <p>
              If you want to speak with a member of the team, head over to{" "}
              <a
                href="https://discord.com/invite/xborg"
                target="_blank"
                className="link"
              >
                Discord
              </a>{" "}
              and open a ticket. One of the moderators will add the relevant
              team member to the chat.
            </p>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};
