import { MouseParallaxChild } from "react-parallax-mouse";
import { Images } from "../../assets/imgs/Images";

export type LeaderboardRowType = {
  index: number;
  image: any;
  name: string;
  level: number;
  xp: string;
};

export const LeaderboardRow = ({
  index,
  name,
  level,
  image,
  xp,
}: LeaderboardRowType) => {
  return (
    <MouseParallaxChild
      factorX={0.1 * (index + 1)}
      factorY={0}
      className='leaderboard-row row middle'
    >
      <div className='index row middle center'>{index}</div>
      <div className='image'>
        <img src={image} alt='' />
      </div>
      <div className='row column'>
        <div className='name'>{name}</div>
        <div className='level row middle center'>{level} Level</div>
      </div>
      <div className='row middle xp'>
        <img src={Images.gamingpassport.emerald} alt='' />
        {xp} XP
      </div>
    </MouseParallaxChild>
  );
};
