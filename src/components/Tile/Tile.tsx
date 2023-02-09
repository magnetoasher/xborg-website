import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { Images } from "../../assets/imgs/Images";

export type TileType = {
  image?: any;
  title: string;
  desc?: string;
  slug?: string;
};

export const Tile = (data: TileType) => {
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
    <a
      className="tile"
      ref={ref}
      href={`https://launchpad.xborg.com/project/${data.slug}`}
    >
      <div className="image">
        <img src={data.image ?? Images.noimg} alt="" />
      </div>
      <div className="tile-name">{data.title}</div>
      {data.desc && <div className="tile-desc">{data.desc}</div>}
    </a>
  );
};
