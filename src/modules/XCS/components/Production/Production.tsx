import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  Table,
  TableDataColumn,
  ButtonPrimary,
  SectionHead,
} from "../../../../components";

export const Production = () => {
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
            <SectionHead
              title={
                <>
                  World Class
                  <br />
                  <span>Production</span>
                </>
              }
              logo={Images.logo.default}
              smallerHeading
            >
              <p className="lexend-body-m">
                Catch all of the action live on Twitch.
              </p>
            </SectionHead>
          </div>

          <div className="row follow-twitch">
            <ButtonPrimary
              label="Follow us on Twitch"
              href="https://www.twitch.tv/xborgofficial"
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
        <h4 className="vista-heading">Livestream Dates</h4>
        <Table data={livestreams} />
      </div>
    </div>
  );
};
