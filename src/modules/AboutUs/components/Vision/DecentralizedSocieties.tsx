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
            <div className="red-highlighted">
              <span>Q2 2023</span>
            </div>
            <h4 className="vista-heading">
              Decentralized <span>Gaming Societies</span>
            </h4>
          </div>

          <p className="lexend-heading-s">
            Enabling the creation of decentralized gaming societies governed by
            fans and players.
          </p>
        </div>

        <div className="col">
          <div className="row middle">
            <div className="red-highlighted">
              <span>2024</span>
            </div>
            <h4 className="vista-heading">
              Player Earnings <span>Tokenization</span>
            </h4>
          </div>

          <p className="lexend-heading-s">
            Providing players with a solution to tokenize their earnings and
            share their success with the broader gaming community.
          </p>
        </div>

        <div className="col">
          <div className="row middle">
            <div className="red-highlighted">
              <span>2024</span>
            </div>
            <h4 className="vista-heading">
              Reputational-Based <span>lending</span>
            </h4>
          </div>

          <p className="lexend-heading-s">
            XBorg’s Lending Module presents players with the opportunity to lend
            or borrow valuable gaming assets, contingent on their on-chain
            reputation.
          </p>
        </div>
      </ObserverContainer>

      <ObserverContainer className="parallaxed row column middle center">
        <ParallaxLayer
          image={Images.aboutUs.deck}
          factorX={0.1}
          factorY={0.1}
          speed={0}
          isBase
          className="parallaxed-1"
        />

        <SectionDescription className="lexend-heading-xs">
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
