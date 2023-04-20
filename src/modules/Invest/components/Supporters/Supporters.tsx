import { useRef } from "react";
import { Images } from "../../../../assets/imgs/Images";
import {
  Article,
  ButtonPrimary,
  Links,
  ObserverContainer,
} from "../../../../components";
import { mostreadarticles } from "../../../../localdata/articles";

export const Supporters = () => {
  const swisseRef = useRef(null);

  return (
    <div className="supporters w-full">
      <div className="row between content">
        <div className="partners-list">
          <h2 className="vista-heading">
            Supported by the <span>leaders of gaming & esports</span>
          </h2>

          <ObserverContainer className="list row row-wrap">
            <div className="list-item">
              <img src={Images.partners.partner01} alt="" />
            </div>
            <div className="list-item">
              <img src={Images.partners.partner02} alt="" />
            </div>
            <div className="list-item">
              <img src={Images.partners.partner03} alt="" />
            </div>
            <div className="list-item">
              <img src={Images.partners.partner10} alt="" />
            </div>
            <div className="list-item">
              <img src={Images.partners.partner05} alt="" />
            </div>
            <div className="list-item">
              <img src={Images.partners.partner06} alt="" />
            </div>
            <div className="list-item">
              <img src={Images.partners.partner07} alt="" />
            </div>
            <div className="list-item">
              <img src={Images.partners.partner08} alt="" />
            </div>
            <div className="list-item">
              <img src={Images.partners.partner09} alt="" />
            </div>
          </ObserverContainer>
        </div>
        <div className="swissborg row column middle center text-center">
          <img src={Images.partners.swissborg} alt="Swissborg" />
          <div className="lexend-body-xl">
            Powered by <strong ref={swisseRef}>SwissBorg</strong>
          </div>
          <p className="lexend-heading-s">
            XBorg is a spin-off of SwissBorg, a crypto wealth management app
            with 700'000 users & $1B in Assets Under Management.
          </p>
        </div>
      </div>

      <div className="featured-in row column middle center">
        <h2 className="vista-heading">
          <span>Featured</span> in
        </h2>

        <ObserverContainer className="featured-list row between">
          <a
            href="https://cryptoslate.com/rocket-league-world-champions-teambds-partners-with-xborg-for-web3-fan-activations/"
            target="_blank"
            className="col row column middle center"
          >
            <img src={Images.partners.cryptoslate} alt="Cryptoslate" />

            <div className="col-title lexend-body-s">Cryptoslate</div>
          </a>
          <a
            href="https://esportsbureau.com/team-bds-y-xborg-anuncian-una-importante-asociacion/"
            target="_blank"
            className="col row column middle center"
          >
            <img src={Images.partners.esb} alt="Esports Bureau" />

            <div className="col-title lexend-body-s">Esports Bureau</div>
          </a>
          <a
            href="https://esportsinsider.com/2023/03/team-bds-xborg-blockchain"
            target="_blank"
            className="col row column middle center"
          >
            <img src={Images.partners.esi} alt="Esports Insider" />

            <div className="col-title lexend-body-s">Esports Insider</div>
          </a>
        </ObserverContainer>
      </div>

      <ObserverContainer className="most-read-articles row column middle center">
        <h2 className="vista-heading">
          <span>Most read</span> articles
        </h2>

        <div className="articles-list row between">
          {mostreadarticles.map((item, index) => (
            <Article {...item} key={index} />
          ))}
        </div>
      </ObserverContainer>

      <div className="invest-early row middle center column">
        <h2 className="vista-heading text-center">
          Invest in <span>the future of XBorg</span>
        </h2>

        <div className="lexend-body-m desc text-center">
          The only opportunity to invest early in XBorg, alongside the best
          investors of the space.
        </div>

        <div className="actions row">
          <ButtonPrimary label="Register interest" to="/seed" />
        </div>
        <div className="mobile-coming text-center w-full">
          Coming end of April
        </div>
      </div>

      <Links />
    </div>
  );
};
