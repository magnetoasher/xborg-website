// Module is not typed. Either this needs to be replaced or refactored
// @ts-ignore
import Tilt from "react-tilt";
import { Images } from "../../assets/imgs/Images";

export type TileType = {
  image?: any;
  title: string;
  desc?: string;
};

export const Tile = (data: TileType) => {
  return (
    <div className='tile'>
      <Tilt className='Tilt' options={{ max: 25 }}>
        <div className='image'>
          <img src={data.image ?? Images.noimg} alt='' />
        </div>
      </Tilt>
      <div className='tile-name'>{data.title}</div>
      {data.desc && <div className='tile-desc'>{data.desc}</div>}
    </div>
  );
};
