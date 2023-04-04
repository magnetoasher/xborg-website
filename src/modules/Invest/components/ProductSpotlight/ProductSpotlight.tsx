import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EffectCards, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonSecondary,
  ObserverContainer,
  ParallaxLayer,
  SectionDescription,
} from "../../../../components";
import { sleep } from "../../../../helpers/time";
import { AppViewModel } from "../../../../viewmodels/AppViewModel";
import { TextManipulation } from "../../../../viewmodels/textManipulation";

const launchpadItems = [
  {
    image: Images.aboutUs.players.lex,
    name: "Rooniverse",
    description: "$30,000 raised",
  },
  {
    image: Images.aboutUs.players.eskezje,
    name: "Rooniverse 2",
    description: "$60,000 raised",
  },
  {
    image: Images.aboutUs.players.lex,
    name: "Rooniverse",
    description: "$30,000 raised",
  },
  {
    image: Images.aboutUs.players.eskezje,
    name: "Rooniverse 2",
    description: "$60,000 raised",
  },
];

const activePhrases = [
  ["unlock collectibles", "win exclusive prizes"],
  ["TeamBDS", "XBorg’s credential network"],
  ["early-stage Web3 games"],
];

let activeSpotlight: number = 0;

export const ProductSpotlight = () => {
  const titleRef = useRef(null);
  const visionRef = useRef(null);
  const parentRef = useRef(null);
  const blockTitles = [useRef(null), useRef(null), useRef(null)];

  const height = window.innerHeight;
  const [active, setActive] = useState<number>(activeSpotlight);
  const [changing, setChanging] = useState<boolean>(false);

  const appVM = new AppViewModel();
  const textVM = new TextManipulation();

  useEffect(() => {
    if (visionRef.current && parentRef.current) {
      appVM.stickyElement(
        parentRef.current as HTMLElement,
        visionRef.current as HTMLElement,
        onScroll
      );
    }
  }, []);

  const onScroll = (scrolled: number) => {
    const pos2 = height;
    const pos3 = height * 2.6;

    if (scrolled > pos3) {
      if (activeSpotlight !== 2) handleChanging(2);
    } else if (scrolled > pos2) {
      if (activeSpotlight !== 1) handleChanging(1);
    } else {
      if (activeSpotlight !== 0) handleChanging(0);
    }
  };

  const handleChanging = async (number: number) => {
    setChanging(true);

    await sleep(700);

    activeSpotlight = number;
    setActive(number);
    await sleep(100);
    setChanging(false);
  };

  const onAnimationFinish = (index: number) => async (el: HTMLElement) => {
    const list = activePhrases[index];
    let html = el.innerHTML;
    for (let i = 0; i < list.length; i++) {
      html = html.replace(list[i], `<b>${list[i]}</b>`);
    }

    el.innerHTML = html;

    for (let i = 0; i < list.length; i++) {
      await sleep(200 + 50 * i);
      el.getElementsByTagName("b")[i].classList.add("active");
    }
  };

  return (
    <div className="product-spotlight w-full row column middle center">
      <h2 className="text-center">
        Product <span ref={titleRef}>spotlight</span>
      </h2>

      <div
        className="mock-height w-full"
        style={{ height: height * 5 }}
        ref={parentRef}
      >
        <div
          className="products-container row column middle center"
          ref={visionRef}
        >
          <ObserverContainer
            className={`products row between middle${
              changing ? " changing" : ""
            }`}
            onAnimateIn={() => {
              textVM.scrambleText(titleRef);
            }}
          >
            <div className={`state-indicator row column state-${active}`}>
              <span className={active == 0 ? "active" : ""} />
              <span className={active == 1 ? "active" : ""} />
              <span className={active == 2 ? "active" : ""} />
            </div>
            {active == 0 && (
              <>
                <div className="details row column">
                  <div className="row">
                    <div className="before-title">
                      <span>Alpha live</span>
                    </div>
                  </div>

                  <h4 className="details-title">
                    <span ref={blockTitles[0]}>XBorg</span> App
                  </h4>
                  <SectionDescription
                    className="details-desc"
                    onAnimateIn={() => {
                      textVM.scrambleText(blockTitles[0]);
                    }}
                    onAnimateFinish={onAnimationFinish(0)}
                  >
                    Allowing players to unlock collectibles, craft avatars and
                    win exclusive prizes by completing gaming and social
                    challenges.
                  </SectionDescription>
                  <div className="actions row">
                    <ButtonSecondary label="Learn more" />
                  </div>
                </div>

                <ObserverContainer className="parallaxed-container-1 row column middle center">
                  <ParallaxLayer
                    image={Images.xborgapp.badge}
                    factorX={0.1}
                    factorY={0.1}
                    speed={0}
                    isBase
                    className="parallaxed-1"
                  />
                  <ParallaxLayer
                    image={Images.xborgapp.collectible1}
                    factorX={-0.1}
                    factorY={0.1}
                    speed={0}
                    className="parallaxed-2"
                  />
                </ObserverContainer>
              </>
            )}
            {active == 1 && (
              <>
                <div className="details row column">
                  <div className="row">
                    <div className="before-title">
                      <span>Coming soon</span>
                    </div>
                  </div>

                  <h4 className="details-title">
                    <span ref={blockTitles[1]}>MyBDS</span> App
                  </h4>
                  <SectionDescription
                    className="details-desc"
                    onAnimateIn={() => textVM.scrambleText(blockTitles[1])}
                    onAnimateFinish={onAnimationFinish(1)}
                  >
                    TeamBDS is the first tier-1 esports team to build a
                    engagement app for their fans powered by XBorg’s credential
                    network.
                    <br />
                    <br />
                    Launching in Q2 2023.
                  </SectionDescription>
                  <div className="actions row">
                    <ButtonSecondary label="Learn more" />
                  </div>
                </div>

                <ObserverContainer className="parallaxed-container-2 row column middle center">
                  <ParallaxLayer
                    image={Images.invest.teambds}
                    factorX={0.1}
                    factorY={0.1}
                    speed={0}
                    isBase
                    className="parallaxed-1"
                  />
                </ObserverContainer>
              </>
            )}
            {active == 2 && (
              <>
                <div className="details row column">
                  <div className="row">
                    <div className="before-title">
                      <span>Live</span>
                    </div>
                  </div>

                  <h4 className="details-title">
                    <span ref={blockTitles[2]}>Launchpad</span>
                  </h4>
                  <SectionDescription
                    className="details-desc"
                    onAnimateIn={() => textVM.scrambleText(blockTitles[2])}
                    onAnimateFinish={onAnimationFinish(2)}
                  >
                    Providing players investment opportunities in early-stage
                    Web3 games, and developers the platform to access to capital
                    and players.
                  </SectionDescription>
                  <div className="actions row">
                    <ButtonSecondary label="Enter Launchpad" />
                  </div>
                </div>

                <ObserverContainer className="launchpad-swiper row column middle center">
                  <Link to="" className="swiper-prev">
                    <img src={Images.chevron_left.default} alt="left" />
                  </Link>
                  <Link to="" className="swiper-next">
                    <img src={Images.chevron_right.default} alt="right" />
                  </Link>
                  <Swiper
                    parallax
                    pagination={{
                      clickable: true,
                    }}
                    effect={"cards"}
                    speed={500}
                    modules={[Navigation, Pagination, EffectCards]}
                    navigation={{
                      prevEl: ".swiper-prev",
                      nextEl: ".swiper-next",
                    }}
                  >
                    {launchpadItems.map((item, index) => (
                      <SwiperSlide key={index} className="row column">
                        <video autoPlay muted loop>
                          <source
                            src={require("../../../../assets/videos/rooniverse.mp4")}
                            type="video/mp4"
                          />
                        </video>

                        <div className="swiper-name text-center">
                          {item.name}
                        </div>
                        <div className="swiper-description text-center">
                          {item.description}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </ObserverContainer>
              </>
            )}
          </ObserverContainer>
        </div>
      </div>
    </div>
  );
};
