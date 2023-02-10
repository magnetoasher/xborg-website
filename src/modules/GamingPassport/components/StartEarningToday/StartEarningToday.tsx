import { useRef } from "react";
import { Link } from "react-router-dom";
import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonPrimary,
  Progressbar,
  ParallaxLayer,
  ObserverContainer,
} from "../../../../components";
import { Countdown } from "../../../../components/Countdown";
import { ScrollViewModel } from "../../../../viewmodels/ScrollViewModel";
import { TextScramble } from "../../../../viewmodels/TextScramble";

export const StartEarningToday = () => {
  const titleRef = useRef(null);
  const scroll = new ScrollViewModel();
  const title = "Start Earning Today";
  const spotsClaimed = 10000;
  const maxSpots = 10000;

  function onAnimateIn() {
    const ref = titleRef.current;
    if (ref) {
      const scramble = new TextScramble(ref as HTMLElement);
      scramble.setText(title);
    }
  }

  function onRedirect() {
    scroll.scrollToSpecifiedScreen(0, true);
  }

  return (
    <div className={`start-earning-today expand row middle`}>
      <div className="description expand row column middle">
        <ObserverContainer className="start" onAnimateIn={onAnimateIn}>
          <h2>
            <div className="base">{title}</div>
            <div className="scramble" ref={titleRef}>
              {title}
            </div>
          </h2>
          <div className="section-head-container">
            <p className="section-head-desc">
              Get rewarded for playing your favourite games.
            </p>
          </div>
        </ObserverContainer>

        <div className="row column middle actions">
          <ButtonPrimary label="Launch App" to="http://gaming.xborg.com/" />

          <div className="plus" />

          <div className="giveaways">In-game assets giveaways</div>
        </div>
        <div className="wave-container row column">
          <div className="wave-details row between">
            <div className="wave">
              <div className="title">All spots filled</div>
              <div className="subtitle">Closed Beta</div>
            </div>
            <div className="spots">
              <div className="title">Spots Claimed</div>
              <div className="subtitle">
                <span>{spotsClaimed.toLocaleString()}</span>/
                {maxSpots.toLocaleString()}
              </div>
            </div>
          </div>
          <Progressbar progress={100} />
          <div className="wave-ends row column middle center">
            <div className="title">Public beta ends in:</div>
            <Countdown date={new Date("Feb 28, 2023 23:59:59")} />
          </div>
        </div>
      </div>

      <div className="parallaxed-elements">
        <ObserverContainer className="parallaxed-right row middle center">
          <ParallaxLayer
            image={Images.gamingpassport.artifact}
            factorX={0.3}
            factorY={0.3}
            speed={0}
            isBase
            className="parallaxed-1"
          />
          <ParallaxLayer
            image={Images.gamingpassport.ghost}
            factorX={0}
            factorY={0}
            speed={0}
            className="parallaxed-2"
          />
        </ObserverContainer>

        <ObserverContainer className="parallaxed-left row middle center">
          <ParallaxLayer
            image={Images.gamingpassport.blue_pet}
            factorX={-0.1}
            factorY={-0.1}
            speed={0}
            isBase
            className="parallaxed-1"
          />
          <ParallaxLayer
            image={Images.gamingpassport.counter_terrorist}
            factorX={0.1}
            factorY={0.1}
            speed={0}
            className="parallaxed-2"
          />
        </ObserverContainer>
      </div>

      <div className="links row middle center">
        {/* <Link to="/terms-and-agreements" onClick={onRedirect}>
          Privacy Policy
        </Link>
        <Link to="/terms-and-agreements" onClick={onRedirect}>
          Cookie Policy
        </Link>
  */}

        <a href="https://firebasestorage.googleapis.com/v0/b/xborg-quest.appspot.com/o/XBorg%20Website%20Terms%20of%20Use.pdf?alt=media&token=ff336d2a-0ca4-45d4-8dbd-6f895b34a8c9">
          Terms of use
        </a>

        <a href="https://docsend.com/documents/8733565">White Paper</a>

        <Link to="/launchpad" onClick={onRedirect}>
          Launchpad
        </Link>
        <Link to="/esports" onClick={onRedirect}>
          Esports 3.0
        </Link>
        <Link to="/xtreme-championship-series" onClick={onRedirect}>
          XCS
        </Link>
        <Link to="/about-us" onClick={onRedirect}>
          About
        </Link>
        <Link to="/faq" onClick={onRedirect}>
          FAQ
        </Link>
      </div>
    </div>
  );
};
