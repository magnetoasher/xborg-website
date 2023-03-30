import { useEffect, useState } from "react";
import { Images } from "../../../../assets/imgs/Images";
import { ObserverContainer, ParallaxLayer } from "../../../../components";

let counter = 0;
export const Collectibles = () => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    handleImageSwap();
  }, []);

  const handleImageSwap = () => {
    setTimeout(() => {
      setCurrent(counter);

      counter++;
      if (counter == 2) {
        counter = 0;
      }
      handleImageSwap();
    }, 3000);
  };

  return (
    <div className="collectibles expand row middle between">
      <ObserverContainer
        className={`parallaxed expand row column middle center state-${current}`}
      >
        <ParallaxLayer
          image={Images.xborgapp.collectible2}
          factorX={-0.1}
          factorY={-0.1}
          speed={7}
          isBase
          className="parallaxed-1"
        />
        <ParallaxLayer
          image={Images.xborgapp.collectible1}
          factorX={-0.1}
          factorY={-0.1}
          speed={3}
          className="parallaxed-2"
        />

        <div>
          <div className="collectible-details row middle">
            <div className="collectible-image">
              <img src={Images.xborgapp.hair1} alt="Hair 1" />
            </div>

            <div className="row column">
              <div className="name">Blue Spiky Hair</div>
              <div className="row middle line">
                <div className="rarity">
                  Rarity: <span className="rare">Rare</span>
                </div>
                <div className="type">
                  Type: <span>Head</span>
                </div>
              </div>
              <div className="supply line">
                Total Supply: <span>1000</span>
                <a>List of owners</a>
              </div>
            </div>
          </div>

          <div className="collectible-details row middle">
            <div className="collectible-image">
              <img src={Images.xborgapp.orb} alt="Hair 2" />
            </div>

            <div className="row column">
              <div className="name">Red Magic Orb</div>
              <div className="row middle line">
                <div className="rarity">
                  Rarity: <span className="legendary">Legendary</span>
                </div>
                <div className="type">
                  Type: <span>Spell</span>
                </div>
              </div>
              <div className="supply line">
                Total Supply: <span>100</span>
                <a>List of owners</a>
              </div>
            </div>
          </div>
        </div>
      </ObserverContainer>
      <div className="description">
        <div className="section-head-container">
          <div className="row section-head">
            <div className="section-border" />
            <div className="row column expand">
              <img src={Images.logo.default} alt="" />

              <h2 className="section-head-title">
                Gamified <span>collectible experience</span>
              </h2>
            </div>
          </div>
          <p className="section-head-desc">
            Unlock exclusive collectibles, customise your digital avatar and
            stand out from the crowd.
          </p>
        </div>
      </div>
    </div>
  );
};
