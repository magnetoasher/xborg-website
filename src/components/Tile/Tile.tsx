import { useEffect, useRef } from "react";
import { Images } from "../../assets/imgs/Images";

export type TileType = {
  image?: any;
  title: string;
  desc?: string;
};

export const Tile = (data: TileType) => {
  const ref = useRef(null);

  {
    /*
  useEffect(() => {
    if (ref.current) {
      VanillaTilt.init(ref.current, {
        scale: 1.1,
        max: 10,
      });
    }
  }, []);

*/
  }
  return (
    <div className="tile" ref={ref}>
      <div className="image">
        <img src={data.image ?? Images.noimg} alt="" />
      </div>
      <div className="tile-name">{data.title}</div>
      {data.desc && <div className="tile-desc">{data.desc}</div>}
    </div>
  );
};
