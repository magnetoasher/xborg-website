import { SectionHead } from "../../../../components";
import { Tile, TileType } from "../../../../components/Tile";
import { teamMock } from "../../../../mocks/team";

export const OurTeam = () => {
  return (
    <div className='our-team expand row column'>
      <SectionHead title='Meet Our Team' />

      <div className='team-list row'>
        {teamMock.map((member: TileType, index: number) => (
          <Tile key={index} {...member} />
        ))}
      </div>
    </div>
  );
};
