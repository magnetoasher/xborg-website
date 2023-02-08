import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const PlugNPlay = () => {
  return (
    <div className={`plug-n-play expand row middle`}>
      <ObserverContainer className='parallaxed expand row middle center'>
        <ParallaxLayer
          image={Images.gamingpassport.epic}
          factorX={0.5}
          factorY={0.5}
          speed={15}
          isBase
          className='parallaxed-1'
        />
        <ParallaxLayer
          image={Images.gamingpassport.steam}
          factorX={0.3}
          factorY={0.3}
          speed={10}
          className='parallaxed-2'
        />
        <ParallaxLayer
          image={Images.gamingpassport.plugnplay}
          factorX={0.1}
          factorY={0.1}
          speed={5}
          className='parallaxed-3'
        />
      </ObserverContainer>
      <div className='description expand'>
        <SectionHead
          title='Plug & Play'
          description='From Steam to Epic Games, easily sync all of your data by connecting your gaming accounts.'
        />
      </div>
    </div>
  );
};
