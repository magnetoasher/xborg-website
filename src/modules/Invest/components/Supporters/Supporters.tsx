import { useRef } from "react";
import { Images } from "../../../../assets/imgs/Images";
import {
  Article,
  ButtonPrimary,
  Links,
  ObserverContainer,
  SectionDescription,
} from "../../../../components";
import { TextManipulation } from "../../../../viewmodels/textManipulation";

export const Supporters = () => {
  const swisseRef = useRef(null);

  const textVM = new TextManipulation();

  return (
    <div className="supporters w-full">
      <div className="row between">
        <div className="partners-list">
          <h2>
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
              <img src={Images.partners.partner04} alt="" />
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
        <ObserverContainer className="swissborg row column middle center text-center">
          <img src={Images.partners.swissborg} alt="Swissborg" />
          <div className="swissborg-title">
            Powered by <strong ref={swisseRef}>SwissBorg</strong>
          </div>
          <SectionDescription
            className=""
            onAnimateIn={() => textVM.scrambleText(swisseRef)}
          >
            XBorg is a spin-off of SwissBorg, a crypto wealth management app
            with 700'000 users & $1B in Assets Under Management.
          </SectionDescription>
        </ObserverContainer>
      </div>

      <div className="featured-in row column middle center">
        <h2>
          <span>Featured</span> in
        </h2>

        <ObserverContainer className="featured-list row between">
          <div className="col row column middle center">
            <img src={Images.partners.cryptoslate} alt="Cryptoslate" />

            <div className="col-title">Cryptoslate</div>
          </div>
          <div className="col row column middle center">
            <img src={Images.partners.esb} alt="Esports Bureau" />

            <div className="col-title">Esports Bureau</div>
          </div>
          <div className="col row column middle center">
            <img src={Images.partners.esi} alt="Esports Insider" />

            <div className="col-title">Esports Insider</div>
          </div>
        </ObserverContainer>
      </div>

      <ObserverContainer className="most-read-articles row column middle center">
        <h2>
          <span>Most read</span> articles
        </h2>

        <div className="articles-list row between">
          <Article
            image={Images.invest.news}
            tag={"tag"}
            date={"date"}
            title={"title"}
          />
          <Article
            image={Images.invest.news}
            tag={"tag"}
            date={"date"}
            title={"title"}
          />
          <Article
            image={Images.invest.news}
            tag={"tag"}
            date={"date"}
            title={"title"}
          />
        </div>
      </ObserverContainer>

      <div className="invest-early row middle center column">
        <h2 className="text-center">Invest in the future of XBorg</h2>

        <div className="desc text-center">
          The only opportunity to invest early in XBorg, alongside the best
          investors of the space.
        </div>

        <div className="actions row">
          <ButtonPrimary label="Register interest" />
        </div>
      </div>

      <Links />
    </div>
  );
};
