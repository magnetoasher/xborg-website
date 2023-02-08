import { Images } from "../../../../assets/imgs/Images";
import { SectionHead } from "../../../../components";
import { Tile, TileType } from "../../../../components/Tile";

export const OurTeam = () => {
  const team: TileType[] = [
    {
      image: Images.aboutUs.team.member01,
      title: "Lois Regis",
      desc: "CEO",
    },
    {
      image: Images.aboutUs.team.member02,
      title: "Connor Kirsten",
      desc: "Growth Lead",
    },
    {
      image: Images.aboutUs.team.member03,
      title: "Joao Goncalves",
      desc: "Esports Lead",
    },
    {
      image: Images.aboutUs.team.member04,
      title: "Hakim Messahli",
      desc: "Community Lead",
    },
    {
      image: Images.aboutUs.team.member05,
      title: "Paulius Pipiras",
      desc: "Design Lead",
    },
    {
      image: Images.aboutUs.team.member06,
      title: "Gauthier Collas",
      desc: "Project Manager",
    },
    {
      image: Images.aboutUs.team.member07,
      title: "Sam Sheikh",
      desc: "Investment Lead",
    },
    {
      image: Images.aboutUs.team.member08,
      title: "Travis Wilkerson",
      desc: "Content Lead",
    },
    {
      image: Images.aboutUs.team.member09,
      title: "Julienas Galt",
      desc: "Project Manager",
    },
    {
      image: Images.aboutUs.team.member10,
      title: "Sean Kamitani",
      desc: "Junior Designer/Editor",
    },
  ];

  return (
    <div className='our-team expand row column'>
      <SectionHead title='Meet Our Team' />

      <div className='team-list row'>
        {team.map((member: TileType, index: number) => (
          <Tile key={index} {...member} />
        ))}
      </div>
    </div>
  );
};
