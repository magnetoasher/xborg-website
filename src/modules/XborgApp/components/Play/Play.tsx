import { useEffect, useState } from "react";
import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonPrimary,
  ParallaxLayer,
  ObserverContainer,
  ButtonSecondary,
  SectionDescription,
  CountUpAnimation,
} from "../../../../components";

let counter = 0;
export const Play = () => {
  const phrases = [
    "win prizes",
    "collect badges",
    "level up",
    "build your identity",
    "open lootboxes",
  ];
  const [phrase, setPhrase] = useState(phrases[0]);
  const [isChanging, setChanging] = useState(false);

  const data = {
    users: 8000,
    quests: 15000,
    rewards: 20000,
  };

  useEffect(() => {
    handlePhraseChange();
  }, []);

  function handlePhraseChange() {
    setTimeout(() => {
      counter++;
      if (counter >= phrases.length) {
        counter = 0;
      }
      setChanging(true);
      setPhrase(phrases[counter]);
    }, 3500);

    setTimeout(() => {
      setChanging(false);
      handlePhraseChange();
    }, 4500);
  }

  return (
    <div className={`play-intro expand row middle between`}>
      <div className="description">
        <div className="logo-icon">
          <img src={Images.logofull} alt="" />
        </div>
        <div className="play-intro-text">
          <h1 className={isChanging ? "text-glitch" : ""}>
            Play and
            <br />
            <span>{phrase}</span>
          </h1>
          <SectionDescription className="subtitle">
            Discover a new meaning to play, connect with your favourite
            communities and build your very own player identity.
          </SectionDescription>

          <div className="actions row middle">
            <ButtonPrimary label={"Launch App"} />
            <ButtonSecondary label={"Get Beta early access"} />
          </div>

          <div className="row statistics">
            <div className="col">
              <div className="stats-value">
                <CountUpAnimation number={data.users} />
              </div>
              <div className="stats-label">Active users</div>
            </div>
            <div className="col">
              <div className="stats-value">{data.quests.toLocaleString()}</div>
              <div className="stats-label">Quests completed</div>
            </div>
            <div className="col">
              <div className="stats-value">
                ${data.rewards.toLocaleString()}
              </div>
              <div className="stats-label">Rewards distributed</div>
            </div>
          </div>
        </div>
      </div>
      <ObserverContainer className="parallaxed-corner row end bottom">
        <div className="triangle" />
        <ParallaxLayer
          image={Images.gamingpassport.aliens}
          factorX={-0.2}
          factorY={0.2}
          speed={0}
          isBase
          className="parallaxed-1"
        />
        <ParallaxLayer
          image={Images.gamingpassport.dark_swordsman}
          factorX={-0.1}
          factorY={0}
          speed={0}
          className="parallaxed-2"
        />
        <ParallaxLayer
          image={Images.gamingpassport.mage}
          factorX={0.1}
          factorY={0}
          speed={0}
          className="parallaxed-3"
        />
        <ParallaxLayer
          image={Images.gamingpassport.sparkles}
          factorX={-0.4}
          factorY={0}
          speed={0}
          className="parallaxed-4"
        />
      </ObserverContainer>
    </div>
  );
};
