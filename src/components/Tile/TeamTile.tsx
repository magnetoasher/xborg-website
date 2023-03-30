import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import { Images } from "../../assets/imgs/Images";

export type TeamTileType = {
  image?: any;
  desc?: string;
  title: string;
  linkedin?: string;
  twitter?: string;
};

export const TeamTile = (data: TeamTileType) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      VanillaTilt.init(ref.current, {
        scale: 1.1,
        max: 10,
      });
    }
  }, []);

  return (
    <Link
      to={data.linkedin ?? ""}
      className="team-tile row column middle center text-center"
      ref={ref}
    >
      <div className="image">
        <img src={data.image ?? Images.noimg} alt="" />
      </div>
      <div className="tile-name">{data.title}</div>
      {data.desc && <div className="tile-desc">{data.desc}</div>}
      {/* {data.linkedin || data.twitter ? (
        <div className="tile-socials row">
          {data.linkedin && (
            <a href={data.linkedin} target="_blank">
              LinkedIn
            </a>
          )}
          {data.twitter && (
            <a href={data.twitter} target="_blank">
              Twitter
            </a>
          )}
        </div>
      ) : null} */}
    </Link>
  );
};
