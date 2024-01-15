'use client';
import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { Images } from '@/assets/imgs';
import { syntaxHighlight } from '@/helpers/strings';
import { GamingUserData } from '@/constants';

interface Metadata {
  'player _name': string;
  gaming_platform: string;
  game_level: number;
  achievements: string[];
  total_score: number;
  preferred_game_mode: string;
  'collected items': {
    weapon: string;
    armor: string;
    pet: string;
  };
}

interface User {
  img: string;
  name: string;
  player_metadata: Metadata;
}

export const GamingWeb = () => {
  const [playerData, setPlayerData] = useState<User | null>();
  const [modalTop, setModalTop] = useState<number | null>();
  const [modalLeft, setModalLeft] = useState<number | null>();
  const [modalRight, setModalRight] = useState<number | null>();
  const [rightAligned, setRightAligned] = useState<boolean>(false);

  const onMouseOver = ({
    el,
    row,
    col,
  }: {
    el: User;
    row: number;
    col: number;
  }) => {
    setModalTop((row - 1) * (76 + 24));
    if (typeof window !== 'undefined' && window.innerWidth > 992)
      setModalLeft(col === 1 ? -16 : 0);
    else setModalLeft(-14);
    if (typeof window !== 'undefined' && window.innerWidth > 992)
      setModalRight(col === 2 ? -16 : 0);
    else setModalRight(-14);
    setRightAligned(col === 1 ? false : true);
    setPlayerData(el);
  };

  return (
    <div className="infrastructure-gaming-web">
      <Image
        className="bubbles"
        src={Images.infrastructure.gamingWebBubbles}
        alt="bubbles"
        width={661}
        height={728}
      />
      <Image
        className="bubbles sm"
        src={Images.infrastructure.gamingWebBubblesSm}
        alt="bubbles"
        width={661}
        height={728}
      />
      <div className="container">
        <div className="gaming-main">
          <div className="left">
            <h1 className="integralfc-h2">The New Gaming Web</h1>

            <div className="lexend-body-sm">
              At the core of the XBorg Data Graph Protocol lies a dynamic and
              interconnected network of gaming profiles. Each player's profile
              is represented as a unique ERC-721 NFT, complete with metadata
              unique to their gaming journey.
            </div>
          </div>
          <div className="right" onMouseLeave={() => setPlayerData(null)}>
            <div
              className={clsx(
                'modal',
                rightAligned && 'right-aligned',
                playerData && 'active',
              )}
              style={{
                top: modalTop - 16 + 'px',
                left: modalLeft + 'px',
                right: modalRight + 'px',
              }}
            >
              <Image
                className="cross"
                src={Images.about.cross}
                alt="cross"
                width={40}
                height={40}
                onClick={() => setPlayerData(null)}
              />
              <div className={clsx('user-badge')}>
                <Image
                  src={playerData?.img}
                  alt={playerData?.name}
                  width={64}
                  height={64}
                />
                <div className="text">{playerData?.name}</div>
              </div>
              <div className="json-body">
                <span className="white">player_metada = </span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: syntaxHighlight(
                      JSON.stringify(playerData?.player_metadata, null, 2),
                    ),
                  }}
                ></span>
              </div>
            </div>
            {GamingUserData.map((el, idx) => {
              return (
                <div
                  key={el.name}
                  className={clsx('box-container', playerData && 'blur')}
                  onMouseOver={() =>
                    onMouseOver({
                      el,
                      row: Math.ceil((idx + 1) / 2),
                      col: idx % 2 !== 0 ? 2 : 1,
                    })
                  }
                >
                  <div className="box">
                    <Image src={el.img} alt={el.name} width={64} height={64} />
                    <div className="name">{el.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
