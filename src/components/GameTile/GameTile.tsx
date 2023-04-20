import React, { useEffect, useRef } from "react";

import VanillaTilt from "vanilla-tilt";

export type SingleGameType = {
  image: string;
  image2: string;
  title: string;
  quests: number;
  players: number | string;
};

export const GameTile = ({
  title,
  quests,
  players,
  image,
  image2,
}: SingleGameType) => {
  const ref = useRef(null);

  useEffect(() => {
    const current = ref.current;
    if (current) {
      setTimeout(() => {
        VanillaTilt.init(current, {
          max: 2,
          scale: 1.1,
          glare: true,
          "max-glare": 0.5,
        });
      }, 500);
    }
  }, []);

  return (
    <div className="game-tile" ref={ref}>
      <img src={image2} alt={title} className="avatar" />
      <img src={image} alt={title} className="game" />
      <div className="game-details">
        <h2 className="game-title lexend-heading">{title}</h2>
        <div className="row middle lexend-heading-xxs">
          <div className="game-quests tag">{quests} Quests Available</div>
          <div className="game-players tag">{players} Players</div>
        </div>
      </div>
    </div>
  );
};
