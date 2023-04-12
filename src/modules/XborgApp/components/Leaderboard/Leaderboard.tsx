import { useRef, useState } from "react";
import { Images } from "../../../../assets/imgs/Images";
import {
  LeaderboardRow,
  LeaderboardRowType,
  ObserverContainer,
  SectionDescription,
} from "../../../../components";
import { TextManipulation } from "../../../../viewmodels/textManipulation";

export const Leaderboard = () => {
  const [rowState, setRowState] = useState<number>(0);
  const data: LeaderboardRowType[] = [
    {
      index: 0,
      image: Images.xborgapp.row1,
      name: "Xborg.eth",
      level: 16,
      xp: "2.5k",
    },
    {
      index: 1,
      image: Images.xborgapp.row2,
      name: "0xF7...baf2",
      level: 15,
      xp: "2.4k",
    },
    {
      index: 2,
      image: Images.xborgapp.row3,
      name: "0xcB...da70",
      level: 14,
      xp: "2.3k",
    },
  ];
  const titleRef = useRef(null);

  const textVM = new TextManipulation();

  const animate = () => {
    setTimeout(() => {
      setRowState(1);
    }, 2000);
    setTimeout(() => {
      setRowState(2);
    }, 3000);
  };

  return (
    <div className={`leaderboard expand row middle between`}>
      <div className="description expand">
        <div className={"section-head-container"}>
          <div className="row section-head">
            <div className="section-border" />
            <div className="row column expand">
              <img src={Images.logo.default} alt="" />

              <h2 className="section-head-title">
                <span ref={titleRef}>Top the</span>
                <br />
                leaderboards
              </h2>
            </div>
          </div>
          <SectionDescription
            className="section-head-desc"
            onAnimateIn={() => textVM.scrambleText(titleRef)}
          >
            Grind your favourite games, complete social quests and climb up the
            leaderboard to unlock exclusive rewards.
          </SectionDescription>
        </div>
      </div>
      <ObserverContainer
        className="parallaxed row center middle expand"
        onAnimateIn={animate}
        onAnimateOut={() => {
          setRowState(0);
        }}
      >
        <div className={`row column list state-${rowState}`}>
          {data.map((item: LeaderboardRowType, index: number) => (
            <LeaderboardRow {...item} index={index + 1} key={index} />
          ))}
          <div className="border" />
        </div>
      </ObserverContainer>
    </div>
  );
};
