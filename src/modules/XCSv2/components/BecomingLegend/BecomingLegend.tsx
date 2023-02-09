import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
  Table,
  TableDataColumn,
} from "../../../../components";

export const BecomingLegend = () => {
  const episodes: TableDataColumn[] = [
    {
      label: "March",
      id: "march",
      list: [
        {
          id: "1",
          label: "Episode 1, 12th",
        },
        {
          id: "2",
          label: "Episode 2, 19th",
        },
        {
          id: "3",
          label: "Episode 3, 26th",
        },
      ],
    },
    {
      label: "April",
      id: "april",
      list: [
        {
          id: "1",
          label: "Episode 4, 16th",
        },
        {
          id: "2",
          label: "Episode 5, 23rd",
        },
        {
          id: "3",
          label: "Episode 6, 26th",
        },
      ],
    },
    {
      label: "May",
      id: "may",
      list: [
        {
          id: "1",
          label: "Episode 7, 21st",
        },
        {
          id: "2",
          label: "Episode 8, 28th",
        },
      ],
    },
    {
      label: "June",
      id: "june",
      list: [
        {
          id: "1",
          label: "Episode 9, 4th",
        },
        {
          id: "2",
          label: "Episode 10, 21st",
        },
        {
          id: "3",
          label: "Episode 11, 28th",
        },
      ],
    },
    {
      label: "July",
      id: "july",
      list: [
        {
          id: "1",
          label: "Episode 12, 5th",
        },
        {
          id: "2",
          label: "Episode 13, 12th",
        },
        {
          id: "3",
          label: "Episode 14, 19th",
        },
      ],
    },
  ];

  return (
    <div className={`becoming-legend expand row column`}>
      <div className='row middle between expand'>
        <div className='description expand'>
          <SectionHead
            title='Becoming A Legend'
            description='A 15 episode docu-series with behind the scenes drama, match-day highlights, and exclusive interviews.'
          >
            <b>Becoming</b> A Legend
          </SectionHead>
        </div>
        <ObserverContainer className='parallaxed expand row middle center'>
          <ParallaxLayer
            image={Images.XCS.camera}
            factorX={0.3}
            factorY={0.3}
            speed={0}
            isBase
            className='parallaxed-1'
          />
        </ObserverContainer>
      </div>
      <div className='episodes'>
        <h4 className='title'>Episode Dates</h4>
        <Table data={episodes} />
      </div>
    </div>
  );
};
