import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonSecondary,
  ObserverContainer,
  ParallaxLayer,
  SectionDescription,
} from "../../../../components";

export const DecentralizedSocieties = () => {
  return (
    <div className="decentralized-societies row middle between block-wrapper">
      <ObserverContainer className="list">
        <div className="col">
          <div className="row middle">
            <div className="date">Q2 2023</div>
            <div className="col-title">
              Decentralized <span>Gaming Societies</span>
            </div>
          </div>

          <SectionDescription className="desc">
            Enabling the creation of decentralized gaming societies governed by
            fans and players.
          </SectionDescription>
        </div>

        <div className="col">
          <div className="row middle">
            <div className="date">2024</div>
            <div className="col-title">
              Player Earnings <span>Tokenization</span>
            </div>
          </div>

          <SectionDescription className="desc">
            Providing players with a solution to tokenize their earnings and
            share their success with the broader gaming community.
          </SectionDescription>
        </div>

        <div className="col">
          <div className="row middle">
            <div className="date">2024</div>
            <div className="col-title">
              Reputational-Based <span>lending</span>
            </div>
          </div>

          <SectionDescription className="desc">
            XBorg’s Lending Module presents players with the opportunity to lend
            or borrow valuable gaming assets, contingent on their on-chain
            reputation.
          </SectionDescription>
        </div>
      </ObserverContainer>

      <ObserverContainer className="parallaxed row column middle center">
        <ParallaxLayer
          image={Images.launchpad.folder}
          factorX={0.1}
          factorY={0.1}
          speed={0}
          isBase
          className="parallaxed-1"
        />

        <SectionDescription className="knowmore">
          Want to know where XBorg is headed? Access our newly released public
          deck.
        </SectionDescription>
        <ButtonSecondary
          label="Get access"
          to="https://docsend.com/view/5dwn74pn6izud3vb"
          target="_blank"
        />
      </ObserverContainer>
    </div>
  );
};
