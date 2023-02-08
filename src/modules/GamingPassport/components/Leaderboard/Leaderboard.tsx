import { Images } from "../../../../assets/imgs/Images";
import {
  LeaderboardRow,
  LeaderboardRowType,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const Leaderboard = () => {
  const data: LeaderboardRowType[] = [
    {
      index: 0,
      image: Images.launchpad.row1,
      name: "Xborg.eth",
      level: 16,
      xp: "2.5k",
    },
    {
      index: 0,
      image: Images.launchpad.row2,
      name: "0xF7...baf2",
      level: 15,
      xp: "2.4k",
    },
    {
      index: 0,
      image: Images.launchpad.row3,
      name: "0xF7...baf2",
      level: 14,
      xp: "2.3k",
    },
  ];
  return (
    <div className={`leaderboard expand row middle between`}>
      <div className='description expand'>
        <SectionHead
          title='Top The Leaderboards'
          description='Flex your gaming badges, showcase your achievements, and compare your stats against the best players in the world.'
        />
      </div>
      <ObserverContainer className='parallaxed row center middle expand'>
        <div className='row column list'>
          {data.map((item: LeaderboardRowType, index: number) => (
            <LeaderboardRow {...item} index={index + 1} key={index} />
          ))}
          <div className='border' />
        </div>
      </ObserverContainer>
    </div>
  );
};
