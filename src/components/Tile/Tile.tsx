import { Images } from "../../assets/imgs/Images";

export type TileType = {
  image?: any;
  title: string;
  desc?: string;
};

export const Tile = (data: TileType) => {
  return (
    <div className='tile'>
      <div className='image'>
        <img src={data.image ?? Images.noimg} alt='' />
      </div>
      <div className='tile-name'>{data.title}</div>
      {data.desc && <div className='tile-desc'>{data.desc}</div>}
    </div>
  );
};
