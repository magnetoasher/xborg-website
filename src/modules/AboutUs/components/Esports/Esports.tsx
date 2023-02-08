import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../../reducer";

export const Esports = () => {
  const { tournamentsOrganized, prizesPaid, participants } = useSelector(
    (state: GlobalState) => state.aboutUs,
  );

  return (
    <div className={`esports expand row middle between`}>
      <div className='description expand'>
        <SectionHead
          title='We Love Esports'
          description='We live for exciting plays, clutch moments, and seeing our favourite team lift the trophy.'
        />
        <div className='statistics row between'>
          <div className='col'>
            <div className='stats-value'>{tournamentsOrganized}</div>
            <div className='stats-label'>Tournaments Organised</div>
          </div>
          <div className='col'>
            <div className='stats-value'> ${prizesPaid.toLocaleString()}</div>
            <div className='stats-label'>Prizes Paid</div>
          </div>
          <div className='col'>
            <div className='stats-value'>+{participants.toLocaleString()}</div>
            <div className='stats-label'>Participants</div>
          </div>
        </div>
      </div>

      <ObserverContainer className='parallaxed expand row middle center'>
        <ParallaxLayer
          image={Images.aboutUs.trophy}
          factorX={0.1}
          factorY={0.1}
          speed={-1}
          isBase
          className='parallaxed-1'
        />
        <ParallaxLayer
          image={Images.aboutUs.crown}
          factorX={0.2}
          factorY={0.2}
          speed={-5}
          className='parallaxed-2'
        />
      </ObserverContainer>
    </div>
  );
};
