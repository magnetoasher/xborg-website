import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
  Table,
  TableDataColumn,
} from "../../../../components";

export const Production = () => {
  const livestreams: TableDataColumn[] = [
    {
      label: "March",
      id: "march",
      list: [
        {
          id: "1",
          label: "Livestream Finals 27th, 28th, 29th, 30th",
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
    <div className='production expand row column'>
      <div className='row middle expand'>
        <div className='description expand'>
          <SectionHead
            title='World Class Production'
            description='Catch all of the action live from our esports studio.'
          >
            World Class <b>Production</b>
          </SectionHead>
        </div>
        <ObserverContainer className='parallaxed expand row middle center'>
          <ParallaxLayer
            image={Images.XCS.production}
            factorX={0.3}
            factorY={0.3}
            speed={0}
            isBase
          />
        </ObserverContainer>
      </div>

      <div className='row column livestreams'>
        <h4 className='title'>Livestream Dates</h4>
        <Table data={livestreams} />
      </div>
    </div>
  );
};
