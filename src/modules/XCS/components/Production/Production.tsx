import { useRef } from "react";
import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  Table,
  TableDataColumn,
  ButtonPrimary,
  SectionDescription,
} from "../../../../components";
import { TextManipulation } from "../../../../viewmodels/textManipulation";

export const Production = () => {
  const scrambleRef = useRef(null);
  const textVM = new TextManipulation();

  const livestreams: TableDataColumn[] = [
    {
      label: "March",
      id: "march",
      list: [
        {
          id: "1",
          label: "Livestream Finals 27th, 28th, 29th, 30th, 31st",
        },
      ],
    },
    {
      label: "May",
      id: "may",
      list: [
        {
          id: "1",
          label: "Livestream Finals 1st, 2nd, 3rd, 4th, 5th,",
        },
      ],
    },
    {
      label: "June",
      id: "june",
      list: [
        {
          id: "1",
          label:
            "Livestream Finals 5th, 6th, 7th, 8th, 9th, Livestream 24th, 25th",
        },
      ],
    },
    {
      label: "July",
      id: "july",
      list: [
        {
          id: "1",
          label:
            "Livestream 1st, 2nd Livestream 8th, 9th Livestream 15th, 16th Livestream 22nd, 23rd",
        },
      ],
    },
  ];

  return (
    <div className="production expand row column">
      <div className="row middle expand">
        <div className="expand w-full">
          <div className="description expand">
            <div className="section-head-container in">
              <div className="row section-head">
                <div className="section-border"></div>
                <div className="row column expand">
                  <img src={Images.logo.default} alt="World Class Production" />
                  <h2 className="section-head-title">
                    World Class
                    <br />
                    <span ref={scrambleRef}>Production</span>
                  </h2>
                </div>
              </div>
              <SectionDescription
                className="section-head-desc"
                onAnimateIn={() => textVM.scrambleText(scrambleRef)}
              >
                Catch all of the action live on Twitch.
              </SectionDescription>
            </div>
          </div>

          <div className="row follow-twitch">
            <ButtonPrimary
              label="Follow us on Twitch"
              to="https://www.twitch.tv/xborgofficial"
              target="_blank"
            />
          </div>
        </div>
        <ObserverContainer className="parallaxed row middle center">
          <ParallaxLayer
            image={Images.XCS.production}
            factorX={0.3}
            factorY={0.3}
            speed={0}
            isBase
          />
        </ObserverContainer>
      </div>

      <div className="row column livestreams">
        <h4 className="title">Livestream Dates</h4>
        <Table data={livestreams} />
      </div>
    </div>
  );
};
